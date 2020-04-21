import React from 'react';
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme =>({
    root:{
        margin: theme.spacing(1,0,3)
    }
}))
const LoginLinks = ({t, toggle, login}) => {
    const classes = useStyles()
    return (
        <Grid container className={classes.root}>
           {login ==="signIn"
           ?    <>
                    <Grid item xs>
                        <Link href="#" variant="body2" color="inherit">
                            {t("forgotPassword")}
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="#" variant="body2" color="inherit" onClick={toggle}>
                            {t("dontHaveAccount")}
                        </Link>
                    </Grid>
                </>
            :   <Grid item>
                    <Link href="#" variant="body2" color="inherit" onClick={toggle}>
                        {t("alreadyUser")}
                    </Link>
                </Grid>
            }
        </Grid>
    );
}

export default LoginLinks;
