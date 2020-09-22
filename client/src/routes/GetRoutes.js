import React from 'react';
import HomePage from '../components/HomePage'
import MenWomenHome from "../components/MenWomenHome";
import ProductItem from '../components/ProductItem';
import ProductList from '../components/ProductItem';

function GetRoutes(props) {

    if (props)

    {return {
        '/': () => <HomePage/>,
        '/mens': () => <MenWomenHome category="mens" state={props.men} img={require('../images/men/men-fashion.jpg')}/>,
        '/mens/:name': (name) => <ProductList category="mens" name={name} state={props.men}/>,
        '/mens/:name/:product': (name, product) => <ProductItem name={name} product={product} state={props.men}/>,
        '/womens': () => <MenWomenHome category="womens" state={props.women} img={require('../images/women/women-fashion3.png')}/>,
        '/womens/:name': (name) => <ProductList category="womens" name={name} state={props.women}/>
    }} else {
        return {}
    }
}

export default GetRoutes;
