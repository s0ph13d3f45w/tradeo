import React from 'react'
import AppBar from '../components/AppBar'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme =>({
    main:{
        backgroundColor: theme.palette.background.default
    }
}))

const Layout = ({children}) =>{
    const classes = useStyles()
    return(
        <div className={classes.main}>
            <AppBar/>
            {children}
        </div>
    )
}

export default Layout