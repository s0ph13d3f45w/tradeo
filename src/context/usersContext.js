import React, {createContext, useReducer} from 'react'

export const UserContext = createContext()

function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

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
          displayList: shuffle(action.payload)
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
            action.payload.uid !== user.uid
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
          displayList: shuffle(state.data.filter(user =>
            action.payload === user.type
          ))
        }
      case 'SET_FILTER_ALL':
        return{
          ...state,
          displayList: shuffle(state.data.concat())
        }
      case 'SET_FILTER_TAGS':
        return{
          ...state,
          displayList: shuffle(state.data.filter(user =>
            user.tag.includes(action.payload)
          ))
        }
      case 'SET_LOCATION_FILTER':
        return{
          ...state,
          displayList: shuffle(state.data.filter(user =>
            user.location.city === action.payload))
        }
      case 'SET_LOGIN_GOOGLE':
        return{
          ...state,
          userProfile: action.payload
        }
      default: new Error()
      }
    }
  
   const initialData = {
     data: [],
     displayList: [],
     isLoading: false,
     isError: false,
     user: {},
     userProfile: {}
   }
  
const UserProvider = ({children}) =>{
    const [list, dispatch] = useReducer(feedReducer, initialData)
    return(
        <UserContext.Provider value={{list, dispatch}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider