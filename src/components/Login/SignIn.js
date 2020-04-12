import React, {useState} from 'react'
import {auth} from '../../firebase'
import {
        Grid,
        Paper,
        Avatar,
        Typography,
        TextField,
        Button,
        Link,
        Box
    } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Copyright from './Copyright'

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
                <Typography component="h1" variant="h5">
                    {t('signIn')}
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
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
                        value={email}
                        onChange={handleInputChange}
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
                        value={password}
                        onChange={handleInputChange}
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
                            <Link href="#" variant="body2" color="inherit" onClick={toggle}>
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
        )
    }
export default SignIn    