import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import '../i18n'
import Avatar from '@material-ui/core/Avatar'
import {Switch, FormControlLabel} from '@material-ui/core'


import LanguageSelector from '../LanguageSelector'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: '20px'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontWeight: 'bold'
  },
}));


const ButtonAppBar = ({toggleTheme, theme})=> {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      {theme.palette.type === 'light' 
      ? (<AppBar position="fixed" color="primary">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <Avatar src="https://i.ibb.co/VTVphQg/logo-Tulispng.png" alt="logo"/>
            </Typography>
            <FormControlLabel 
              control={<Switch onClick={toggleTheme}/>}
            />
            <LanguageSelector />
          </Toolbar>
        </AppBar>)
    : (<AppBar position="fixed" color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Avatar src="https://i.ibb.co/VTVphQg/logo-Tulispng.png" alt="logo"/>
          </Typography>
          <FormControlLabel 
            control={<Switch onClick={toggleTheme}/>}
          />
          <LanguageSelector />
        </Toolbar>
      </AppBar>)
    }     
    </div>
  );
}

export default ButtonAppBar