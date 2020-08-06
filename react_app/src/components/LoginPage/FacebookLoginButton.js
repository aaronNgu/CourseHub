import React from 'react';
import { Button } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        margin: '8px 3vh',
        width: '322px',
    }
});

const FacebookLoginButton = (props) => {
    const classes = useStyles();
    return <Button onClick={props.onclick} className={classes.root} variant='outlined'>Continue with Facebook</Button>;
}

export default FacebookLoginButton;
