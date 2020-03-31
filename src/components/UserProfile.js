import React from 'react'

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
        marginBottom: 5
    }
}))

const ProfileImage = ({img}) =>{
    const classes = useStyles()
    return(
        <Avatar src={img} alt="profile" className={classes.avatar} />
    )
}


const UserProfile = ({user}) =>{
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
                backgroundColor: 'tomato',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <h2>Galeria</h2>
            </div>
        </Container>
    )
}

export default UserProfile