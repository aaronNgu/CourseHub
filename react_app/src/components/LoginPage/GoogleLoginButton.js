import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        margin: '8px 3vh',
        width: '322px',
    }
});

const GoogleLoginButton = () => {
    const classes = useStyles();
    return <Button className={classes.root} variant='outlined'> ICON&nbsp;&nbsp;Continue with Google</Button>;
}

export default GoogleLoginButton;
