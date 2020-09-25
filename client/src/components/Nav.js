import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {

    return(
        <div className="nav-container">
            <div className="nav-col-1">
                QFashion
            </div>
            <div className="nav-list">
                <Link to="/men">MEN</Link>
                <Link to="/women">WOMEN</Link>
                <Link to="/cart">Cart</Link>
            </div>
        </div>
    )
}

export default Nav;