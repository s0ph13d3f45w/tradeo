import React from 'react';
import Dialog from '@material-ui/core/Dialog'

const DialogContidions = ({open, classes, children}) => {
    return (
        <Dialog
            aria-labelledby="spring-dialog-title"
            aria-describedby="spring-dialog-description"
            className={classes.modal}
            open={open}
            scroll="paper"
            closeAfterTransition

        >
            {children}
        </Dialog> 
    );
}

export default DialogContidions;
