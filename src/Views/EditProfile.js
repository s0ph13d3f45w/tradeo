import React, {useState, useContext} from 'react';
import {UserSessionContext} from '../context/userSessionContext'
import {firestore} from '../firebase'
import {Grid, Typography, Button, TextField, DialogContent,} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import EditInfo from '../components/Profiles/EditInfo'
import EditImages from '../components/Profiles/EditImages'
import SelectTypes from '../components/Profiles/SelectTypes'
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
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignContent: 'center',
        marginTop: 30,
    },
  
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
            <Grid container className={classes.root}>
                <Grid item xs="10">
                    <EditInfo classes={classes} t={t}/>
                </Grid>
            </Grid>
        </MainLayout>
    )
}

export default EditProfile