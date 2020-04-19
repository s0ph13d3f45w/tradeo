import React, { forwardRef,} from 'react'
import {auth} from '../../firebase'
import authRouter from '../../auth'
import {makeStyles} from '@material-ui/core/styles'
import {Grid, Typography, Button} from '@material-ui/core'
import ProfileImage from './ProfileImage'
import WhatsappIcon from './WhatsappIcon'


const useStyles = makeStyles(theme =>({
    root:{
        display: 'flex',
        width: 320,
        height: '100vh',
        border: '2px solid #cccc',
        flexDirection: 'column',
        textAlign: 'center',
        alignContent: 'center',
    },
    avatar:{
        width: theme.spacing(13),
        height: theme.spacing(13),
        border: '2px solid #cccc',
        alignSelf: 'center',
        margin: theme.spacing(1,0,1)
    },
    contact:{
        display: 'flex',
        alignContent: 'center',
        textAlign: 'center',
        margin: theme.spacing(1,0,1,3),
        width: theme.spacing(20)
    },
 
}))

const UserOwnProfile = forwardRef(({history, user, t}, ref) => {
    const {displayName, number, photoURL, email} = user
    const classes = useStyles()

    const handleToggleEdit = () => history.push('/userEdit')

    const signOut = () =>{
        authRouter.logout(history.push('/'))
        auth.signOut()
    }
    return (
        <Grid container className={classes.root} ref={ref}>
            { photoURL  &&<ProfileImage classes={classes} img={photoURL} />}
            <Typography variant="h6"><strong>{displayName}</strong></Typography>
            <Typography variant="subtitle1" color="textSecondary">{email}</Typography>
            {number && <WhatsappIcon number={number} showNumber={true} />}
              {/* {whatsapp && <ContactWay classes={classes} user={user}/>}
            {image1 && <Gallery user={user} />} */}
            <Button style={{marginBottom: 8}}color="secondary" variant="contained" size="small" onClick={handleToggleEdit}>{t("editProfile")}</Button>
            <Button onClick={signOut}>{t("signOut")}</Button>
        </Grid>
    );
})

export default UserOwnProfile;
