import React, {useState, useEffect} from 'react';
import {firestore} from '../../firebase'
import {FormControl, Select, MenuItem, InputLabel, Typography} from '@material-ui/core'


const ContactWay = ({classes, user}) => {
    const [contact, setContact] = useState(user.contact)
    const userRef = firestore.doc(`users/${user.uid}`)
    const handleSelectChange = async e =>{
        setContact(e.target.value)
    }
    useEffect(()=>{
        userRef.update({contact})
    }, [contact, userRef])
    return (
        <FormControl className={classes.contact}>
        <InputLabel>Contact method</InputLabel>
        <Select
            labelId="contact-selector"
            id="contact-selector"
            value={contact}
            onChange={handleSelectChange}
            label="contact">
            
            <MenuItem name="whatsapp" value="whatsapp" color="textSecondary">
                <Typography variant="subtitle2" color="textSecondary">Whatsapp</Typography>
            </MenuItem>
            <MenuItem name="email" value="email" color="textSecondary">
                <Typography variant="subtitle2" color="textSecondary">Email</Typography>

            </MenuItem>
        </Select>
    </FormControl>
    );
}

export default ContactWay;
