import React from 'react';
import {Link} from "react-router-dom";
import "./Header.css"

class Header extends React.Component {

  render() {
    return (
        <header>
            <ul className="navBar">
                <li><Link to="/homepage" className="link">CourseHub</Link></li>
                <li><Link to="/coursepage" className="link">Temp. Course Page</Link></li>
                <li><Link to="/about" className="link">About</Link></li>
                <li><Link to="/contact" className="link">Contact </Link></li>
            </ul>
        </header>
    );
  }
}

export default Header;
