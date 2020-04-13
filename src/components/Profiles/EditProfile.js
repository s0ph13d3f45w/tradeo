import React, {useState, useContext} from 'react';
import {UserSessionContext} from '../../context/userSessionContext'
import ImageSelector from './ImageSelector'
import {firestore, storage} from '../../firebase'
import {Grid, Typography, Button, TextField, Box} from '@material-ui/core'

const initialState={
    displayName: "", 
    tag1: "", 
    tag2:"", 
    tag3:"",
    whatsapp: "",
    type: "",
    subType: "",
    }

const initialImages = {
    photoURL: "",
    image1: "",
    image2: "",
    image3: "",
    wallpaper: "",
}
const EditProfile = ({classes, close}) => {
    const [edit, setEdit] = useState(initialState)
    const [images, setImages] = useState(initialImages)
    const {user} = useContext(UserSessionContext)
    const userRef = firestore.doc(`users/${user.uid}`)
    const {
            displayName, 
            tag1,
            tag2,
            tag3, 
            whatsapp,
            type,
            subType,
            } = edit
    const {image1, image2, image3, photoURL, wallpaper} = images

    const handleInputChange = e =>{
        e.target.type === "file"
        ? setImages({...images, [e.target.name] : e.target.files[0]})
        : setEdit({...edit, [e.target.name] : e.target.value})

    }

    const handleSubmit = async e =>{
        e.preventDefault()

        if (displayName){
            userRef.update({displayName})
        }
        if(tag1){
            userRef.update({tag1})
        }
        if(tag2){
            userRef.update({tag2})
        }
        if(tag3){
            userRef.update({tag3})
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

        if(photoURL !== ''){
            storage.ref(`profileAvatars/${user.uid}/${photoURL.name}`)
            .put(photoURL)
            .then(response => response.ref.getDownloadURL())
            .then(photoURL => userRef.update({photoURL}))
            .catch(error => console.error('Error updating avatar image', error))
        }
        if(image1 !== ''){
            storage.ref(`galleryImages/${user.uid}/${image1.name}`)
            .put(image1)
            .then(response => response.ref.getDownloadURL())
            .then(image1 => userRef.update({image1}))
            .catch(error => console.error('Error updating image1', error))
        }
        if(image2 !== ''){
            storage.ref(`galleryImages/${user.uid}/${image2.name}`)
            .put(image2)
            .then(response => response.ref.getDownloadURL())
            .then(image2 => userRef.update({image2}))
            .catch(error => console.error('Error updating image2', error))
        }
        if(image3 !== ''){
            storage.ref(`galleryImages/${user.uid}/${image3.name}`)
            .put(image3)
            .then(response => response.ref.getDownloadURL())
            .then(image3 => userRef.update({image3}))
            .catch(error => console.error('Error updating image3', error))
        }
        if(wallpaper !== ''){
            storage.ref(`wallpapers/${user.uid}/${wallpaper.name}`)
            .put(wallpaper)
            .then(response => response.ref.getDownloadURL())
            .then(wallpaper => userRef.update({wallpaper}))
            .catch(error => console.error('Error updating image3', error))
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
                <ImageSelector classes={classes} handleInputChange={handleInputChange} />
                {/* <TextField
                    name="tag"
                    fullWidth
                    value={tag}
                    label="Tag"
                    onChange={handleInputChange}
                /> */}
                <Button
                fullWidth
                type="submit">
                    Submit
                </Button>
                </form>
            </Grid>
        </div>
    );
}

export default EditProfile;
