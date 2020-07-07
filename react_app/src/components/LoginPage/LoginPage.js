import React from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

class LoginPage extends React.Component {

    render() {
        return (<div>
            <Typography variant='h5'>Log in to rate a course</Typography>
            <Typography variant='body2'>
                Don't have an account? Click <Link to="#" >here</Link> to sign up
            </Typography>
        </div>)
    }
}

export default LoginPage;
