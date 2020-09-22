import React from 'react';
import HomePage from '../components/HomePage'
import MenWomenHome from "../components/MenWomenHome";
import ProductList from '../components/ProductList';

function GetRoutes(props) {

    if (props)

    {return {
        '/': () => <HomePage/>,
        '/mens': () => <MenWomenHome category="mens" state={props.men} img={require('../images/men/men-fashion.jpg')}/>,
        '/mens/:name': (name) => <ProductList category="mens" name={name} state={props.men}/>,
        '/womens': () => <MenWomenHome category="womens" state={props.women} img={require('../images/women/women-fashion3.png')}/>
    }} else {
        return {}
    }
}

export default GetRoutes;
