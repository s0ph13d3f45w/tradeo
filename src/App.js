import React, {Suspense, useState, useCallback} from 'react'
import Feed from './components/Feed'
import NavBar from './components/AppBar'

import {ThemeProvider} from '@material-ui/core/styles'
import {createMuiTheme} from '@material-ui/core'
import './App.css'


const themeObject = {
  palette:{
    primary: {main: '#00acc1'},
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
        primary: {main: '#00acc1'}}
    })
    setTheme(newTheme)
  }, [theme])


  return(
      <ThemeProvider theme={theme}>
        <Suspense fallback={null}>
          <NavBar toggleTheme={toggleTheme} theme={theme}/>
          <Feed theme={theme}/>
        </Suspense>
      </ThemeProvider>
  )
}