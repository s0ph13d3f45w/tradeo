import React from 'react'
import {auth} from '../../firebase'
import authRouter from '../../auth'
import {makeStyles} from '@material-ui/core/styles'
import {Grid, Typography, Button} from '@material-ui/core'
import ProfileImage from './ProfileImage'

const useStyles = makeStyles(theme =>({
    root:{
        display: 'flex',
        width: 320,
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center'
    },
    avatar:{
        width: theme.spacing(13),
        height: theme.spacing(13),
        marginBottom: 5,
    }
}))

const UserOwnProfile = ({displayName,photoURL, email, createdAt, history}) => {
    const classes = useStyles()
    const signOut = async() =>{
        await auth.signOut()
        authRouter.logout(history.push('/'))
    }
    return (
        <Grid container className={classes.root}>
            {photoURL && <ProfileImage classes={classes} img={photoURL} />}
            <Typography>{displayName}</Typography>
            <Typography>{email}</Typography>
            <Typography>{createdAt}</Typography>
            <Button onClick={signOut}>Sign out</Button>
        </Grid>
    );
}

export default UserOwnProfile;
