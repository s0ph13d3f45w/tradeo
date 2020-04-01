import React, { useReducer, useEffect, useCallback, useState } from 'react'
import { useTransition, animated } from 'react-spring'

import UserCard from './UserCard'
import UserProfile from './UserProfile'
import ProfileDos from './DrawerHand'

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
        data: action.payload 
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
    default: new Error()
    }
  }

 const initialData = {
   data: [],
   isLoading: false,
   isError: false,
   user: {}
 }

 const dataEx = 
    [
      {   
        id: 1,
        name: 'Jesus',
        descriptive_area: 'design_male',
        skills: ['web_dev'],
        interested: ['handcraft', 'repairment'],
        email: 'jesuscovam@gmail.com',
          image: "https://i.ibb.co/pXqDrvJ/profile.jpg",
          wallpaper: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        description: 'Tempor cillum consequat sunt consequat consequat ullamco amet. Laborum pariatur culpa quis nostrud reprehenderit cillum. In do aliqua incididunt nulla. Voluptate Lorem excepteur aute aliquip do et irure laboris officia. Aliquip duis cupidatat enim id voluptate consectetur. Cillum enim sint est esse dolor eiusmod nisi anim magna amet culpa irure aliquip veniam. Anim ad labore labore id id.'
      },
      {   
        id: 2,
        name: 'Sophie',
        descriptive_area: 'creative_writer_female',
        skills: ['ux_dev', 'content_writer'],
        interested: ['teaching', 'repairment'],
        email: 'sophiedefauw@gmail.com',
        image: 'https://i.ibb.co/DYr7RXT/IMG-3-E054-BF552-F8-1.jpg',
        wallpaper: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",
        description: 'Tempor cillum consequat sunt consequat consequat ullamco amet. Laborum pariatur culpa quis nostrud reprehenderit cillum. In do aliqua incididunt nulla. Voluptate Lorem excepteur aute aliquip do et irure laboris officia. Aliquip duis cupidatat enim id voluptate consectetur. Cillum enim sint est esse dolor eiusmod nisi anim magna amet culpa irure aliquip veniam. Anim ad labore labore id id.'
    },
    {   
      id: 3,
      name: 'Jesus',
      descriptive_area: 'design_male',
      skills: ['web_dev'],
      interested: ['handcraft', 'repairment'],
      email: 'jesuscovam@gmail.com',
        image: "https://i.ibb.co/pXqDrvJ/profile.jpg",
        wallpaper: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      description: 'Tempor cillum consequat sunt consequat consequat ullamco amet. Laborum pariatur culpa quis nostrud reprehenderit cillum. In do aliqua incididunt nulla. Voluptate Lorem excepteur aute aliquip do et irure laboris officia. Aliquip duis cupidatat enim id voluptate consectetur. Cillum enim sint est esse dolor eiusmod nisi anim magna amet culpa irure aliquip veniam. Anim ad labore labore id id.'
    },

  ]

  export default function(){
    const [ list, dispatch ] = useReducer(feedReducer, initialData)
    const [ localData] = useState(dataEx)
    const [ state, setState ] = useState(false)

    const transition = useTransition(list.data, item => item.id, {
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

    return(
      <>

        {list.isError && <p>Something went wrong...</p>}
        {list.isLoading ? <p>Loading...</p>
        // : list.data.map(user =>
        //     <UserCard 
        //       key={user.id} 
        //       data={user} 
        //       removeUser={handleRemoveUser}
        //       showProfile={displayUserProfile} />
        //   )
          : transition.map(({item, key, props}) => (
            <animated.div key={key} style={props}>
              <UserCard
                data={item} 
                removeUser={handleRemoveUser}
                showProfile={displayUserProfile} />
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
      </>)
  }

 

