import React from 'react'
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

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

export default ProfileData