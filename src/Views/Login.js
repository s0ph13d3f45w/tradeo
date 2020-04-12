import React, {useState} from 'react'
import {useTranslation} from 'react-i18next'
import {signInWithGoogle} from '../firebase'
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
    const [showSignUp, setShow] = useState(true)
    const toggleShow = () => setShow(!showSignUp)
    const {t} = useTranslation()
    const classes = useStyles()
    const fade = useSpring({from:{opacity: 0}, opacity: 1})

    const loginAndSendGoogle = async () =>{
        await signInWithGoogle()
        authRouter.login(props.history.push('/feed'))
    }
    return(
        <MainLayout>
                
            <animated.div style={fade}>   
                <Grid container component="main" className={classes.root}>
                    <Grid item xs={false} sm={4} md={7} className={classes.image}/>
                    {showSignUp 
                    ?   <SignUp
                        classes={classes}
                        t={t}
                        loginAndSendGoogle={loginAndSendGoogle}
                        toggle={toggleShow}
                        authRouter={authRouter}
                        history={props.history}
                        />
                    :  <SignIn 
                        classes={classes}
                        t={t}
                        loginAndSendGoogle={loginAndSendGoogle}
                        history={props.history}
                        authRouter={authRouter}
                        toggle={toggleShow}
                    />
                    }
                   
                    
                </Grid>
            </animated.div>

        </MainLayout>
        
    )
}

export default Login