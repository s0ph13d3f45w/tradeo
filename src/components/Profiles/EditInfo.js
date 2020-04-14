import React, {useState, useContext} from 'react';
import {UserSessionContext} from '../../context/userSessionContext'
import {firestore} from '../../firebase'
import {Grid, Typography, Button, TextField, FormControl,FormControlLabel, Select, MenuItem,} from '@material-ui/core'

const initialState={
    displayName: "", 
    tag:"",
    whatsapp: "",
    type: "",
    subType: "",
    }

const Type = ({t, setEdit, edit}) =>{
    const handleSelectChange = e =>{
        e.target.value === "products"
        ? setEdit({...edit, type: "products"})
        : setEdit({...edit, type: "services"})

        console.log(edit)
    }
    return(
        <FormControl style={{marginTop: 10}}>
            <Typography color="textSecondary">Account type:</Typography>
            <Select onChange={handleSelectChange}>
                <MenuItem value="products">
                    <Typography color="textSecondary">{t("products")}</Typography>
                </MenuItem>
                <MenuItem value="services">
                    <Typography color="textSecondary">{t("services")}</Typography>
                </MenuItem>
            </Select>
        </FormControl>
    )
}

const subType = ({t, setEdit,}) =>{
    const handleSelectChange = e =>{
        e.target.value === "products"
        ? console.log("clock")
        : console.log("clock")

    }
    return(
        <FormControl style={{marginTop: 10}}>
            <Typography color="textSecondary">Account type:</Typography>
            <Select onChange={handleSelectChange}>
                <MenuItem value="products">
                    <Typography color="textSecondary">{t("products")}</Typography>
                </MenuItem>
                <MenuItem value="services">
                    <Typography color="textSecondary">{t("services")}</Typography>
                </MenuItem>
            </Select>
        </FormControl>
    )
}

const EditInfo = ({classes, close, t}) => {
    const [edit, setEdit] = useState(initialState)
    const {user} = useContext(UserSessionContext)
    const userRef = firestore.doc(`users/${user.uid}`)
    const {
            displayName, 
            tag,
            whatsapp,
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
        if(whatsapp){
            userRef.update({whatsapp})
        }
        close()
    }
    return (
        <div className={classes.paper}>
            <Grid container>
                <form onSubmit={handleSubmit}>
                <Grid item>
                    <Typography variant="h6">Edit Profile</Typography>
                </Grid>
                <Grid item>
                    <TextField
                        name="displayName"
                        value={displayName}
                        label="Name"
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid>
                <TextField
                    name="whatsapp"
                    
                    value={whatsapp}
                    label="Whatsapp"
                    onChange={handleInputChange}
                />
                </Grid>
                <Grid>
                <TextField
                    name="tag"
                    value={tag}
                    label="Special Tag"
                    onChange={handleInputChange}
                />
                </Grid>
                <Grid>
                    <Type t={t} setEdit={setEdit} edit={edit}/>
                </Grid>
                <Button
                color="secondary"
                type="submit">
                    Submit
                </Button>
                </form>
            </Grid>
        </div>
    );
}

export default EditInfo;
