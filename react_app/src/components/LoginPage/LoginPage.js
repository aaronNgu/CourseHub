import React from 'react';
import './LoginPage.css';
import LoginPageBox from './LoginPageBox';
import {connect} from 'react-redux';

class LoginPage extends React.Component {

    handleFacebookLogin = () => {
        window.open('http://localhost:9000/auth/facebook','_self');
    }

    handleGoogleLogin = () => {
        window.open('http://localhost:9000/auth/google', '_self');
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
