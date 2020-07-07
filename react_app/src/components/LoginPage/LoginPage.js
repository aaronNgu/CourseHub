import React from 'react';
import './LoginPage.css';
import LoginPageBox from './LoginPageBox';

class LoginPage extends React.Component {

    render() {
        return (<div className="LoginPageMain">
            <LoginPageBox/>
        </div>)
    }
}

export default LoginPage;
