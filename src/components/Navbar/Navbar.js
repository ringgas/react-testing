import React from 'react';

import './Navbar.css';

const Navbar = () => {
    return (
        <div class="topnav">
            <a class="active" href="#home"><b>Qtemu</b></a>
            <a href="#create">Create Meetup</a>
            <a href="#explore">Explore</a>
            <div class="topnav-right">
                <a href="#login">Login</a>
            </div>
            </div>
    );
}

export default Navbar;