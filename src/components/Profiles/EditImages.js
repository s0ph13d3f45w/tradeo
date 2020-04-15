import React, {useState, useContext, createRef} from 'react';
import {UserSessionContext} from '../../context/userSessionContext'
import ImageSelector from './ImageSelector'
import {firestore, storage} from '../../firebase'
import {Grid, Typography, Button} from '@material-ui/core'

const initialImages = {
    photoURL: "",
    image1: "",
    image2: "",
    image3: "",
    wallpaper: "",
}
const EditImages = ({classes, close}) => {
    const [images, setImages] = useState(initialImages)
    const {user} = useContext(UserSessionContext)
    const userRef = firestore.doc(`users/${user.uid}`)
    const imageSelectorRef = createRef()
  
    const {image1, image2, image3, photoURL, wallpaper} = images

    const handleInputChange = e =>
         setImages({...images, [e.target.name] : e.target.files[0]})

    const handleSubmit = async e =>{
        e.preventDefault()

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
                <ImageSelector ref={imageSelectorRef} classes={classes} handleInputChange={handleInputChange} />
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

export default EditImages;
