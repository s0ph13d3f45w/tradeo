import React from 'react'
import {Breadcrumbs, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme =>({
    root:{
        display: 'flex',
        justifyContent: 'center'
    },
    choices:{
        margin: theme.spacing(0.6, 0, 0, 1)
    }
}))

const Interest = ({t, interest}) =>{
    const classes = useStyles()
    return(
            interest ?  <div className={classes.root}>
                        <Typography variant="h6" color="textPrimary">
                            I'm interested in:
                        </Typography>
                        <Breadcrumbs className={classes.choices}>
                            <Typography color="textSecondary">{t(interest.area)}</Typography>
                            <Typography color="textSecondary">{t(interest.type)}</Typography>}
                        </Breadcrumbs>
                    </div>
            : null
        )
}
    
export default Interest