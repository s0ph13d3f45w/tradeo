import React from 'react'
import ProfileData from './ProfileData'
import Giver from './Giver'
import {Container,Breadcrumbs,CardMedia,Card,CardActions,CardContent,Button,Typography} from '@material-ui/core/';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import ExploreIcon from '@material-ui/icons/Explore';



const useStyles = makeStyles(theme =>({
    root: {
        marginTop: 20,
        minWidth: 275,
        textAlign: 'center'
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
    location:{
        display: 'flex',
        justifyContent: 'center',
    },
    locationText:{
        margin: theme.spacing(0.5,0,0,1),
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
  }));

const SelfTag = ({t,subType}) =>
    subType ?  <Typography variant="subtitle2" color='textSecondary'>{t(subType)}</Typography>
            : null

const Location = ({t, location}) =>{
    const classes= useStyles()
    return location ? <div className={classes.location}>
                            <ExploreIcon color="secondary"/>
                            <Typography className={classes.locationText} variant="subtitle2" color='textSecondary'>{t(location)}</Typography>
                        </div>
                    : null
}
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
        // dispatch({
        // type: 'SET_REMOVE_USER',
        // payload: user
        // })
        console.log(user)

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
                <Giver t={t} type={data.type} subType={data.subType} />
                <Location location={data.location.city} t={t} />
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