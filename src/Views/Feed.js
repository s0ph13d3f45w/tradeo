import React, {useEffect, useCallback, useState, useContext } from 'react'
import MainLayout from '../layouts/MainLayout'
import { UserContext } from '../context/usersContext'
import { TemaContext } from '../context/themeContext'
import { useTranslation } from 'react-i18next'
import { useTransition, animated } from 'react-spring'
import UserCard from '../components/UserCard'
import UserProfile from '../components/Profiles/UserProfile'
import FilterBar from '../components/FilterBar'
import {firestore, auth} from '../firebase'
import { makeStyles } from '@material-ui/core/styles'
import {Container, Drawer} from '@material-ui/core'
import Spinner from '../components/Layout/Spinner'

const AnimatedUserCard = animated(UserCard)

const useStyles = makeStyles(theme => ({
  root:{
    marginTop:40,
    backgroundColor: theme.palette.background.default
  },
 
}))
  const Feed = () =>{
    const { list, dispatch} = useContext(UserContext)
    const {theme} = useContext(TemaContext)
    const [ profile, setProfile ] = useState(false)
    const toggleProfile = () => setProfile(!profile)
    const {t} = useTranslation()
    const classes = useStyles(theme)


    const transition = useTransition(list.displayList, item => item.uid, {
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
          payload: users.filter(user => user.uid !== auth.currentUser.uid)
        })
      } catch (error) {
        dispatch({ type: 'SET_LIST_FAILURE'})
      }
    },[dispatch])
 
    useEffect(() =>{
     fetchData()
    }, [fetchData])

    return(
      <MainLayout>
        <Container className={classes.root}>
          <br />
          <FilterBar t={t}/>
          {list.isError && <p>Something went wrong...</p>}
          {list.isLoading 
            ? <Spinner/>
            : transition.map(({item, key, props}) => (
              <AnimatedUserCard 
                key={key} 
                style={props}
                data={item} 
                dispatch={dispatch}
                setProfile={toggleProfile}
                theme={theme}
                t={t} 
                />
             )
            )
          }
          <br />
          <br />
          <br />
          <br />
          <Drawer 
            anchor="right"
            open={profile} 
            onClose={toggleProfile}
            >
              <UserProfile userProfile={list.user} />
          </Drawer>
        </Container>
      </MainLayout>
    )
  }

export default Feed