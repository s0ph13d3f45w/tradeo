import React, {useState, useContext} from 'react';
import {UserSessionContext} from '../../context/userSessionContext'
import {firestore} from '../../firebase'
import {Typography, Button, TextField,} from '@material-ui/core'

import SelectTypes from './SelectTypes'


const initialState={
    displayName: "", 
    tag:"",
    number: "",
    type: "",
    subType: "",
    service: "",
    }



const EditInfo = ({classes, t}) => {
    const [edit, setEdit] = useState(initialState)
    const {user} = useContext(UserSessionContext)
    const userRef = firestore.doc(`users/${user.uid}`)

    const {
            displayName, 
            tag,
            number,
            type,
            subType,
            skill
            } = edit

    const handleInputChange = e =>
        setEdit({...edit, [e.target.name] : e.target.value})

    
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
            userRef.update({subType, skill: ""})
        }
        if(number){
            userRef.update({number})
        }
        if(skill){
            userRef.update({skill})
        }
        setEdit({...edit, displayName: "", tag: "", type: "", subType: "", number: "", skill: ""})
    }
    return (
            <form onSubmit={handleSubmit}className={classes.paper} >
                <Typography variant="h6" color="textSecondary">
                    <strong>Personal Info
                    <span role="img" aria-label="memo">📝</span>
                    </strong>
                </Typography>
                <TextField
                    name="displayName"
                    value={displayName}
                    label="Name"
                    onChange={handleInputChange}
                />
                <TextField
                    name="whatsapp"
                    value={number}
                    label="Whatsapp"
                    onChange={handleInputChange}
                />
                <SelectTypes 
                    classes={classes}
                    t={t} setEdit={setEdit} edit={edit} />
                <TextField
                    name="tag"
                    value={tag}
                    label="Special Tag"
                    onChange={handleInputChange}
                />
               
                <Button
                className={classes.button}
                variant="contained"
                color="secondary"
                type="submit">
                    Submit
                </Button>
            </form>
  
    );
}

export default EditInfo;
