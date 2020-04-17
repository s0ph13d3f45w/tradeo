import React, {useState, forwardRef} from 'react'
import {useSpring, animated} from 'react-spring'
import {auth, createUserProfileDocument} from '../../firebase'
import { Grid,Dialog,Paper,Avatar,Typography,TextField,Button,Radio,Link,Collapse,Box} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Alert from '@material-ui/lab/Alert';
import Terms from './terms'
import Copyright from './Copyright'
import Fade from '../Layout/Fade'

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
            <Typography component="h1" variant="h5">
                {t('signUp')}
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                {alert && <Collapse in={alert}><Alert severity="error">
                        Email already in use                    
                    </Alert></Collapse>}
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
                <Grid style={{display: 'flex'}} onClick={toggleTerms}>
                    <Radio 
                        onChange={toggleTerms}
                        value={terms}
                        checked={terms}
                    />
                    <Typography 
                        style={{marginTop: 10}}
                        variant="subtitle2" color="textSecondary">
                        {t("terms")} 
                    </Typography>
                    <Link 
                        onClick={toggleTermsModal}
                        style={{marginTop: 11, marginLeft: 10}}
                        >
                        {t("readTerms")}
                    </Link>
                </Grid>
                <Button
                    disabled={!terms}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    {t('signUp')}
                </Button>
                <Button
                    disabled={!terms}
                    fullWidth
                    variant="contained"
                    color="secondary"
                    className={classes.submitGoogle}
                    onClick={loginAndSendGoogle}
                >
                    Google
                </Button>
                <Grid container>
                    <Grid item>
                        <Link href="#" variant="body2" color="inherit" onClick={toggle}>
                            {t("alreadyUser")}
                        </Link>
                    </Grid>
                </Grid>
                    <Box mt={5}>
                        <Copyright />
                    </Box>
            </form>
            <Dialog
                aria-labelledby="spring-dialog-title"
                aria-describedby="spring-dialog-description"
                className={classes.modal}
                open={openTerms}
                scroll="paper"
                closeAfterTransition
       
            >
                <Fade in={openTerms}>
                    <div className={classes.paperTerms}>
                        <Terms onClose={toggleTermsModal} t={t}/>
                    </div>
                </Fade>
            </Dialog>
        </div>
    </Grid>
    )
}

export default SignUp