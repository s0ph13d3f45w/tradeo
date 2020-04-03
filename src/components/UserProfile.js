import React from 'react'
import StarRatings from 'react-star-ratings';
import {useTranslation} from 'react-i18next'
import Giver from './Giver'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import {makeStyles} from '@material-ui/core/styles'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const useStyles = makeStyles(theme => ({
    root:{
        display: 'flex',
        width:320,
        flexDirection: 'column',
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar:{
        width: theme.spacing(13),
        height: theme.spacing(13),
        marginBottom: 5,
    },
    rater:{
        display: 'flex',
        flexFlow: 'row wrap',
        marginTop: 5,
        padding: 10,
  
    },
    skills:{
    
    }
   
}))

const ProfileImage = ({img}) =>{
    const classes = useStyles()
    return(
        <Avatar 
            src={img} 
            alt="profile" 
            className={classes.avatar} />
    )
}

const SkillsList = ({skills, t}) =>{
    const classes = useStyles()
    return(
        <div className={classes.skills}>
            {skills.map((skill, index) =>
                <Typography 
                    key={index}
                    color="textSecondary">{t(skill)}</Typography>
            )}
        </div>
    )
}

const Rating = ({counter, points, skills, t}) =>{
    let result = points / counter
    if (Object.is(result, NaN)) {result = 0}

    const classes = useStyles()
    return(
        <div className={classes.rater}>
                <Typography 
                    color="textSecondary">
                        <strong>
                        {result}
                        </strong>
                </Typography>
                <StarRatings 
                    rating={result}
                    starDimension="18px"
                    starSpacing="2px"
                    starRatedColor="yellow"
                    numberOfStars={5}
                    /> 
        </div>
    )
}


const UserProfile = ({user}) =>{
    const {t} = useTranslation()
    const classes = useStyles()
    return(
        <Container className={classes.root}>
            <ProfileImage img={user.image}/>
            <Typography 
                variant="h4"
                component="h2"
                color="textPrimary">{user.name}</Typography>
            
            {user.images
            ? ( <div >
                <Carousel showThumbs={false} showStatus={false} width="200px">
                    {user.images.map((image, index)=>
                    <div key={index}>
                        <img src={image} alt="user" style={{height: 175, width: 200}} />
                    </div>
                    )}
                </Carousel>
                </div>)
            : null}
           
            <Rating 
                {...user.votes} 
                skills={user.skills} 
                t={t}/>
            <SkillsList skills={user.skills} t={t}/>
        </Container>
    )
}

export default UserProfile