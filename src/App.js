import React, {Suspense, useState, useCallback} from 'react'
import Feed from './components/Feed/index'
import NavBar from './components/AppBar'
import UserProvider from './context/usersContext'
import {ThemeProvider} from '@material-ui/core/styles'
import {createMuiTheme} from '@material-ui/core'
import './App.css'


const themeObject = {
  palette:{
    primary: {main: '#006064'},
    secondary: {main: '#00838f'},
    type:'light'
  }
}


export default function(){
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
      <ThemeProvider theme={theme}>
        <Suspense fallback={null}>
          <NavBar toggleTheme={toggleTheme} theme={theme}/>
          <UserProvider>
            <Feed theme={theme}/>
          </UserProvider>
        </Suspense>
      </ThemeProvider>
  )
}