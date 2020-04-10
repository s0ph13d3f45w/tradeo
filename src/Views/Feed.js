import React, {useEffect, useCallback, useState, useContext } from 'react'
import MainLayout from '../layouts/MainLayout'
import { UserContext } from '../context/usersContext'
import { TemaContext } from '../context/themeContext'
import { useTranslation } from 'react-i18next'
import { useTransition, animated } from 'react-spring'
import UserCard from '../components/Feed/UserCard'
import UserProfile from '../components/Profiles/UserProfile'
import FilterBar from '../components/Feed/FilterBar'
import BottomBar from '../components/Feed/BottomBar'
import {firestore} from '../firebase'

import { makeStyles } from '@material-ui/core/styles'
import {Container, Drawer, CircularProgress} from '@material-ui/core'
import UserOwnProfile from '../components/Profiles/UserOwnProfile'


const useStyles = makeStyles(theme => ({
  root:{
    marginTop:40,
    backgroundColor: theme.palette.background.default
  },
  spinner:{
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(2, 0),
    height: '100vh'
  }
}))

const Spinner  = ({classObj}) =>
  <div className={classObj.spinner}>
    <CircularProgress />
  </div>


  const Feed = (props) =>{
    const { list, dispatch} = useContext(UserContext)
    const {theme} = useContext(TemaContext)
    const [ state, setState ] = useState(false)
    const classes = useStyles(theme)
    const [show, setShow] = useState(false)
    const toggleShow = () => setShow(!show)
    const {t} = useTranslation()

    const transition = useTransition(list.displayList, item => item.id, {
      from: { opacity: 0},
      enter: { opacity: 1},
      leave: { opacity: 0}
    })
   
    const fetchData = useCallback(async () =>{
      dispatch({ type: 'SET_LIST_INIT'})
      try { 
        const snapshot = await firestore.collection('users').get()
        const users = snapshot.docs.map(user => {return {...user.data()}})
        dispatch({
          type: 'SET_LIST_SUCCESS',
          payload: users
        })
      } catch (error) {
        dispatch({ type: 'SET_LIST_FAILURE'})
      }
    },[dispatch])
 
    useEffect(() =>{
     fetchData()
    }, [fetchData])
    
    const toggleDrawer = () => 
      setState(!state)
     
    const displayUserProfile = user =>{
      dispatch({
        type: 'SET_DRAWER_USER',
        payload: user
      })
      toggleDrawer()
    }

    return(
      <MainLayout>
        <Container className={classes.root}>
          <br />
          {/* <FilterCrumb dispatch={dispatch} t={t}/> */}
          <FilterBar t={t}/>
          {list.isError && <p>Something went wrong...</p>}
          {list.isLoading 
            ? <Spinner classObj={classes} />
            : transition.map(({item, key, props}) => (
              <animated.div key={key} style={props}>
                <UserCard
                  data={item} 
                  dispatch={dispatch}
                  showProfile={displayUserProfile}
                  theme={theme}
                  t={t} />
              </animated.div>
            ))
          }

          {/* <ProfileDos isOpen={state} close={toggleDrawer}>
            <UserProfile user={list.user} close={toggleDrawer} />
          </ProfileDos> */}

          <Drawer 
            anchor="right"
            open={state} 
            onClose={toggleDrawer}
            >
              <UserProfile user={list.user} />
          </Drawer>
          <Drawer anchor="left" open={show} onClose={toggleShow}>
              <UserOwnProfile history={props.history} {...list.userProfile} />
          </Drawer>
          <BottomBar t={t} 
            toggleShow={toggleShow}
            profile={list.userProfile.photoURL}/>
        </Container>
      </MainLayout>
    )
  }

export default Feed