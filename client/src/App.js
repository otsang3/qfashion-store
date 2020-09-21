import React from 'react';
import { useRoutes } from 'hookrouter';
import HomePage from './components/HomePage';
import Nav from './components/Nav.js';
import NotFoundPage from './components/NotFoundPage';
import {routes} from './routes/Routes';


function App() {

  const routeResult = useRoutes(routes);

  return (
      <div className="App">
        <Nav/>
        {routeResult || <NotFoundPage/>}
      </div>
    
  );
}

export default App;
