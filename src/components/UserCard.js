import React from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles';
import ProfileData from './ProfileData'

import Container from '@material-ui/core/Container';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

const Giver = props =>{
    const {t, skills } = props
    return(
        <>
            <Typography variant="h6" component="h2">
                {t('offer')}
            </Typography>
            <Breadcrumbs>
                {skills.map(skills =>
                <Typography color="textSecondary">{t(skills)}</Typography>
                )}
            </Breadcrumbs>
      </>
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
                {interested.map(interest =>
                <Typography color="textSecondary">{interest}</Typography>
                )}
            </Breadcrumbs>
        </>
    )
}

const Description = props =>{
    const { t, description, classes } = props
    return(
        <>
            <Typography className={classes.pos} color="textSecondary">
                {t('description')}:
            </Typography>
            <Typography variant="body2" component="p">
                {description}
                <br />
            </Typography>
        </>
    )
}

const UserCard = props => {
    const { t} = useTranslation()
    const classes = useStyles();
    const { data } = props


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
                <ProfileData name={data.name} img={data.image} />
                <Giver skills={data.skills} t={t} />
                <br/> 
                <Receiver interested={data.interested} t={t} />
                <br />
                <Description 
                    classes={classes} 
                    t={t} 
                    description={data.description} />
            </CardContent>
            <CardActions className={classes.buttons}>
                <Button 
                    variant="outlined"
                    color="primary"
                    size="medium">{t('button_contact')}</Button>
            </CardActions>
        </Card>
    </Container>

  );
  }


export default UserCard