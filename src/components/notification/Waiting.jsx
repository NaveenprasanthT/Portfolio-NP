import React from 'react';
import {Snackbar} from '@mui/material'
import {Alert} from '@mui/material'

const Wait = ({opening, setOpening}) =>{

    const handleClose = (event, reason) =>{
        if(reason === 'clickaway') return;

        setOpening(false)
    }

    return(
        <div>
            <Snackbar 
                anchorOrigin={{vertical:"top", horizontal:"right"}}
                open={opening}
                autoHideDuration={3000}
                onClose={handleClose}
            >
                <Alert onClose={handleClose} severity="info" elevation={6} variant='filled'>
                    Waiting to Send...
                </Alert>
            </Snackbar> 
        </div>
    );
}

export default Wait;