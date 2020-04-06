import React, {Suspense, useContext} from 'react'
import {TemaContext} from './context/themeContext'
import Feed from './Views/Feed'
import UserProvider from './context/usersContext'
import {ThemeProvider} from '@material-ui/core/styles'

import './App.css'


export default function(){
  const {theme} = useContext(TemaContext)
  return(
        <ThemeProvider theme={theme}>
          <Suspense fallback={null}>
            <UserProvider>
              <Feed />
            </UserProvider>
          </Suspense>
        </ThemeProvider>
  )
}