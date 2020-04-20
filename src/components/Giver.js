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

const Giver = ({t, type, subType}) =>{
    const classes = useStyles()
    return(
            type ?  <div className={classes.root}>
                        <Typography variant="h6" color="textPrimary">
                            I offer:
                        </Typography>
                        <Breadcrumbs className={classes.choices}>
                            <Typography color="textSecondary">{t(type)}</Typography>
                            {subType && <Typography color="textSecondary">{t(subType)}</Typography>}
                        </Breadcrumbs>
                    </div>
            : null
        )
}
    
export default Giver