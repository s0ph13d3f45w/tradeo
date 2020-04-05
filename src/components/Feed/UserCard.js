import React from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles';
import ProfileData from './ProfileData'
import Giver from './Giver'

import Container from '@material-ui/core/Container';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';


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


const DescriptiveArea = props =>{
    const { descriptive_area, classes, t } = props 
    return(
        <Typography className={classes.title} color="textSecondary" gutterBottom>
            {t(descriptive_area)}
        </Typography>
    )
}

const Receiver = props =>{
    const {t, interested} = props
    return(
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
    )
}
    
const UserCard = ({data, showProfile, removeUser, theme}) => {
    const {t} = useTranslation()
    const classes = useStyles();

  return (
    
    <Container maxWidth="sm">
        <Card className={classes.root}>    
            <CardMedia 
                    className={classes.media}
                    image={data.wallpaper}
                    title="skill"
                    />
            <CardContent>
                <DescriptiveArea 
                    descriptive_area={data.descriptive_area}
                    classes={classes}
                    t={t}
                />
                <ProfileData 
                    textSize="h4"
                    name={data.name} 
                    img={data.image} />
                <Giver skills={data.skills} t={t} classObj={classes} />
                <br/> 
                <Receiver interested={data.interested} t={t} />
            </CardContent>
            <CardActions className={classes.buttons}>
                {theme.palette.type === 'light'
                    ? (<Button 
                        onClick={() => showProfile(data)}
                        variant="outlined"
                        color="inherit"
                        size="medium">{t('button_contact')}</Button>)
                    : (<Button 
                        onClick={() => showProfile(data)}
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