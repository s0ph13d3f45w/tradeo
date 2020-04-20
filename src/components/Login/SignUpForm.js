import React from 'react'
import {Typography,TextField,Button,Radio,Link,Collapse,Box, Grid} from '@material-ui/core'
import Alert from '@material-ui/lab/Alert';
import Copyright from './Copyright'

const SignUpForm = ({classes, t, handleSubmit, displayName, handleInputs, email,
    password, confirmation, toggleTerms, terms, toggleTermsModal,
    toggle, loginAndSendGoogle, alert})=>
    <form className={classes.form} onSubmit={handleSubmit}>
        <Collapse in={alert}>
            <Alert severity="error">
                Email already in use                    
            </Alert>
        </Collapse>
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

export default SignUpForm