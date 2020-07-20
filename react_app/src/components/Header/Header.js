import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
import {connect} from 'react-redux';
import {checkStatus, logout} from '../../actions';

class Header extends React.Component {

    componentDidMount() {
        this.props.dispatch(checkStatus());
    }

    handleLogOut = () => {
        this.props.dispatch(logout());
    }

    render() {

        const auth = this.props.auth;

        return (
            <header>
                <ul className="navBar">
                    <li>
                        <Link to="/homepage" className="link home">
                            CourseHub
                        </Link>
                    </li>
                    <div className="right">
                        <li>
                            <Link to="/coursepage" className="link right">
                                Temp. Course Page
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="link right">
                                About
                            </Link>
                        </li>
                        {
                            auth.isAuthenticated ? 
                                <li>
                                    <Link onClick={this.handleLogOut} to='#' className="link right">
                                        Sign out 
                                    </Link>
                                </li>:
                                <li>
                                    <Link to='/login' className="link right">
                                        Login
                                    </Link>
                                </li>                      
                        }
                        {   auth.isAuthenticated ?
                                null:
                                <li>
                                    <Link to='#' className="link right">
                                        Sign Up
                                    </Link>
                                </li>
                        }
                        <li>
                            <Link to="/contact" className="link right">
                                Contact
                            </Link>
                        </li>
                    </div>
                </ul>
            </header>
        );
    }

}

const mapStateToProps = (state) => {
    return {auth: state.auth};
}

export default connect(mapStateToProps)(Header);
