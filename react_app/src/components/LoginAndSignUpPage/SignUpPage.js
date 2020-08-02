import React from 'react';
import './LoginAndSignUpPage.css';
import SignUpPageBox from './SignUpPageBox';
import {connect} from 'react-redux';

class SignUpPage extends React.Component {

    handleFacebookLogin = () => {
        window.open('/auth/facebook','_self');
    }

    handleGoogleLogin = () => {
        window.open('/auth/google', '_self');
    }

    render() {
        return (<div className="SignUpPageMain">
            <SignUpPageBox handleFacebookLogin={this.handleFacebookLogin} handleGoogleLogin={this.handleGoogleLogin} />
        </div>)
    }
}

const mapStateToProps = (state) => {
    return {auth: state.auth};
}

export default connect(mapStateToProps)(SignUpPage);
