import React from 'react';
import { SiFacebook, SiInstagram, SiTwitter, SiYoutube } from 'react-icons/si';

function Footer() {

    return(
        <div className="footer">
            <p>Follow us on
                <SiFacebook style={{cursor: "pointer", marginLeft: "0.5em"}}/>
                <SiYoutube style={{cursor: "pointer", marginLeft: "0.5em"}}/>
                <SiInstagram style={{cursor: "pointer", marginLeft: "0.5em"}}/>
                <SiTwitter style={{cursor: "pointer", marginLeft: "0.5em"}}/>
            </p>
            <p>© 2020 QFashion</p>
        </div>
    )
}

export default Footer;