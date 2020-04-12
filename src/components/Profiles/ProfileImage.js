import React from 'react'
import Avatar from '@material-ui/core/Avatar'

const ProfileImage = ({img, classes}) =>
    <Avatar 
        src={img} 
        alt="profile" 
        className={classes.avatar}
    />
    


export default ProfileImage