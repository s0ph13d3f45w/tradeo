import React, {useState} from 'react'

import {FormControl,
        Select,
        MenuItem} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'

import TranslateIcon from '@material-ui/icons/Translate';
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles(theme =>({
    root:{
        display: 'flex',
        flexDirection: 'row',
    },
    icon:{
        marginRight: theme.spacing(1)
    }
}))

const LanguageSelector = () =>{
    const {i18n } = useTranslation()
    const [language, setLanguage] = useState("en")
    const classes = useStyles()

    const changeLanguage = event =>{
        i18n.changeLanguage(event.target.value)
        setLanguage(event.target.value)
    }


    return(
        <FormControl className={classes.root}>
            <TranslateIcon className={classes.icon}/> 
            <Select
                labelId="language-selector"
                id="language-selector"
                value={language}
                onChange={changeLanguage}
                label="english">
                
                <MenuItem id="en" value="en">
                    English
                </MenuItem>
                <MenuItem id="es"value="es">
                    Español
                </MenuItem>
            </Select>
        </FormControl>
    )
}

export default LanguageSelector