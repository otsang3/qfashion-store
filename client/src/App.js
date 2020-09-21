import React, { useEffect, useState } from 'react';
import { useRoutes } from 'hookrouter';
import Nav from './components/Nav.js';
import NotFoundPage from './components/NotFoundPage';
import GetRoutes from './routes/GetRoutes';


function App() {

  const [state, setState ] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/store")
    .then(res => res.json())
    .then(data => setState(data[0]))
  }, [])

  const routeResult = useRoutes(GetRoutes(state));

  return (
      <div className="App">
        <Nav/>
        {routeResult || <NotFoundPage/>}
      </div>
    
  );
}

export default App;
