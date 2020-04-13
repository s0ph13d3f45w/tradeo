import React from 'react';
import {IconButton, Typography,} from '@material-ui/core'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'

const WhatsappIcon = ({number, showNumber}) => {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <IconButton 
                color="primary"
                onClick={() =>{
                    window.open(`https://api.whatsapp.com/send?phone=${number}`)
                }}>
                <WhatsAppIcon />
        </IconButton>
        {showNumber && <Typography variant="subtitle1" color="textSecondary" style={{marginTop: 10}}>{number}</Typography>}
        </div>
    );
}

export default WhatsappIcon;
