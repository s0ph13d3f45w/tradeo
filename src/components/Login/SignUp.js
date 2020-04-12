import React, {useState} from 'react'
import {auth, createUserProfileDocument} from '../../firebase'
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

const initialState = {displayName: "", email:"", password: "", confirmation: ""}

const SignUp = ({
    t,
    classes,
    loginAndSendGoogle, 
    toggle,
    history,
    authRouter,
    }) =>{
    
    const [signUp, setSignUp] = useState(initialState)

    const {displayName, email, password, confirmation} = signUp

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
        } catch (error) {console.error('Error in sign up', error)}
        
        setSignUp(initialState)
    }
return(
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                {t('signUp')}
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id='displayName'
                    label={t('name')}
                    name="displayName"
                    autoComplete={t("name")}
                    autoFocus
                    value={displayName}
                    onChange={handleInputs}
                />
                 <TextField
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    type="email"
                    required
                    id='email'
                    label={t('email')}
                    name="email"
                    autoComplete={t("email")}
                    autoFocus
                    value={email}
                    onChange={handleInputs}
                />

                <TextField
                    required
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    type="password"
                    id="password"
                    name="password"
                    label={t('password')}
                    autoComplete={t('password')}
                    value={password}
                    onChange={handleInputs}
                />
                {password.length < 6 && <Typography variant="body1" color="textSecondary">{t('passwordMust')}</Typography>}
                 <TextField
                    variant="outlined"
                    fullWidth 
                    required
                    error={password !== confirmation}
                    margin="normal"
                    type="password"
                    id="confirmation"
                    name="confirmation"
                    label={t('confirm')}
                    autoComplete={t('confirm')}
                    value={confirmation}
                    onChange={handleInputs}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    {t('signUp')}
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
                            {"Already have an account? SignIn"}
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

export default SignUp