import React from "react";
import './LoginPage.css';
import LoginPageBox from './LoginPageBox';
import PropTypes from "prop-types";
const passport = require('passport');

class LoginPage extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
      user: {},
      error: null,
      authenticated: false
    };
  }

  componentDidMount() {
    fetch("http://localhost:9000/auth/login/success", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      }
    })
      .then(response => {
        if (response.status === 200) return response.json();
        throw new Error("failed to authenticate user");
      })
      .then(responseJson => {
        this.setState({
          authenticated: true,
          user: responseJson.user
        });
      })
      .catch(error => {
        this.setState({
          authenticated: false,
          error: "Failed to authenticate user"
        });
      });
  }



    handleLogin = () => {
        console.log('handling login');
        passport.authenticate( 'google', {failureFlash:true} );
        window.open("http://localhost:9000/auth/google", "_self");
    }

    render() {
        const { authenticated } = this.state;
        return (
          <div className="LoginPageMain">
            <LoginPageBox
            authenticated={authenticated}
            handleNotAuthenticated={this._handleNotAuthenticated}
            handleLogin={this.handleLogin} />
            <div>
              {!authenticated ? (
                <h1>Welcome!</h1>
              ) : (
                <div>
                  <h1>You have login succcessfully!</h1>
                  <h2>Welcome {this.state.user.name}!</h2>
                </div>
              )}
            </div>
        </div>)
    }
    _handleNotAuthenticated = () => {
      this.setState({ authenticated: false });
    };
}

export default LoginPage;
