import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Cart from './components/Cart';
import GlobalState from './components/GlobalState';
import HomePage from './components/HomePage';
import MenWomenHome from './components/MenWomenHome';
import Nav from './components/Nav.js';
import NotFoundPage from './components/NotFoundPage';
import ProductItem from './components/ProductItem';
import ProductList from './components/ProductList';

function App() {

  const [state, setState ] = useState(true);

  if (!state) {
    return (
      <p>Loading...</p>
    )} else {
    return (
      <Router>
        <div className="app">
          <GlobalState>
          <Nav/>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/cart" component={Cart}/>
            <Route exact path="/men" render={() => (
              <MenWomenHome category="men" img={require('./images/men/jackets/jacket-5.png')} promo={{
                link: "/men/jackets/farah-bective-soft-shell-jacket",
                name: "Farah Bective soft shell jacket",
                price: 100
              }}/>
            )}/>
            <Route exact path="/men/:name" render={(name) => (
              <ProductList category="men" name={name}/>
            )}/>
            <Route exact path="/men/:name/:product" render={(name) => (
              <ProductItem category="men" name={name}/>
            )}/>
            <Route exact path="/women" render={() => (
              <MenWomenHome category="women" img={require('./images/women/jackets/jacket-9.png')} promo={{
                link: "women/jackets/pimkie-teddy-jacket",
                name: "Pimkie Teddy jacket",
                price: 49.99
              }}/>
            )}/>
            <Route exact path="/women/:name" render={(name) => (
              <ProductList category="women" name={name}/>
            )}/>
            <Route exact path="/women/:name/:product" render={(name) => (
              <ProductItem category="women" name={name}/>
            )}/>
          </Switch>
          </GlobalState>  
        </div>
      </Router>
    );
  }
  
}

export default App;
