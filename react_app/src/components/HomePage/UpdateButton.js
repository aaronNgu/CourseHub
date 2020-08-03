import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/';

const useStyles = makeStyles({
    root: {
        height: '35px',
        background: '#f1c5c5',
    }
});

const UpdateButton = () => {
    const classes = useStyles();

    const handleSearch = () => {
        // TODO: dispatch action searchExecute
    }
    
    return <Button 
            className={classes.root} 
            variant='contained'
            onClick={handleSearch}>Update Search</Button>
};

export default UpdateButton;
