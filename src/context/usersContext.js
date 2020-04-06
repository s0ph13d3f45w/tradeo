import React, {createContext, useReducer, useState} from 'react'

export const UserContext = createContext()

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
          displayList: state.displayList.filter(user =>
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
      case 'SET_FILTER_TAGS':
        return{
          ...state,
          displayList: state.data.filter(user =>
            user.tags.includes(action.payload)
          )
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
          tags: ["dev", "web", "pagina web", "development"],
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
          tags: ["ux", "ui", "contenido", "escritos", "write"],
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
        tags:[],
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
        tags: ["chilli"],
        number: '+529841466416',
        email: 'jesuscovam@gmail.com',
          image: "https://i.imgur.com/FBljCbY.jpg",
          wallpaper: "https://images.unsplash.com/photo-1584663639452-b79f2cfecb0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
          description: "Sint adipisicing laborum quis velit et sunt reprehenderit ut cillum."
      },
  
    ]


const UserProvider = ({children}) =>{
    const [list, dispatch] = useReducer(feedReducer, initialData)
    const [localData] = useState(dataEx)
    return(
        <UserContext.Provider value={{list, dispatch, localData}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider