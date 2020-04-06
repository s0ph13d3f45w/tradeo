import React, {useState, createContext, useCallback} from 'react'
import {createMuiTheme} from '@material-ui/core'

const themeObject = {
    palette:{
      primary: {main: '#006064'},
      secondary: {main: '#00838f'},
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
            primary: {main: '#006064'},
            secondary: {main: '#00838f'}}
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