import './LoginPage.css';
import LoginPageBox from './LoginPageBox';

class LoginPage extends React.Component {

    handleLogin = () => {
        console.log('handling login');
    }

    render() {
        return (<div className="LoginPageMain">
            <LoginPageBox handleLogin={this.handleLogin} />
        </div>)
    }
}

export default LoginPage;
