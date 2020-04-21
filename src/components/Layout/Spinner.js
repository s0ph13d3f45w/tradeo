import React from 'react';
import {CircularProgress} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme =>({
    spinner:{
        display: 'flex',
        justifyContent: 'center',
        margin: theme.spacing(2, 0),
        height: '100vh'
      }
}))

const Spinner  = () =>{
    const classes = useStyles()
    return(
        <div className={classes.spinner}>
            <CircularProgress />
        </div>
    )
}
export default Spinner;
