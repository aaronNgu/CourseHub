import React from 'react';
import './LoginPage.css';
import LoginPageBox from './LoginPageBox';
import {connect} from 'react-redux';
import {authenticated} from '../../actions';

class LoginPage extends React.Component {

    handleFacebookLogin = () => {
        // TODO: replace with LINK(window.open(link)) to /auth/facebook/login
        let payload = {
            isAuthenticated: !this.props.auth.isAuthenticated,
            user: null
        }
        this.props.dispatch(authenticated(payload));
    }

    handleGoogleLogin = () => {
        // TODO: replace with LINK(window.open(link)) to /auth/google/login
        let payload = {
            isAuthenticated: !this.props.auth.isAuthenticated,
            user: null
        }
        this.props.dispatch(authenticated(payload));
    }

    render() {
        return (<div className="LoginPageMain">
            <LoginPageBox handleFacebookLogin={this.handleFacebookLogin} handleGoogleLogin={this.handleGoogleLogin} />
        </div>)
    }
}

const mapStateToProps = (state) => {
    return {auth: state.auth};
}

export default connect(mapStateToProps)(LoginPage);
