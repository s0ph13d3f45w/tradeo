import React, {useState, useEffect} from 'react';
import {firestore} from '../../firebase'
import {Typography, Button, TextField} from '@material-ui/core'
import SelectContact from './SelectContact'
import SelectTypes from './SelectTypes'


const initialState={displayName: "", tag:"",number: "",type: "",subType: "",service: "", city: "", contact:""}



const EditInfo = ({classes, t, AlertSubmit, toggleAlert, showAlert, user}) => {
    const [edit, setEdit] = useState(initialState)
    const handleInputChange = e =>
        setEdit({...edit, [e.target.name] : e.target.value})

    const handleSubmit = async e =>{
        e.preventDefault()

        const userRef = firestore.doc(`users/${user.uid}`)

        const { displayName, tag, number, type, subType, skill, city, contact} = edit

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
            if (number[0] !== "+"){
                userRef.update({number:`+52${number}`})
            } else {
                userRef.update({number})
            }
        }
        if(skill){
            userRef.update({skill})
        }
        if(city){
            const location = {country: "mexico", state: "qroo", city}
            userRef.update({location})
        }
        if(contact){
            userRef.update({contact})
        }
        setEdit({...edit, displayName: "", tag: "", type: "", subType: "", number: "", skill: ""})
        toggleAlert()
    }

    return (
        user ? <form onSubmit={handleSubmit}className={classes.paperInfo} >
                <Typography variant="h6" color="textSecondary">
                    <strong>Personal Info
                    <span role="img" aria-label="memo">📝</span>
                    </strong>
                </Typography>
                <TextField
                    name="displayName"
                    value={edit.displayName}
                    label="Name"
                    onChange={handleInputChange}
                />
                <TextField
                    name="number"
                    value={edit.number}
                    label="Whatsapp"
                    onChange={handleInputChange}
                />
                <SelectTypes 
                    classes={classes}
                    t={t} setEdit={setEdit} edit={edit} />
                <TextField
                    name="tag"
                    value={edit.tag}
                    label="Special Tag"
                    onChange={handleInputChange}
                />
                <SelectContact contact={edit.contact} contactChange={handleInputChange}/>
                <AlertSubmit alert={showAlert}>Info submitted!</AlertSubmit>
                <Button
                className={classes.button}
                variant="contained"
                color="secondary"
                type="submit">
                    Submit
                </Button>
            </form>
        
        : <p>Loading...</p>
  
    );
}

export default EditInfo;
