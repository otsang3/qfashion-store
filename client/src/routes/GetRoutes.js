import React from 'react';
import HomePage from '../components/HomePage'
import MenWomenHome from "../components/MenWomenHome";
import ProductList from '../components/ProductList';

function GetRoutes(props) {

    if (props)

    {return {
        '/': () => <HomePage/>,
        '/mens': () => <MenWomenHome state={props.men} img={require('../images/men-fashion.jpg')}/>,
        '/mens/:name': (name) => <ProductList name={name} state={props.men}/>,
        '/womens': () => <MenWomenHome state={props.women} img={require('../images/women-fashion3.png')}/>
    }} else {
        return {}
    }
}

export default GetRoutes;
