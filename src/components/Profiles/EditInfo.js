import React, {useState} from 'react';
import {firestore} from '../../firebase'
import {Typography, Button, TextField} from '@material-ui/core'
import SelectContact from './SelectContact'
import SelectTypes from './SelectTypes'
import SelectInterest from './SelectInterest'
import Description from './Description'


const initialState={displayName: "", tag:"",number: "",type: "",subType: "", city: "", 
                    contact:"", skill:"", interest:{type:"", area:""}, description:""}



const EditInfo = ({classes, t, AlertSubmit, toggleAlert, showAlert, user}) => {
    const [edit, setEdit] = useState(initialState)
    const handleInputChange = e =>
        setEdit({...edit, [e.target.name] : e.target.value})

    const handleSubmit = async e =>{
        e.preventDefault()

        const userRef = firestore.doc(`users/${user.uid}`)

        const { displayName, tag, number, type, subType, skill, city, contact, interest, description} = edit

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
        if(interest.area !== ""){
            userRef.update({interest})
        }
        if(description){
            userRef.update({description})
        }
        setEdit({...edit, displayName: "", tag: "", type: "", subType: "", number: "", 
                skill: "", interest:{type:"", area:""}, description: ""})
        toggleAlert()
    }

    return (
        user ? <form onSubmit={handleSubmit}className={classes.paperInfo} >
                <Typography variant="h6" color="textSecondary">
                    <strong>{t("personalInfo")}
                    <span role="img" aria-label="memo">📝</span>
                    </strong>
                </Typography>
                <TextField
                    name="displayName"
                    value={edit.displayName}
                    label={t("name")}
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
                    label={t("tag")}
                    onChange={handleInputChange}
                />
                <SelectInterest t={t} edit={edit} setEdit={setEdit}/>
                <SelectContact t={t} contact={edit.contact} contactChange={handleInputChange}/>
                <Description t={t} description={edit.description} onChange={handleInputChange} />
                <AlertSubmit severity="success" alert={showAlert}>Info submitted!</AlertSubmit>
                <Button
                className={classes.button}
                variant="contained"
                color="secondary"
                type="submit">
                    {t("submit")}
                </Button>
            </form>
        
        : <p>Loading...</p>
  
    );
}

export default EditInfo;
