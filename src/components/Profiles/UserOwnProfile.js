import React, {useContext} from 'react'
import {auth} from '../../firebase'
import authRouter from '../../auth'
import {makeStyles} from '@material-ui/core/styles'
import {Grid, Typography, Button} from '@material-ui/core'
import ProfileImage from './ProfileImage'
import { UserSessionContext } from '../../context/userSessionContext'

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

const UserOwnProfile = ({history}) => {
    const {user}= useContext(UserSessionContext)

    const {displayName,photoURL, email} = user
    const classes = useStyles()
    const signOut = async() =>{
        authRouter.logout(history.push('/'))
        await auth.signOut()
    }
    return (
        <Grid container className={classes.root}>
            {photoURL && <ProfileImage classes={classes} img={photoURL} />}
            <Typography>{displayName}</Typography>
            <Typography>{email}</Typography>
            <Button onClick={signOut}>Sign out</Button>
        </Grid>
    );
}

export default UserOwnProfile;
