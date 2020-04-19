import React from 'react'
import {FormControl, FormControlLabel, Radio, RadioGroup, FormLabel} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme =>({
    root:{
        color: 'rgba(0, 0, 0, 0.54)',
        margin: theme.spacing(3.5,0,1)
    }
}))

const SelectContact = ({t,contact, contactChange}) =>{
    const classes = useStyles()
    return(
        <FormControl className={classes.root} component="fieldset">
            <FormLabel component="legend">{t("contactMethod")}</FormLabel>
            <RadioGroup row aria-label="contact" name="contactMethod" value={contact} onChange={contactChange}>
                <FormControlLabel name="contact" value="whatsapp" control={<Radio />} label="Whatsapp"/>
                <FormControlLabel name="contact" value="email" control={<Radio />} label="Email"/>
            </RadioGroup>
            
        </FormControl>
    )
}

export default SelectContact