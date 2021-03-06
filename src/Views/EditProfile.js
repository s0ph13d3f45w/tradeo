import React, {useState, useContext} from 'react';
import {UserSessionContext} from '../context/userSessionContext'
import {Grid} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import EditInfo from '../components/Profiles/EditInfo'
import EditImages from '../components/Profiles/EditImages'
import MainLayout from '../layouts/MainLayout'
import Spinner from '../components/Layout/Spinner'
import {useTranslation} from 'react-i18next'

const useStyles = makeStyles(theme => ({
    root:{
        height: '100vh',
    },
    paperInfo:{
        margin: theme.spacing(8,5, 1, 3),
        padding: theme.spacing(2, 2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '2px solid #cccc',
        borderRadius: '25px',
        [theme.breakpoints.up("sm")]:{
            margin: theme.spacing(8,5,15,3)
        }
    },
    paperImage:{
        margin: theme.spacing(3,5, 9, 3),
        padding: theme.spacing(2, 2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '2px solid #cccc',
        borderRadius: '25px',
        [theme.breakpoints.up("sm")]:{
            margin: theme.spacing(8,5, 1, 3),

        }
    },
    input:{
        margin: theme.spacing(5,10)
    },
    button:{
        margin: theme.spacing(2,0,2)
    }
  
}))
const EditProfile = () =>{
    const [alertInfo, setAlertInfo] = useState(false)
    const [alertImage, setAlertImage] = useState(false)
    const {user} = useContext(UserSessionContext)
    const {t} = useTranslation()

    const toggleAlertSubmit = (setter) => {
        setter(true)
        setTimeout(() =>{
            setter(false)
        }, 3000)
    }
    const toggleAlertInfo = () => toggleAlertSubmit(setAlertInfo)
    const toggleAlertImage = () => toggleAlertSubmit(setAlertImage)
    
    const classes = useStyles()
    
    return(
        <MainLayout>
           { user ?<Grid container component="main" className={classes.root}>
                <Grid item xs={12} sm={6} md={6} square="true" >
                    <EditInfo classes={classes} user={user} t={t} showAlert={alertInfo} toggleAlert={toggleAlertInfo}/>
                </Grid>
                <Grid item xs={12} sm={6} md={6} square="true" >
                    <EditImages classes={classes} user={user} t={t} showAlert={alertImage} toggleAlert={toggleAlertImage}/>
                </Grid>
            </Grid>
            : <Spinner />}

        </MainLayout>
    )
}

export default EditProfile