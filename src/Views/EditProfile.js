import React, {useState, useContext} from 'react';
import {UserSessionContext} from '../context/userSessionContext'
import {firestore} from '../firebase'
import {Grid} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import EditInfo from '../components/Profiles/EditInfo'
import EditImages from '../components/Profiles/EditImages'
import MainLayout from '../layouts/MainLayout'
import {useTranslation} from 'react-i18next'

const initialState={
    displayName: "", 
    tag:"",
    number: "",
    type: "",
    subType: "",
    serviceSkill: "",
    }
const initialProducts = [
        { type:"food"}, 
        { type:"prime"}, 
        { type:"supplements"}, 
        { type: "home"},
        { type: "books"},
        { type: "clothing"},
        { type: "sport" },
        { type: "toys" },
        { type: "electronics" },
        { type: "videogames"}
    ]
const initialServices = [
        { type:"health"}, 
        { type:"creative"}, 
        { type:"supplements"}, 
        { type: "technicians"},
        { type: "digital"},
        { type: "procedureTransport"},
        { type: "class" },
    ]


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
    const {user} = useContext(UserSessionContext)
    const {t} = useTranslation()
    const userRef = firestore.doc(`users/${user.uid}`)

    const {
            displayName, 
            tag,
            number,
            type,
            subType,
            } = edit

    const handleInputChange = e =>
        setEdit({...edit, [e.target.name] : e.target.value})

    
    const checkSubmit = (e) =>{ 
        e.preventDefault()
        console.log(edit)}
    const handleSubmit = async e =>{
        e.preventDefault()

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
                    <EditInfo classes={classes} t={t}/>
                </Grid>
                <Grid item xs={12} sm={12} md={6} square >
                    <EditImages classes={classes} t={t}/>
                </Grid>
            </Grid>

        </MainLayout>
    )
}

export default EditProfile