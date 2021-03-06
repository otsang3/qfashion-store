import React from 'react';
import { Link } from 'react-router-dom';
import { BsBag } from 'react-icons/bs';
import { VscAccount } from 'react-icons/vsc'

function Nav() {

    return(
        <div className="nav-container">
            <div className="nav-bar-container">
                <div className="nav-bar-home"><Link className="nav-link" to="/">Home</Link></div>
                <div>Use discount code 'QSALE10' for 10% OFF!</div>
                <div className="nav-bar-row-3">
                    <div>
                        <p><VscAccount style={{marginTop: "0.1em"}}/></p>
                        <p>My Account</p>
                    </div>
                    <div>
                        <p><Link className="nav-link" to="/cart"></Link><BsBag/></p>
                        <p><Link className="nav-link" to="/cart">Shopping bag</Link></p>
                    </div>
                </div>
                
            </div>
            <div className="nav-logo-container">
                <img className="nav-logo" src={require('../images/logo.png')} alt="logo"/>
            </div>
            <div className="nav-list">
                <Link className="nav-list-link" to="/men">MEN</Link>
                <Link className="nav-list-link" to="/women">WOMEN</Link>
            </div>
        </div>
    )
}

export default Nav;