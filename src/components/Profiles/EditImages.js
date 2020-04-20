import React, {useState, createRef} from 'react';
import ImageSelector from './ImageSelector'
import {firestore, storage} from '../../firebase'
import {Typography, Button} from '@material-ui/core'

const initialImages = {photoURL: "",image1: "",image2: "",image3: "",wallpaper: ""}

const EditImages = ({t, classes, AlertSubmit, showAlert, toggleAlert, user}) => {
    const [images, setImages] = useState(initialImages)
    const [limitImage, setLimitImage] = useState(false)
    const imageSelectorRef = createRef()

    const handleInputChange = e =>{
        if(e.target.files[0].size > 2000000){
            setLimitImage(true)
            return
        }
        setLimitImage(false)
        setImages({...images, [e.target.name] : e.target.files[0]})
    }

    const handleSubmit = async e =>{
        e.preventDefault()

        const userRef = firestore.doc(`users/${user.uid}`)
        const {image1, image2, image3, photoURL, wallpaper} = images

        if(photoURL !== ''){
            storage.ref(`profileAvatars/${user.uid}`)
            .put(photoURL)
            .then(response => response.ref.getDownloadURL())
            .then(photoURL => userRef.update({photoURL}))
            .catch(error => console.error('Error updating avatar image', error))
        }
        if(image1 !== ''){
            storage.ref(`galleryImage1/${user.uid}`)
            .put(image1)
            .then(response => response.ref.getDownloadURL())
            .then(image1 => userRef.update({image1}))
            .catch(error => console.error('Error updating image1', error))
        }
        if(image2 !== ''){
            storage.ref(`galleryImage2/${user.uid}`)
            .put(image2)
            .then(response => response.ref.getDownloadURL())
            .then(image2 => userRef.update({image2}))
            .catch(error => console.error('Error updating image2', error))
        }
        if(image3 !== ''){
            storage.ref(`galleryImage3/${user.uid}`)
            .put(image3)
            .then(response => response.ref.getDownloadURL())
            .then(image3 => userRef.update({image3}))
            .catch(error => console.error('Error updating image3', error))
        }
        if(wallpaper !== ''){
            storage.ref(`wallpapers/${user.uid}`)
            .put(wallpaper)
            .then(response => response.ref.getDownloadURL())
            .then(wallpaper => userRef.update({wallpaper}))
            .catch(error => console.error('Error updating image3', error))
        }
        toggleAlert()

    }
    return (
        <form onSubmit={handleSubmit} className={classes.paperImage}>
            <Typography variant="h6" color="textSecondary">
                <strong>{t("profileImages")}  <span role="img" aria-label="picture">🖼️</span></strong>
            </Typography>
            <ImageSelector ref={imageSelectorRef} classes={classes} handleInputChange={handleInputChange} />
            <AlertSubmit severity="success" alert={showAlert}>Images submitted!</AlertSubmit>
            <AlertSubmit severity="error" alert={limitImage}>Image must be lower than 2 mb</AlertSubmit>
            <Button
                className={classes.button}
                disabled={limitImage}
                variant="contained"
                color="secondary"
                type="submit">
                    {t("submit")}
            </Button>
        </form>
    );
}

export default EditImages;
