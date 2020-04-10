import React, {useState, useEffect, useContext, useCallback} from 'react'
import {UserContext} from '../context/usersContext'
import {useTranslation} from 'react-i18next'
import {auth, signInWithGoogle} from '../firebase'
import {useSpring, animated} from 'react-spring'
import MainLayout from '../layouts/MainLayout'
import authRouter from '../auth'
import {Avatar,
        Button,
        TextField,
        Link,
        Paper,
        Box,
        Grid,
        Typography} from '@material-ui/core'

import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import {makeStyles} from '@material-ui/core/styles'

function Copyright(){
    return(
        <Typography 
            variant="body2"
            color="textSecondary"
            align="center">
                {'Copyright © '}
                {new Date().getFullYear()}
                {'.'}
        </Typography>
    )
}

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



const SignIn =(props) =>{
    const [login, setLogin] = useState({email: "", password:""})
    const {dispatch} = useContext(UserContext)

    const googleLogin= useCallback(() =>{
        auth.onAuthStateChanged(user =>{
            dispatch({
                type: 'SET_LOGIN_GOOGLE',
                payload: user
            })
        })

    }, [dispatch])

    useEffect(() =>{
       googleLogin()
    }, [googleLogin])

    const loginAndSendGoogle = async () =>{
        await signInWithGoogle()
        authRouter.login(props.history.push('/feed'))
    }

    const handleInputs = e =>{
        setLogin({
            ...login,
            [e.target.id] : e.target.value
        })
    }

    const handleSubmit = e =>{
        e.preventDefault()
        if (login.email !== "admin@gmail.com" && login.password !== 1234){
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
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <div className={classes.paper}>
                            <Avatar className={classes.avatar}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                {t('signIn')}
                            </Typography>
                            <form className={classes.form} noValidate>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id='email'
                                    label={t('email')}
                                    name="email"
                                    autoComplete={t("email")}
                                    autoFocus
                                    value={login.email}
                                    onChange={handleInputs}
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    type="password"
                                    id="password"
                                    name="password"
                                    label={t('password')}
                                    autoComplete={t('password')}
                                    value={login.password}
                                    onChange={handleInputs}
                                />
                                     <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={classes.submit}
                                        onClick={handleSubmit}
                                    >
                                        {t('signIn')}
                                    </Button>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        color="secondary"
                                        className={classes.submit}
                                        onClick={loginAndSendGoogle}
                                    >
                                       Google
                                    </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2" color="inherit">
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link href="#" variant="body2" color="inherit">
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                    </Grid>
                                </Grid>

                                <Box mt={5}>
                                    <Copyright />
                                </Box>
                            </form>
                        </div>
                    </Grid>
                </Grid>
            </animated.div>

        </MainLayout>
        
    )
}

export default SignIn