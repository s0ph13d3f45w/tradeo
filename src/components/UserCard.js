import React from 'react'
import { useTranslation } from 'react-i18next'

import Container from '@material-ui/core/Container';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';

import Avatar from '@material-ui/core/Avatar';
import CardMedia from '@material-ui/core/CardMedia';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
    }
  });

  const ProfileData = props =>{
    const {name, img} = props
    const useStyles = makeStyles(theme => ({
        root: {
            display: 'flex',
            '& > *': {
                margin: theme.spacing(1),
              },
            marginBottom: '20px'
        }
    }))
    const classes = useStyles()
    return(
        <>
      
        <div className={classes.root}>
                 <Typography variant="h4" component="h2">
                    {name}
                </Typography>
                <Avatar alt="profile" src={img}/>
        <br />
        </div>
        </>
    )
  }

  const data = 
  {   
      id: 1,
      name: 'Jesus',
      descriptive_area: 'design_male',
      skills: ['web_dev'],
      interested: ['Manualidades 🎨', 'Reparaciones 🛠️'],
      email: 'jesuscovam@gmail.com',
        image: "https://i.ibb.co/pXqDrvJ/profile.jpg",
        wallpaper: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      description: 'Tempor cillum consequat sunt consequat consequat ullamco amet. Laborum pariatur culpa quis nostrud reprehenderit cillum. In do aliqua incididunt nulla. Voluptate Lorem excepteur aute aliquip do et irure laboris officia. Aliquip duis cupidatat enim id voluptate consectetur. Cillum enim sint est esse dolor eiusmod nisi anim magna amet culpa irure aliquip veniam. Anim ad labore labore id id.'
  }

  const data2 = 
  {   
      id: 2,
      name: 'Sophie',
      descriptive_area: 'creative_writer_female',
      skills: ['ux_dev', 'content_writer'],
      interested: ['Clases 💻 ', 'Reparaciones 🛠️'],
      email: 'sophiedefauw@gmail.com',
      image: 'data:image/jpeg;base64,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',
      wallpaper: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",
      description: 'Tempor cillum consequat sunt consequat consequat ullamco amet. Laborum pariatur culpa quis nostrud reprehenderit cillum. In do aliqua incididunt nulla. Voluptate Lorem excepteur aute aliquip do et irure laboris officia. Aliquip duis cupidatat enim id voluptate consectetur. Cillum enim sint est esse dolor eiusmod nisi anim magna amet culpa irure aliquip veniam. Anim ad labore labore id id.'
  }

 const SimpleCard = props => {
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
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {t(data.descriptive_area)}
        </Typography>
        <ProfileData name={data.name} img={data.image} />
        <Typography variant="h6" component="h2">
          {t('offer')}
        </Typography>
        <Breadcrumbs>
            {data.skills.map(skills =>
                <Typography color="textSecondary">{t(skills)}</Typography>
            )}
        </Breadcrumbs>
        <br/> 
        <Typography variant="h5" component="h2">
          {t('interest')}
        </Typography>
        <Breadcrumbs>
            {data.interested.map(interest =>
                <Typography color="textSecondary">{interest}</Typography>
            )}
        </Breadcrumbs>
        <br />
        <Typography className={classes.pos} color="textSecondary">
          {t('description')}:
        </Typography>
        <Typography variant="body2" component="p">
          {data.description}
          <br />
          {'"a benevolent smile"'}
        </Typography>
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

  export default function(){
      return(
      <>
        <SimpleCard data={data}/>
        <SimpleCard data={data2}/>
        <SimpleCard data={data}/>
      </>)
  }