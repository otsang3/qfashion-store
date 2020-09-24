import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './components/HomePage';
import MenWomenHome from './components/MenWomenHome';
import Nav from './components/Nav.js';
import NotFoundPage from './components/NotFoundPage';
import ProductList from './components/ProductList';


function App() {

  const [state, setState ] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/store")
    .then(res => res.json())
    .then(data => {setState(data[0])})
  }, [])

  if (state) {
    return (
      <Router>
        <div className="App">
          <Nav/>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/mens" render={() => (
              <MenWomenHome category="mens" img={require('./images/men/men-fashion.jpg')} state={state.men}/>
            )}/>
            <Route path="/mens/:name" render={(name) => (
              <ProductList category="mens" name={name} state={state.men}/>
            )}/>
            <Route path="/mens/:name/:product" />
            <Route exact path="/womens" render={() => (
              <MenWomenHome img={require('./images/women/women-fashion3.png')} state={state.women}/>
            )}/>
            <Route path="/womens/:name" render={(name) => (
              <ProductList category="womens" name={name} state={state.women}/>
            )}/>
            <Route path="/womens/:name/:product" />
          </Switch>
        </div>
      </Router>
    );
  } else {
    return (
      <p>Loading...</p>
    )
  }
  
}

export default App;
