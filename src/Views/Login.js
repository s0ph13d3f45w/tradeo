import React, {useState} from 'react'
import {useTranslation} from 'react-i18next'
import {auth, signInWithGoogle} from '../firebase'
import {Grid} from '@material-ui/core'
import {useSpring, animated} from 'react-spring'
import MainLayout from '../layouts/MainLayout'
import SignUp from '../components/Login/SignUp'
import SignIn from '../components/Login/SignIn'
import authRouter from '../auth'

import {makeStyles} from '@material-ui/core/styles'



const useStyles = makeStyles(theme =>({
    root:{
        height: '100vh'
    },
    image:{
        backgroundImage: 'url(https://images.unsplash.com/photo-1481238953635-527ec75022ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=728&q=80)',
        backgroundRepeat: 'no-repeat',
        backgroundColor: theme.palette.background.default,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    paper:{
        margin: theme.spacing(8,4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar:{
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form:{
        width: '100%',
        marginTop: theme.spacing(1)
    },
    submit:{
        margin: theme.spacing(3, 0, 2)
    }
}))




const Login =(props) =>{
    const [signIn, setSignIn] = useState({email: "", password:""})
    const [signUp, setSignUp] = useState({name: "", email: "", password: "", password2: ""})
    const [showSignUp, setShow] = useState(true)

    const toggleShow = () => setShow(!showSignUp)

    const submitSignUp = async e =>{
        e.preventDefault()
        if(signUp.password !== signUp.password2){
            alert("passwords must be the same")
        }
    }

    const loginAndSendGoogle = async () =>{
        await signInWithGoogle()
        authRouter.login(props.history.push('/feed'))
    }

    const handleSignInInputs = e =>{
        setSignIn({
            ...signIn,
            [e.target.id] : e.target.value
        })
    }

    const handleSignInSubmit = e =>{
        e.preventDefault()
        if (signIn.email !== "admin@gmail.com" && signIn.password !== 1234){
            console.log("missing")
            return
        }
        authRouter.login(props.history.push('/feed'))
    }

    const {t} = useTranslation()
    const classes = useStyles()
    const fade = useSpring({from:{opacity: 0}, opacity: 1})
    return(
        <MainLayout>
                
            <animated.div style={fade}>   
                <Grid container component="main" className={classes.root}>
                    <Grid item xs={false} sm={4} md={7} className={classes.image}/>
                    {showSignUp 
                    ?   <SignUp
                        classes={classes}
                        t={t}
                        handleSubmit={handleSignInSubmit}
                        handleInputs={handleSignInInputs}
                        loginAndSendGoogle={loginAndSendGoogle}
                        name={signUp.name}
                        email={signUp.email}
                        password={signUp.password}
                        password2={signUp.password2}
                        toggle={toggleShow}
                        submit={submitSignUp}
                        />
                    :  <SignIn 
                        classes={classes}
                        t={t}
                        handleSubmit={handleSignInSubmit}
                        handleInputs={handleSignInInputs}
                        loginAndSendGoogle={loginAndSendGoogle}
                        email={signIn.email}
                        password={signIn.password}
                        toggle={toggleShow}
                    />
                    }
                   
                    
                </Grid>
            </animated.div>

        </MainLayout>
        
    )
}

export default Login