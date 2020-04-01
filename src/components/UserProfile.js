import React from 'react'
import StarRatings from 'react-star-ratings';
import {useTranslation} from 'react-i18next'
import Giver from './Giver'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import {makeStyles} from '@material-ui/core/styles'

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
        marginTop: 5,
        padding: 10,
        alignSelf: 'end'
    },
    skills:{
        flexShrink: 50,
        marginRight: 5,
        width: '50%'
    },
    stars:{
        flexBasis: 200
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

const Rating = ({counter, points, skills, t}) =>{
    let result = points / counter
    if (Object.is(result, NaN)) {result = 0}

    const classes = useStyles()
    return(
        <div className={classes.rater}>
            <div className={classes.skills}>
                <Giver skills={skills} typeReturn="skills" t={t}/>
            </div>
            <Typography 
                color="textSecondary">
                    <strong>
                    {result}
                    </strong>
            </Typography>
             <StarRatings 
                rating={result}
                starDimension="20px"
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
            <div style={{
                width: '100%',
                margin: '20, 0',
                height: 200,
                backgroundColor: 'skyblue',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-end'
            }}>
                <h2>Galeria</h2>
            </div>
            <Rating 
                {...user.votes} 
                skills={user.skills} 
                t={t}/>
        </Container>
    )
}

export default UserProfile