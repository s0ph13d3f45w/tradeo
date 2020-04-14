import React from 'react'
import Typography from '@material-ui/core/Typography'

const Description = ({description, classes}) =>
    <>
        <Typography 
            className={classes.textDescription}
            variant="body2" 
            component="p"
            color="textSecondary">
            {description}
            <br />
        </Typography>
    </>

export default Description