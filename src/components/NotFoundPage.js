import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
    return(
        <div className="not-found-container">
            <h1>404</h1>
            <p>Sorry, we couldn't find this page. 
            But don't worry, you can find plenty of other things on our <Link style={{color: "blue"}} to="/">homepage</Link>.</p>
        </div>
    )
}

export default NotFoundPage;