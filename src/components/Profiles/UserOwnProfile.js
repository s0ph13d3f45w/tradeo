import React, {useContext, useState, forwardRef, createRef} from 'react'
import {auth} from '../../firebase'
import {useSpring, animated} from 'react-spring'
import authRouter from '../../auth'
import {makeStyles} from '@material-ui/core/styles'
import {Grid, Typography, Button, Modal, Backdrop, Dialog} from '@material-ui/core'
import ProfileImage from './ProfileImage'
import WhatsappIcon from './WhatsappIcon'
import Gallery from './Gallery'
import ContactWay from './ContactWay'
import EditInfo from './EditInfo'
import { UserSessionContext } from '../../context/userSessionContext'
import EditImages from './EditImages'

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
    modal:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    paper: {
        backgroundColor: theme.palette.background.default,
        border: '2px solid #000',
        boxShadow: '12px 12px 2px 1px rgba(0, 0, 255, .2)',
        padding: theme.spacing(2,4,3),
    },
    dialog:{
        display: 'block',
        alignItems: 'center',
        position: 'absolute',
        justifyContent: 'center',
        overflow: 'scroll'
    },
    inputInfo:{
        padding: theme.spacing(5,0, 5)

    },
    input:{
        margin: theme.spacing(1,0,1)
    },
    inputImage:{
        width: '0.1px',
        height: '0.1px',
	    opacity: 0,
	    overflow: 'hidden',
	    position: 'absolute',
        zIndex: '-1',
    },
    inputLabel:{
        cursor: 'pointer',
        fontSize: '1.25em',
        fontWeight: 700,
        color: 'white',
        backgroundColor: 'black',
        display: 'inline-block'
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

const UserOwnProfile = forwardRef(({history, t}, ref) => {
    const [showEdit, setEdit] = useState(false)
    const [editImages, setImages] = useState(false)

    const {user}= useContext(UserSessionContext)
    const {displayName,photoURL, email, number, } = user
    const classes = useStyles()
    const editImageRef = createRef()

    const handleToggleEdit = () => setEdit(!showEdit)
    const handleToggleImages = () => setImages(!editImages)

    const signOut = async() =>{
        authRouter.logout(history.push('/'))
        await auth.signOut()
    }
    return (
        <Grid container className={classes.root} ref={ref}>
            {photoURL && <ProfileImage classes={classes} img={photoURL} />}
            <Typography variant="h6"><strong>{displayName}</strong></Typography>
            <Typography variant="subtitle1" color="textSecondary">{email}</Typography>
            {number && <WhatsappIcon number={number} showNumber={true} />}
            {/* {whatsapp && <ContactWay classes={classes} user={user}/>}
            {image1 && <Gallery user={user} />} */}
            <Button style={{marginBottom: 8}}color="secondary" variant="contained" size="small" onClick={handleToggleEdit}>Edit Info</Button>
            <Button color="secondary" variant="contained" size="small" onClick={handleToggleImages}>Edit Images</Button>
            <Dialog
                aria-labelledby="spring-dialog-title"
                aria-describedby="spring-dialog-description"
                className={classes.dialog}
                onClose={handleToggleEdit}
                open={showEdit}
                scroll="paper"
                closeAfterTransition
            >
                <EditInfo  
                        t={t}
                        classes={classes} 
                        close={handleToggleEdit} />
            </Dialog>
            <Modal 
                ref={editImageRef}
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                className={classes.modal}
                open={editImages}
                onClose={handleToggleImages}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{timeout: 500}}
            >
                <Fade in={editImages}>
                  <EditImages classes={classes} close={handleToggleImages} />
                </Fade>
            </Modal>
            <Button onClick={signOut}>Sign out</Button>
        </Grid>
    );
})

export default UserOwnProfile;
