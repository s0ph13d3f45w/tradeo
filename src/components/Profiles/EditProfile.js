import React, {useState, useContext} from 'react';
import {UserSessionContext} from '../../context/userSessionContext'
import {firestore} from '../../firebase'
import {Grid, Typography, Button, TextField} from '@material-ui/core'

const initialState={displayName: "",}
const EditProfile = ({classes, close}) => {
    const [edit, setEdit] = useState(initialState)
    const {user} = useContext(UserSessionContext)
    const userRef = firestore.doc(`users/${user.uid}`)
    const {displayName} = edit

    const handleInputChange = e =>
        setEdit({...edit, [e.target.name] : e.target.value})

    const handleSubmit = async e =>{
        e.preventDefault()
        console.log(edit)
        try {
            await userRef.update({displayName})
        } catch (error) {console.error('Error editing profile', error)}
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
