import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {AppBar, Toolbar, Grid} from '@material-ui/core'
import SearchBar from './SearchBar'
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
    appBar:{
        top: 'auto',
        bottom: 0,
        marginLeft: 0,
        paddingLeft: 0
    }
})

const BottomBar = ({t, toggleShow}) =>{
    
    const classes = useStyles()

    return(
        <>
            <AppBar 
                fixed 
                className={classes.appBar}
                color="inherit">
                <Toolbar>
                    <Grid container>
                        <Grid item xs="10">
                            <SearchBar t={t} />
                        </Grid>
                        <Grid item >
                            <IconButton 
                                onClick={toggleShow}
                                size="small">
                                <PersonIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
           
        </>
    )
}

export default BottomBar