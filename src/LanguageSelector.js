import React from 'react'

import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


import { useTranslation } from 'react-i18next'

const LanguageSelector = () =>{
    const {i18n } = useTranslation()

    const changeLanguage = event =>
    i18n.changeLanguage(event.target.value)

    return(
        <FormControl component="fieldset">
            <RadioGroup row aria-label="language"
                name="language"
                defaultValue="en"
                onChange={changeLanguage}>
                <FormControlLabel 
                    value="en"
                    control={<Radio  />}
                    label="English"
                    labelPlacement="start"
                    />
                <FormControlLabel 
                    value="es"
                    control={<Radio  />}
                    label="Español"
                    labelPlacement="start"
                    />
            </RadioGroup>
        </FormControl>
    )
}

export default LanguageSelector