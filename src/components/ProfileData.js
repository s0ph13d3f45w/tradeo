import React from 'react'
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const ProfileData = ({name, img, textSize, imgSize}) =>{
    const useStyles = makeStyles(theme => ({
        root: {
            display: 'flex',
            '& > *': {
                margin: theme.spacing(1),
              },
            marginBottom: '20px',
            justifyContent: 'center',
        },
        text:{
            alignSelf: 'baseline'
        },
        small: {
            width: theme.spacing(5),
            height: theme.spacing(5),
          },
          large: {
            width: theme.spacing(10),
            height: theme.spacing(10),
          }
    }))
    const classes = useStyles()
    return(
        <>
      
        <div className={classes.root}>
                <Typography variant={textSize} component="h2">
                    {name}
                </Typography>
                {imgSize === 'large'
                    ? <Avatar alt="profile" src={img} className={classes.large} />
                    : <Avatar alt="profile" src={img} className={classes.small} />
                }

        <br />
        </div>
        </>
    )
  }

export default ProfileData