import React from 'react';

function Nav() {

    return(
        <div className="nav-container">
            <div className="nav-col-1">
                QFashion
            </div>
            <div className="nav-list">
                <a href="/men">MEN</a>
                <a href="/women">WOMEN</a>
            </div>
        </div>
    )
}

export default Nav;