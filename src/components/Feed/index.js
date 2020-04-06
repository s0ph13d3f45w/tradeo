import React, {useEffect, useCallback, useState, useContext } from 'react'
import { useTransition, animated } from 'react-spring'
import { UserContext } from '../../context/usersContext'
import UserCard from './UserCard'
import UserProfile from '../UserProfile'
import FilterCrumb from './FilterCrumb'

import { makeStyles } from '@material-ui/core/styles'
import {Container, Drawer} from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  root:{
    marginTop:20,
    backgroundColor: theme.palette.background.default
  }
}))


  export default function({theme}){
    const { list, dispatch, localData } = useContext(UserContext)
    const [ state, setState ] = useState(false)
    const classes = useStyles(theme)

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
      <Container className={classes.root}>
        <br />
        <FilterCrumb dispatch={dispatch}/>
        {list.isError && <p>Something went wrong...</p>}
        {list.isLoading 
          ? <p>Loading...</p>
          : transition.map(({item, key, props}) => (
            <animated.div key={key} style={props}>
              <UserCard
                data={item} 
                dispatch={dispatch}
                showProfile={displayUserProfile}
                theme={theme} />
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
    )
  }