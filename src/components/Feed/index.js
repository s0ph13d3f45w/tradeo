import React, { useReducer, useEffect, useCallback, useState } from 'react'
import { useTransition, animated } from 'react-spring'

import UserCard from './UserCard'
import UserProfile from '../UserProfile'
import ProfileDos from '../DrawerHand'
import FilterCrumb from './FilterCrumb'

import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Drawer from '@material-ui/core/Drawer'

const feedReducer = (state, action) =>{
  switch(action.type){
    case 'SET_LIST_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    case 'SET_LIST_SUCCESS':
      return{
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
        displayList: action.payload
      }
    case 'SET_LIST_FAILURE':
      return{
        ...state,
        isLoading: false,
        isError: true
      }
    case 'SET_REMOVE_USER':
      return{
        ...state,
        data: state.data.filter(user =>
          action.payload.id !== user.id
        )
      }
    case 'SET_DRAWER_USER':
      return{
        ...state,
        user: action.payload
      }
    case 'SET_FILTER':
      return{
        ...state,
        displayList: state.data.filter(user =>
          action.payload === user.type
        )
      }
    case 'SET_FILTER_ALL':
      return{
        ...state,
        displayList: state.data.concat()
      }
    default: new Error()
    }
  }

 const initialData = {
   data: [],
   displayList: [],
   isLoading: false,
   isError: false,
   user: {}
 }

 const dataEx = 
    [
      {   
        id: 1,
        name: 'Jesus',
        type: 'services',
        descriptive_area: 'design_male',
        skills: ['web_dev'],
        interested: ['handcraft', 'repairment'],
        votes: {
          counter: 1,
          points: 4,
        },
        number: '+529841466416',
        email: 'jesuscovam@gmail.com',
          image: "https://i.ibb.co/pXqDrvJ/profile.jpg",
          wallpaper: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          description: "Sint adipisicing laborum quis velit et sunt reprehenderit ut cillum."
      },
      {   
        id: 2,
        name: 'Sophie',
        type: 'services',
        descriptive_area: 'creative_writer_female',
        skills: ['ux_dev', 'content_writer'],
        interested: ['teaching', 'repairment'],
        votes: {
          counter: 1,
          points: 4,
        },
        number: '+393479319226',
        email: 'sophiedefauw@gmail.com',
        images:[
          'https://storage.googleapis.com/spec-host/mio-staging%2Fmio-design%2F1584058305895%2Fassets%2F1kVVLIES2HDnnmqXgAvglbAK8a-oVEEh0%2Fintro-illo-motion.png',
          'https://storage.googleapis.com/spec-host/mio-staging%2Fmio-design%2F1584058305895%2Fassets%2F1Hfurrx3NHOuac_WreNWxG-2qdKjliIx_%2Fintro-illo-metaphor.png',
          'https://pbs.twimg.com/profile_images/664504497243209728/YAp07ofw_400x400.jpg'
        ],
        image: 'https://i.ibb.co/DYr7RXT/IMG-3-E054-BF552-F8-1.jpg',
        wallpaper: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",
        description: "Sint adipisicing laborum quis velit et sunt reprehenderit ut cillum."
    },
    {   
      id: 3,
      name: 'Jesus',
      type: 'services',
      descriptive_area: 'design_male',
      skills: ['web_dev'],
      interested: ['handcraft', 'repairment'],
      votes: {
        counter: 0,
        points: 0,
      },
      number: '+529841466416',
      email: 'jesuscovam@gmail.com',
        image: "https://i.ibb.co/pXqDrvJ/profile.jpg",
        wallpaper: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        description: "Sint adipisicing laborum quis velit et sunt reprehenderit ut cillum."
    },
    {   
      id: 4,
      name: 'Leo',
      type: 'products',
      descriptive_area: 'design_male',
      skills: ['food'],
      interested: ['handcraft', 'repairment'],
      votes: {
        counter: 0,
        points: 0,
      },
      number: '+529841466416',
      email: 'jesuscovam@gmail.com',
        image: "https://i.imgur.com/FBljCbY.jpg",
        wallpaper: "https://images.unsplash.com/photo-1584663639452-b79f2cfecb0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        description: "Sint adipisicing laborum quis velit et sunt reprehenderit ut cillum."
    },

  ]

  const useStyles = makeStyles(theme => ({
    root:{
      marginTop: 50,
      backgroundColor: theme.palette.background.default
    }
  }))


  export default function({theme}){
    const [ list, dispatch ] = useReducer(feedReducer, initialData)
    const [ localData] = useState(dataEx)
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
    }, [localData])
 
    useEffect(() =>{
     fetchData()
    }, [fetchData])

    const handleRemoveUser = user =>
      dispatch({
        type: 'SET_REMOVE_USER',
        payload: user
      })
    
    const toggleDrawer = () => 
      setState(!state)
    
      
    const displayUserProfile = user =>{
      dispatch({
        type: 'SET_DRAWER_USER',
        payload: user
      })
      toggleDrawer()
    }

    const setFilter = filter =>{
      dispatch({
        type: 'SET_FILTER',
        payload: filter
      })
    }

    const setFilterAll = () =>
      dispatch({type: 'SET_FILTER_ALL'})
    


    return(
      <Container className={classes.root}>
        <br />
        <FilterCrumb setFilter={setFilter} setFilterAll={setFilterAll}/>
        {list.isError && <p>Something went wrong...</p>}
        {list.isLoading ? <p>Loading...</p>
          : transition.map(({item, key, props}) => (
            <animated.div key={key} style={props}>
              <UserCard
                data={item} 
                removeUser={handleRemoveUser}
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
      </Container>)
  }

 

