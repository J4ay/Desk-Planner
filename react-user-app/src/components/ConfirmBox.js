import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const ConfirmBox = (props) => {
    const { title, children, open, setOpen, onConfirm} = props;
    return (
        <Dialog 
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="confirm-box"
        >
            <DialogTitle id="confirm-box">{title}</DialogTitle>
            <DialogContent>{children}</DialogContent>
            <DialogActions>
                <Button
                    variant="contained"
                    onClick={() => setOpen(false)}
                    color="secondary"
                >
                    Cancel
                </Button>
                <Button
                    variant="contained"
                    onClick={ () => {
                        setOpen(false);
                        onConfirm();
                    }}
                    color="default"
                >
                    OK
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmBox;