import React from 'react';
import Typography from '@material-ui/core/Typography'

const Title = ({children, component, variant="h6", color}) => 
    <Typography component={component} variant={variant} color={color}>
        {children}
    </Typography>
   

export default Title;
