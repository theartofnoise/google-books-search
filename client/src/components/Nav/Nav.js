import React from 'react';
import "./Nav.css"


const Nav = (props) => {
    return (
        <div className="nav">
            
                <h1 className="logo">Google Books</h1>
                <div className="links">
                <a href="#">Search |</a>
                <a href="#">Saved</a>
            </div>
        </div>
    );
};

export default Nav;