import React from 'react';
import HomePage from '../components/HomePage'
import MenWomenHome from "../components/MenWomenHome";

function GetRoutes(props) {

    return {
        '/': () => <HomePage/>,
        '/mens': () => <MenWomenHome category="men"/>,
        '/womens': () => <MenWomenHome category="women"/>
    }
}

export default GetRoutes;
