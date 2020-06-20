import React from 'react';
import {Link} from "react-router-dom";
import "./Header.css"

class Header extends React.Component {

    render() {
        return (
            <header>
                    <ul className="navBar">
                        <li><Link to="/homepage" className="link home">CourseHub</Link></li>
                        <div className="right">
                        <li><Link to="/coursepage" className="link right">Temp. Course Page</Link></li>
                        <li><Link to="/about" className="link right">About</Link></li>
                        <li><Link to="/contact" className="link right">Contact </Link></li>
                        </div>
                    </ul>
            </header>
        );
    }
}

export default Header;
