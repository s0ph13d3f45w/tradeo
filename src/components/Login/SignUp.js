import React, {useState} from 'react'
import {auth, createUserProfileDocument} from '../../firebase'
import { Grid,Paper,Avatar} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Title from './Title'
import Terms from './terms'
import Fade from '../Layout/Fade'
import SignUpForm from './SignUpForm'
import DialogConditions from './DialogContidions'
import Copyright from './Copyright'
import LoginLinks from './LoginLinks'

const initialState = {displayName: "", email:"", password: "", confirmation: ""}


const SignUp = ({t,classes,loginAndSendGoogle, toggle,history,authRouter,}) =>{
    const [signUp, setSignUp] = useState(initialState)
    const [alert, setAlert] = useState(false)
    const [terms, setTerms] = useState(false)
    const [openTerms, setOpenTerms] = useState(false)
    const toggleTermsModal = () => setOpenTerms(!openTerms)
    const toggleTerms = () => setTerms(!terms)

    const {displayName, email, password, confirmation,} = signUp

    const handleInputs = e =>{
        setSignUp({
            ...signUp,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async e =>{
        e.preventDefault()
        if (password !== confirmation) return;

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user,{displayName})
            if(user){
                authRouter.login(history.push('/feed'))
                console.log('pushed')
            }
        } catch (error) {
            if(error.code === "auth/email-already-in-use"){
                setAlert(true)
            }
        }
        
        setSignUp(initialState)
    }
return(
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Title component="h1" variant="h5" color="textPrimary">
                {t('signUp')}
            </Title>
            <SignUpForm 
                t={t} alert={alert} handleSubmit={handleSubmit} 
                handleInputs={handleInputs} toggleTerms={toggleTerms} 
                terms={terms} toggleTermsModal={toggleTermsModal} toggle={toggle}
                loginAndSendGoogle={loginAndSendGoogle} classes={classes}
                {...signUp}/>
            <LoginLinks t={t} toggle={toggle} login="signUp" />
            <Copyright />
            <DialogConditions open={openTerms} classes={classes}>
                <Fade in={openTerms}>
                    <div className={classes.paperTerms}>
                        <Terms onClose={toggleTermsModal} t={t}/>
                    </div>
                </Fade>
            </DialogConditions>
        </div>
    </Grid>
    )
}

export default SignUp