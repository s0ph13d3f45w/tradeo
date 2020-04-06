import React, {useEffect, useCallback, useState, useContext } from 'react'
import MainLayout from '../layouts/MainLayout'
import { UserContext } from '../context/usersContext'
import { TemaContext } from '../context/themeContext'
import { useTranslation } from 'react-i18next'
import { useTransition, animated } from 'react-spring'
import UserCard from '../components/Feed/UserCard'
import UserProfile from '../components/UserProfile'
import FilterCrumb from '../components/Feed/FilterCrumb'

import { makeStyles } from '@material-ui/core/styles'
import {Container, Drawer} from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  root:{
    marginTop:40,
    backgroundColor: theme.palette.background.default
  }
}))


  export default function(){
    const { list, dispatch, localData } = useContext(UserContext)
    const {theme} = useContext(TemaContext)
    const [ state, setState ] = useState(false)
    const classes = useStyles(theme)
    const {t} = useTranslation()

    const transition = useTransition(list.displayList, item => item.id, {
      from: { opacity: 0},
      enter: { opacity: 1},
      leave: { opacity: 0}
    })
   
    const fetchData = useCallback(() =>{
      dispatch({ type: 'SET_LIST_INIT'})
      try {
        setTimeout(()=>{
          dispatch({ 
            type: 'SET_LIST_SUCCESS',
            payload: localData
          }) 
        }, 2000) 
      } catch (error) {
        dispatch({ type: 'SET_LIST_FAILURE'})
      }
    },[localData, dispatch])
 
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
          <FilterCrumb dispatch={dispatch} t={t}/>
          {list.isError && <p>Something went wrong...</p>}
          {list.isLoading 
            ? <p>Loading...</p>
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
            anchor={'right'} 
            open={state} 
            onClose={toggleDrawer}
            >
              <UserProfile user={list.user} />
          </Drawer>
        </Container>
      </MainLayout>
    )
  }