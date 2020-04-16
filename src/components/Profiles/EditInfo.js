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


const EditInfo = ({classes, close, t}) => {
    const [edit, setEdit] = useState(initialState)
    const {user} = useContext(UserSessionContext)
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
        close()
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
                <Typography variant="subtitle2" color="textSecondary">
                    <strong>tulis info</strong>
                </Typography>
                <SelectTypes 
                    classes={classes}
                    t={t} setEdit={setEdit} edit={edit} initialValues={initialProducts}/>
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
