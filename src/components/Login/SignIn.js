import React, {useState} from 'react'
import {auth} from '../../firebase'
import {Grid,Paper,Avatar} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Copyright from './Copyright'
import Title from './Title'
import SignInForm from './SignInForm'
import LoginLinks from './LoginLinks'

const initialState = { email:"", password: ""}


const SignIn = ({t,classes, loginAndSendGoogle, toggle, authRouter, history}) =>{
    const [signIn, setSignIn] = useState(initialState)
    const {email, password} = signIn

    const handleInputChange = e =>
        setSignIn({...signIn, [e.target.name] : e.target.value})

    const handleSubmit = async e =>{
        e.preventDefault()
        try {
            const {user} = await auth.signInWithEmailAndPassword(email, password)
            if (user){
                authRouter.login(history.push('/feed'))
            }
        } catch (error) {console.error('Error in sign in', error)}
    }
    return(
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Title component="h1" variant="h5" color="textPrimary">
                    {t('signIn')}
                </Title>
                <SignInForm t={t} classes={classes} handleSubmit={handleSubmit} 
                    email={email} handleInputChange={handleInputChange} 
                    password={password} loginAndSendGoogle={loginAndSendGoogle}/>
                <LoginLinks t={t} toggle={toggle} login="signIn"/>
                <Copyright />        
            </div>
        </Grid>
        )
    }
export default SignIn    