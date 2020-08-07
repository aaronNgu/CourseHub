import React from 'react';
import { Typography } from '@material-ui/core';
import FacebookLoginButton from './FacebookLoginButton';
import GoogleLoginButton from './GoogleLoginButton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {
		marginBottom: '20px',
	},
});

const LoginPageBox = (props) => {
	const classes = useStyles();

	return (
		<div className='LoginPageContainer'>
			<Typography className={classes.root} variant='h5'>
				Log in to rate a course
			</Typography>
			<FacebookLoginButton onclick={props.handleFacebookLogin} />
			<GoogleLoginButton onclick={props.handleGoogleLogin} />
		</div>
	);
};

export default LoginPageBox;
