import React, {useState, useContext} from 'react'
import StarRatings from 'react-star-ratings';
import {useTranslation} from 'react-i18next'
import {UserSessionContext} from '../../context/userSessionContext'
import DescriptionUser from '../Feed/DescriptionUser'
import ProfileImage from './ProfileImage'
import Gallery from './Gallery'
import Terms from '../Login/terms'
import Fade from '../Layout/Fade'
import {Container,Typography, IconButton, Dialog} from '@material-ui/core';

import {makeStyles} from '@material-ui/core/styles'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from '@material-ui/icons/Email';



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

const ContactButton = ({method, contact}) =>
    method === "whatsapp"
        ?   <IconButton 
                color="primary"
                onClick={contact}>
                <WhatsAppIcon />
            </IconButton>
        :   <IconButton 
                color="primary"
                onClick={contact}>
                <EmailIcon />
            </IconButton>


const UserProfile = ({userProfile}) =>{
    const classes = useStyles()
    const {photoURL, displayName, number, contact, description, image1, image2, image3} = userProfile
    const images = [image1, image2, image3]
    const {user} = useContext(UserSessionContext)
    const [openTerms, setOpenTerms] = useState(false)
    const toggleTermsModal = () => setOpenTerms(!openTerms)
    const {t} = useTranslation()
    
    const contactHandler = () =>{
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
            <DescriptionUser description={description} />
            <Gallery images={images} />
            {userProfile && <ContactButton method={contact} contact={contactHandler} />}
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