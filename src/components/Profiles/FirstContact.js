import React from 'react'
import {DialogContent,DialogTitle, DialogContentText, DialogActions, Button} from '@material-ui/core'

const FirstContact = ({onClose, t}) =>{
    return(
        <>
            <DialogTitle>
                BE POLITE PLEASE
            </DialogTitle>
            <DialogContent>
                <DialogContentText style={{fontSize: '0.9em'}}>
                    <h2>.</h2>
                </DialogContentText>
            <DialogActions>
                <Button variant="contained" color="secondary" onClick={onClose}>{t("accept")}</Button>
            </DialogActions>
        </DialogContent>
    </>
    )
}

export default FirstContact