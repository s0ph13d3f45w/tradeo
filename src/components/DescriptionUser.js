import React from 'react'
import Typography from '@material-ui/core/Typography'

const DescriptionUser = ({description}) =>
       description ? <Typography 
                        variant="body2" 
                        component="p"
                        color="textSecondary">
                        {description}
                    </Typography>
        : null


export default DescriptionUser