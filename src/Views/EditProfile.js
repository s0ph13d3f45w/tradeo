import React, {useState, useContext} from 'react';
import {UserSessionContext} from '../context/userSessionContext'
import {firestore} from '../firebase'
import {Grid} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import EditInfo from '../components/Profiles/EditInfo'
import EditImages from '../components/Profiles/EditImages'
import MainLayout from '../layouts/MainLayout'
import {useTranslation} from 'react-i18next'
import {Collapse} from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'

const initialState={
    displayName: "", 
    tag:"",
    number: "",
    type: "",
    subType: "",
    serviceSkill: "",
    }

const AlertSubmit = ({alert, children}) =>
    <Collapse in={alert}><Alert severity="success">
        {children}
    </Alert></Collapse>


const useStyles = makeStyles(theme => ({
    root:{
        height: '100vh',
     
    },
    paper:{
        margin: theme.spacing(15,10),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '2px solid #cccc',
        borderRadius: '25px'
    },
    selects:{
        display: 'flex', 
        flexDirection: 'column', 
        alignContent: 'center', 
        justifyContent: 'center'
    },
    formControl:{
        minWidth: 200
    },
    input:{
        margin: theme.spacing(5,10)
    },
    button:{
        margin: theme.spacing(2,0,2)
    }
  
}))
const EditProfile = () =>{
    const [edit, setEdit] = useState(initialState)
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

    const handleInputChange = e =>
        setEdit({...edit, [e.target.name] : e.target.value})

    
    const checkSubmit = (e) =>{ 
        e.preventDefault()
        console.log(edit)}
    const handleSubmit = async e =>{
        e.preventDefault()
        const userRef = firestore.doc(`users/${user.uid}`)

        const { displayName, tag, number, type, subType} = edit

        if (displayName){
            userRef.update({displayName})
        }
        if(tag){
            userRef.update({tag})
        }
        if(type){
            userRef.update({type})
        }
        if(subType){
            userRef.update({subType})
        }
        if(number){
            userRef.update({number})
        }
    }
    const classes = useStyles()
    return(
        <MainLayout>
            <Grid container component="main" className={classes.root}>
                <Grid item xs={12} sm={12} md={6} square >
                    <EditInfo classes={classes} t={t} AlertSubmit={AlertSubmit} showAlert={alertInfo} toggleAlert={toggleAlertInfo}/>
                </Grid>
                <Grid item xs={12} sm={12} md={6} square >
                    <EditImages classes={classes} t={t} AlertSubmit={AlertSubmit} showAlert={alertImage} toggleAlert={toggleAlertImage}/>
                </Grid>
            </Grid>

        </MainLayout>
    )
}

export default EditProfile