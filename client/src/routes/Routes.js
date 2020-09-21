import React from 'react';
import HomePage from '../components/HomePage'
import MenWomenHome from "../components/MenWomenHome";

export const routes = {
    '/': () => <HomePage/>,
    '/mens': () => <MenWomenHome category="men"/>,
    '/womens': () => <MenWomenHome category="women"/>
}