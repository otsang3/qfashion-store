import React from 'react';
import { Link } from 'react-router-dom';

function HomePage(props){

    console.log(props);

    return(
        <div className="home-container">
            <div className="home-col-1">
                <Link to="/men/jackets">
                <img src={props.img1} alt="promo"/>
                <p className="promo-text">{props.promoText1}</p>
                </Link>
            </div>
            <div className="home-col-2">
                <div>
                    <Link to="/women/jackets">
                    <img style={{objectFit: "cover", objectPosition: "10% 10%"}}src={props.img2} alt="promo"/>
                    <p className="promo-text">{props.promoText2}</p>
                    </Link>
                </div>
                <div>
                    <Link to="/women/shoes">
                    <img src={props.img3} alt="promo"/>
                    <p className="promo-text">{props.promoText3}</p>
                    </Link> 
                </div>
            </div>
        </div>
    )
}

export default HomePage;