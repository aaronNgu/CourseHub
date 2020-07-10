import React from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import FacebookLoginButton from './FacebookLoginButton';
import GoogleLoginButton from './GoogleLoginButton';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";


const useStyles = makeStyles({
    root: {
        marginBottom: '20px',
    }
});

const LoginPageBox = (props) => {
    const classes = useStyles();
    const propTypes = {
      authenticated: PropTypes.bool.isRequired
    };
    const { authenticated } = props;
    return (
        <div className="LoginPageContainer">
            <Typography className={classes.root} variant='h5'>Log in to rate a course</Typography>
            <FacebookLoginButton onclick={props.handleLogin} />
            <GoogleLoginButton onclick={props.handleLogin} />
            <Typography variant='body2'>
                Don't have an account? Click <Link to="#" >here</Link> to sign up
            </Typography>
        </div>);
}



export default LoginPageBox;
