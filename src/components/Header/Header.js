import React from 'react';
import "./Header.css"

class Header extends React.Component {

  render() {
    return (
      <div className = "topnav" >
        <a id = "appTitle" className = "active" href = "#home" > CourseHub </a>
        <a className = "contact-us" href = "#contact" > Contact Us </a>
        <a className = "about" href = "#about" > About </a>
      </div>
    );
  }
}

export default Header;
