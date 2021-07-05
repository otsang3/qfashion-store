import React from 'react';
import { Link } from 'react-router-dom';
import SideNav from './SideNav';
import { useSelector } from 'react-redux';

function MenWomenHome(props) {
    const storeData = useSelector((state) => state.productsData);

    return (
        <div className="front-page-container">
            <div className="front-page-row-1">
                <SideNav
                    category={props.category}
                    list={storeData[props.category]}
                />
            </div>
            <div className="front-page-row-2">
                <Link to={props.promo.link}>
                    <img src={props.img} alt="promo" />
                    <div className="promo-text">
                        <p>{props.promo.name}</p>
                        <p>£{props.promo.price}</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default MenWomenHome;
