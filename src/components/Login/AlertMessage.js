import React from 'react';
import Collapse from '@material-ui/core/Collapse'
import Alert from '@material-ui/lab/Alert';

const AlertMessage = ({alert, severity, children}) => 
    <Collapse in={alert}>
        <Alert severity={severity}>
            {children}                 
        </Alert>
    </Collapse>
 
export default AlertMessage;
