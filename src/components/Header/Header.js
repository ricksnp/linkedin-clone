import React from 'react';
import './Header.css';


function Header() {
    return (
        <div className='header'>
            <h1>This is the header</h1>
            <div className="header__left">
                <img src="" className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt="" />
                <div className="header__search">
                    {/* Search icon */}
                    <input type="text"></input>
                </div>
            </div>

            <div className="header__right">

            </div>
        </div>

    );
}

export default Header
