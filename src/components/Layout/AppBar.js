import React, {useContext} from 'react';
import {TemaContext} from '../../context/themeContext'
import { makeStyles } from '@material-ui/core/styles';
import {Link, useLocation} from 'react-router-dom'
import '../../i18n'
import {Switch, FormControlLabel, AppBar, Toolbar, Typography, Avatar} from '@material-ui/core'


import LanguageSelector from '../../LanguageSelector'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: '20px'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginLeft: theme.spacing(0.7),
    flexGrow: 1,
    display: 'flex',
    color: 'white',
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
}));

const LogoNav = ({location}) =>
  location.pathname === "/userEdit"
    ? <Link to="/feed">
        <Avatar src="https://firebasestorage.googleapis.com/v0/b/tradeo-ff7fd.appspot.com/o/logo%2FlogoTulispng.png?alt=media&token=cbd91869-9cf1-45e1-a13f-c58b990dea0a" alt="logo"/>
      </Link>
    : <Avatar src="https://firebasestorage.googleapis.com/v0/b/tradeo-ff7fd.appspot.com/o/logo%2FlogoTulispng.png?alt=media&token=cbd91869-9cf1-45e1-a13f-c58b990dea0a" alt="logo"/>



const ButtonAppBar = ()=> {
  const classes = useStyles();
  const {toggleTheme, theme} = useContext(TemaContext)
  let location = useLocation()

  return (
    <div className={classes.root}>

      {theme.palette.type === 'light' 
      ? (<AppBar position="fixed" color="primary">
          <Toolbar>
            <LogoNav location={location} />
            <Typography variant="h6" className={classes.title}>
              beta
            </Typography>
            <FormControlLabel
              control={<Switch onClick={toggleTheme} />}
            />
            <LanguageSelector />
          </Toolbar>
        </AppBar>)
    : (<AppBar position="fixed" color="inherit">
        <Toolbar>
          <LogoNav location={location} />
          <Typography variant="h6" className={classes.title}>
            beta
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