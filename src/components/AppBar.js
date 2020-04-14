import React, {useContext} from 'react';
import {TemaContext} from '../context/themeContext'
import { makeStyles } from '@material-ui/core/styles';
import '../i18n'
import {Switch, 
        FormControlLabel, 
        AppBar, 
        Toolbar, 
        Typography,
        Avatar} from '@material-ui/core'


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


const ButtonAppBar = ()=> {
  const {toggleTheme, theme} = useContext(TemaContext)
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
              control={<Switch onClick={toggleTheme} />}
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