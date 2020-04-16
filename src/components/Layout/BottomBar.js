import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {useTranslation} from 'react-i18next'
import {useLocation, Link} from 'react-router-dom'
import {AppBar, Toolbar, Grid, Avatar} from '@material-ui/core'
import SearchBar from './SearchBar'
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';



const useStyles = makeStyles(theme => ({
    appBar:{
        top: 'auto',
        bottom: 0,
        marginLeft: 0,
        paddingLeft: 0
    },
    avatar:{
        width: theme.spacing(3),
        height: theme.spacing(3),
        border: '2px solid #cccc',
    },
    arrowBack:{
        margin: theme.spacing(0,1,0,17)
    }
}))

const MainItemBar = ({t, location}) =>
    location.pathname === "/userEdit"
            ? <GoBack />
            : <SearchBar t={t} />
    
const GoBack = () =>{
    const classes = useStyles()
    return(
        <Link to="/feed" className={classes.arrowBack}>
            <ArrowBackIcon color="secondary"/>
        </Link>
    )
}

const BottomBar = ({ toggleShow, photoURL}) =>{
    const classes = useStyles()
    const {t} = useTranslation()
    let location = useLocation()

    return(
        <>
            <AppBar 
                fixed="true" 
                className={classes.appBar}
                color="inherit">
                <Toolbar>
                    <Grid container>
                        <Grid item xs={10}>
                            <MainItemBar t={t} location={location} />
                            
                        </Grid>
                        <Grid item style={{margin: 'auto'}}>
                            {photoURL 
                            ?   <IconButton
                                    onClick={toggleShow}
                                    size="small">
                                    <Avatar src={photoURL}className={classes.avatar} alt="photoURL"/>
                                </IconButton>
                            :   <IconButton 
                                    onClick={toggleShow}
                                    size="small">
                                    <PersonIcon />
                                </IconButton>}
                            
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
           
        </>
    )
}

export default BottomBar