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
import { UserSessionContext } from '../context/userSessionContext'


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
    const {user} = useContext(UserSessionContext)
    const {theme} = useContext(TemaContext)
    const [ profile, setProfile ] = useState(false)
    const [ownProfile, setOwnProfile] = useState(false)
    const {t} = useTranslation()
    const classes = useStyles(theme)

    const transition = useTransition(list.displayList, item => item.id, {
      from: { opacity: 0},
      enter: { opacity: 1},
      leave: { opacity: 0}
    })
   
    const fetchData = useCallback(async () =>{
      dispatch({ type: 'SET_LIST_INIT'})
      try { 
        const snapshot = await firestore.collection('users').get()
        const users = snapshot.docs.map(user => {return {uid: user.uid, ...user.data()}})
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

    const toggleOwnProfile = () => setOwnProfile(!ownProfile)

    return(
      <MainLayout>
        <Container className={classes.root}>
          <br />
          <FilterBar t={t}/>
          {/* {list.isError && <p>Something went wrong...</p>}
          {list.isLoading 
            ? <Spinner classObj={classes} />
            : transition.map(({item, key, props}) => (
              item && (<animated.div key={key} style={props}>
                <UserCard
                  data={item} 
                  dispatch={dispatch}
                  setProfile={() => setProfile(!profile)}
                  theme={theme}
                  t={t} />
              </animated.div>)
            ))
          } */}
          <br />
          <br />
          <br />
          <br />
          <Drawer 
            anchor="right"
            open={profile} 
            onClose={() => setProfile(!profile)}
            >
              <UserProfile user={list.user} />
          </Drawer>
          <Drawer anchor="left" open={ownProfile} onClose={toggleOwnProfile}>
              <UserOwnProfile history={props.history}/>
          </Drawer>
          {user
          ? <BottomBar t={t} 
            toggleShow={toggleOwnProfile}
            profile={user.photoURL}/>
          : <BottomBar t={t} 
          toggleShow={toggleOwnProfile}
          profile={list.userProfile}/>}
       
        </Container>
      </MainLayout>
    )
  }

export default Feed