import React, {useContext, useState, forwardRef} from 'react'
import {auth} from '../../firebase'
import {useSpring, animated} from 'react-spring'
import authRouter from '../../auth'
import {makeStyles} from '@material-ui/core/styles'
import {Grid, Typography, Button, Modal, Backdrop} from '@material-ui/core'
import ProfileImage from './ProfileImage'
import EditProfile from './EditProfile'
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
    },
    modal:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    paper: {
        backgroundColor: theme.palette.background.default,
        border: '2px solid #000',
        boxShadow: '12px 12px 2px 1px rgba(0, 0, 255, .2)',
        padding: theme.spacing(2,4,3)
    },
    input:{
        margin: theme.spacing(1,0,1)
    }
}))

const Fade = forwardRef((props, ref) =>{
    const {in: open, children, onEnter, onExited, ...other} = props;
    const style = useSpring({
        from: {opacity: 0},
        to: {opacity: open ? 1: 0},
        onStart: () =>{
            if (open && onEnter){
                onEnter()
            }
        },
        onRest: () =>{
            if (!open  && onExited){
                onExited()
            }
        }
    })

    return(
        <animated.div ref={ref} style={style} {...other}>
            {children}
        </animated.div>
    )
})

const UserOwnProfile = ({history}) => {
    const [showEdit, setEdit] = useState(false)
    const {user}= useContext(UserSessionContext)
    const {displayName,photoURL, email} = user
    const classes = useStyles()

    const handleToggleEdit = () => setEdit(!showEdit)
    const signOut = async() =>{
        authRouter.logout(history.push('/'))
        await auth.signOut()
    }
    return (
        <Grid container className={classes.root}>
            {photoURL && <ProfileImage classes={classes} img={photoURL} />}
            <Typography>{displayName}</Typography>
            <Typography>{email}</Typography>
            <Button color="secondary" onClick={handleToggleEdit}>Edit profile</Button>
            <Modal 
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                className={classes.modal}
                open={showEdit}
                onClose={handleToggleEdit}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{timeout: 500}}
            >
                <Fade in={showEdit}>
                  <EditProfile classes={classes} close={handleToggleEdit} />
                </Fade>
            </Modal>
            <Button onClick={signOut}>Sign out</Button>
        </Grid>
    );
}

export default UserOwnProfile;
