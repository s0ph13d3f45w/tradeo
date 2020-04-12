import React, {useState, useContext} from 'react';
import {UserSessionContext} from '../../context/userSessionContext'
import {firestore, storage, auth} from '../../firebase'
import {Grid, Typography, Button, TextField, Box} from '@material-ui/core'

const initialState={displayName: "", tag: ""}
const EditProfile = ({classes, close}) => {
    const [edit, setEdit] = useState(initialState)
    const [imageAsFile, setImageFile] = useState('')
    const {user} = useContext(UserSessionContext)
    const userRef = firestore.doc(`users/${user.uid}`)
    const {displayName, tag} = edit

    const handleInputChange = e =>
        setEdit({...edit, [e.target.name] : e.target.value})

    const handleImageChange = e =>{
        const image = e.target.files[0]
        setImageFile(imageUrl => (image))
    }

    const handleSubmit = async e =>{
        e.preventDefault()

        if (displayName){
            userRef.update({displayName})
        }

        if(imageAsFile !== ''){
            storage.ref(`profileAvatars/${user.uid}/${imageAsFile.name}`)
            .put(imageAsFile)
            .then(response => response.ref.getDownloadURL())
            .then(photoURL => userRef.update({photoURL}))
            .catch(error => console.error('Error updating avatar image', error))
        }

        close()
    }
    return (
        <div className={classes.paper}>
            <Grid container>
                <form onSubmit={handleSubmit}>
                <Typography variant="h6">Edit Profile</Typography>
                <TextField
                    name="displayName"
                    fullWidth
                    value={displayName}
                    label="Name"
                    onChange={handleInputChange}
                />
                <Box className={classes.input}>
                    <Typography variant="subtitle2" color="textSecondary">Avatar Image:</Typography>
                    <input
                        placeholder="avatar"
                        multiple={false}
                        onChange={handleImageChange}
                        type="file"
                        />
                </Box>
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
