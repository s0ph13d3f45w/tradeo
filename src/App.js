import React, {Suspense, useContext} from 'react'
import {TemaContext} from './context/themeContext'
import Feed from './Views/Feed'
import Login from './Views/Login'
import Admin from './Views/Admin'
import UserProvider from './context/usersContext'
import {ThemeProvider} from '@material-ui/core/styles'
import {CssBaseline} from '@material-ui/core'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'


export default function(){
  const {theme} = useContext(TemaContext)
  return(
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Suspense fallback={null}>
              <UserProvider>
                <Router>
                  <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/feed" component={Feed} />
                    <Route path="/admin" component={Admin}/>
                  </Switch>
                </Router>
              </UserProvider>
            </Suspense>
        </ThemeProvider>
  )
}