import React from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const SignInForm = ({t,classes, handleSubmit, email, handleInputChange, password,
                    loginAndSendGoogle}) =>
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
    </form>
     

export default SignInForm;
