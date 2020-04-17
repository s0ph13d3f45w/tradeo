import React, {useState, useContext} from 'react'
import StarRatings from 'react-star-ratings';
import {useTranslation} from 'react-i18next'
import {UserSessionContext} from '../../context/userSessionContext'
import Description from '../Feed/Description'
import ProfileImage from './ProfileImage'
import Terms from '../Login/terms'
import Fade from '../Layout/Fade'
import {Container,Typography, IconButton, Dialog} from '@material-ui/core';

import {makeStyles} from '@material-ui/core/styles'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';


import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const useStyles = makeStyles(theme => ({
    root:{
        display: 'flex',
        width:320,
        flexDirection: 'column',
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
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
    textDescription:{
        textAlign: 'justify',
        marginTop: 5
    }
   
}))



const SkillsList = ({skills, t}) =>
    <>
        {skills.map((skill, index) =>
            <Typography 
                key={index}
                color="textSecondary">{t(skill)}</Typography>
        )}
    </>
    


const Rating = ({counter, points}) =>{
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

const ContactButton = ({user, contact}) =>
    user &&     <IconButton 
                    color="primary"
                    onClick={contact}>
                    <WhatsAppIcon />
                </IconButton>


const UserProfile = ({userProfile}) =>{
    const classes = useStyles()
    const {photoURL, displayName, number} = userProfile
    const {user} = useContext(UserSessionContext)
    const [openTerms, setOpenTerms] = useState(false)
    const toggleTermsModal = () => setOpenTerms(!openTerms)
    const {t} = useTranslation()
    
    const contact = () =>{
        const {firstContact} = user
        if (firstContact){
            toggleTermsModal()
        } else{
            window.open(`https://api.whatsapp.com/send?phone=${number}`)
        }

    }
    return(
        <Container className={classes.root}>
            <ProfileImage img={photoURL} classes={classes}/>
            <Typography 
                variant="h4"
                component="h2"
                color="textPrimary">{displayName}
            </Typography>
            {/* {user.images
            ? ( <div >
                <Carousel showThumbs={false} showStatus={false} width="200px">
                    {user.images.map((image, index)=>
                    <div key={index}>
                        <img src={image} alt="user" style={{height: 175, width: 200}} />
                    </div>
                    )}
                </Carousel>
                </div>)
            : null} */}
           
            {/* <Rating 
                {...user.votes} 
                skills={user.skills} 
                t={t}/>
            <SkillsList skills={user.skills} t={t}/>
            <Description 
                description={user.description} 
                classes={classes}/> */}
            <ContactButton user={user} contact={contact} />
            <Dialog
                aria-labelledby="spring-dialog-title"
                aria-describedby="spring-dialog-description"
                className={classes.modal}
                open={openTerms}
                scroll="paper"
                closeAfterTransition
       
            >
                <Fade in={openTerms}>
                    <div className={classes.paperTerms}>
                        <Terms onClose={toggleTermsModal} t={t}/>
                    </div>
                </Fade>
            </Dialog>
        </Container>
    )
}

export default UserProfile