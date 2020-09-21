import React from 'react';
import HomePage from '../components/HomePage'
import MenWomenHome from "../components/MenWomenHome";

function GetRoutes(props) {

    return {
        '/': () => <HomePage/>,
        '/mens': () => <MenWomenHome img={require('../images/men-fashion.jpg')}/>,
        '/womens': () => <MenWomenHome img={require('../images/women-fashion3.png')}/>
    }
}

export default GetRoutes;
