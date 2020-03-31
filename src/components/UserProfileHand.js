import React from 'react'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import {makeStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded'

// import ProfileData from './ProfileData'
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
          },
        marginBottom: '20px',
        justifyContent: 'center'
    },
    button:{
        justifySelf: 'start',
        width: 5,
    }
}))
const ProfileData = ({name, img, textSize}) =>{
   
    const classes = useStyles()
    return(
        <>
      
        <div className={classes.root}>
            <Typography variant={textSize} component="h2">
                    {name}
            </Typography>
            <Avatar alt="profile" src={img}/>
               
        <br />
        </div>
        </>
    )
  }

export default function(props){
    const { user, close } = props
    const classes = useStyles()
    return(
        <>  
       
        <div style={{
            width: 320,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'}}
            >
            <Button
                    className={classes.button}
                    size="small"
                    onClick={close}>
                    <ArrowBackRoundedIcon />
            </Button>
            <br/>   
            <ProfileData
                textSize="h5"
                name={user.name}
                img={user.image}
                close={close}
            />
          </div>
        </>

    )
}