import React from 'react';
import TextField from '@material-ui/core/TextField'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme =>({
    root:{
        minWidth: 250
    }
}))
const Description = ({t,description, onChange}) => {
    const classes = useStyles()
    return(
            <TextField 
                className={classes.root}
                variant="filled"
                label={t("description")}
                name="description"
                multiline
                rows={4}
                value={description}
                onChange={onChange}/>
    )
}

export default Description;
