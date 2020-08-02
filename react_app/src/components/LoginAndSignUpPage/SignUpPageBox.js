import React from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import FacebookLoginButton from './FacebookLoginButton';
import GoogleLoginButton from './GoogleLoginButton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        marginBottom: '20px',
    }
});

const SignUpPageBox = (props) => {
    const classes = useStyles();

    return (
        <div className="SignUpPageContainer">
            <Typography className={classes.root} variant='h5'>Sign up to create an account and rate a course</Typography>
            <FacebookLoginButton onclick={props.handleFacebookLogin} />
            <GoogleLoginButton onclick={props.handleGoogleLogin} />
            <Typography variant='body2'>
                Already have an account? Click <Link to="/login" >here</Link> to log in
            </Typography>
        </div>);
}

export default SignUpPageBox;
