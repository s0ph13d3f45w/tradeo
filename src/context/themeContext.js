import React, {useState, createContext, useCallback} from 'react'
import {createMuiTheme} from '@material-ui/core'

const themeObject = {
    palette:{
      primary: {main: '#1565c0'},
      secondary: {main: '#0091ea'},
      type:'light'
    }
  }

export const TemaContext = createContext()

const TemaProvider = ({children}) =>{
    const [theme, setTheme] = useState(createMuiTheme(themeObject))

    const toggleTheme = useCallback(() =>{
        const newTheme = createMuiTheme({
        ...theme,
        palette: {
            type: theme.palette.type === 'light' ? 'dark' : 'light',
            primary: {main: '#1565c0'},
            secondary: {main: '#0091ea'}}
        })
        setTheme(newTheme)
    }, [theme])
    
    return(
        <TemaContext.Provider value={{theme, toggleTheme}}>
            {children}
        </TemaContext.Provider>
    )
}

export default TemaProvider