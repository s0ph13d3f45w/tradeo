import React, {Suspense, useContext} from 'react'
import {TemaContext} from './context/themeContext'
import Feed from './Views/Feed'
import SignIn from './Views/SignIn'
import UserProvider from './context/usersContext'
import {ThemeProvider} from '@material-ui/core/styles'
import {CssBaseline} from '@material-ui/core'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'


export default function(){
  const {theme} = useContext(TemaContext)
  return(
        <ThemeProvider theme={theme}>
          <Router>
            <CssBaseline />
            <Suspense fallback={null}>
              {/* <UserProvider>
                <Feed />
              </UserProvider> */}
              <UserProvider>
                <Switch>
                  <Route exact path="/" component={SignIn} />
                  <Route path="/feed" component={Feed} />
                </Switch>
              </UserProvider>
            </Suspense>
          </Router>
        </ThemeProvider>
  )
}