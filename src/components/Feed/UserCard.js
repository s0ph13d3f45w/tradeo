import React from 'react'
import {animated} from 'react-spring'
import ProfileData from './ProfileData'
import Giver from './Giver'

import {Container,
        Breadcrumbs,
        CardMedia,
        Card,
        CardActions,
        CardContent,
        Button,
        Typography} from '@material-ui/core/';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        marginTop: 20,
        minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    buttons:{
        justifyContent: 'center'
    },
    media:{
        height: 240
    },
    crumbs:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        margin: '0 auto'

    }
  });


const DescriptiveArea = ({ descriptive_area, classes, t }) =>
    <Typography className={classes.title} color="textSecondary" gutterBottom>
        {t(descriptive_area)}
    </Typography>

const Receiver = ({t, interested}) =>
    <>
        <Typography variant="h5" component="h2">
            {t('interest')}
        </Typography>
        <Breadcrumbs>
            {interested.map((interest, index) =>
            <Typography 
                key={index}
                color="textSecondary">{t(interest)}</Typography>
            )}
        </Breadcrumbs>
    </>

    
const UserCard = ({data, setProfile, dispatch, theme, t}) => {
    
    const classes = useStyles();

    const openProfile = user =>{
        dispatch({
            type: "SET_DRAWER_USER",
            payload: user
        })
        setProfile()
    }
    const removeUser = user =>
        dispatch({
        type: 'SET_REMOVE_USER',
        payload: user
        })

  return (
    <Container maxWidth="sm">
        <Card className={classes.root}>    
            <CardMedia 
                    className={classes.media}
                    image={data.wallpaper}
                    title="skill"
                    />
            <CardContent>
                {/* <DescriptiveArea 
                    descriptive_area={data.descriptive_area}
                    classes={classes}
                    t={t}
                /> */}
                <ProfileData 
                    textSize="h4"
                    name={data.displayName} 
                    img={data.photoURL} />
                {/* <Giver skills={data.skills} t={t} classObj={classes} />
                <br/> 
                <Receiver interested={data.interested} t={t} /> */}
            </CardContent>
            <CardActions className={classes.buttons}>
                {theme.palette.type === 'light'
                    ? (<Button 
                        onClick={() => openProfile(data)}
                        variant="outlined"
                        color="inherit"
                        size="medium">{t('button_contact')}</Button>)
                    : (<Button 
                        onClick={() => openProfile(data)}
                        variant="outlined"
                        color="inherit"
                        size="medium">{t('button_contact')}</Button>)}
                <Button
                    color="secondary"
                    size="medium"
                    onClick={()=> removeUser(data)}>
                    <CloseIcon />
                </Button>
            </CardActions>
        </Card>
    </Container>
  );
  }

export default UserCard