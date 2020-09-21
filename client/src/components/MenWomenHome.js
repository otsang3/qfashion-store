import React from 'react';
import { useRoutes } from 'hookrouter';

function MenWomenHome(props) {

    return(
        <div>
            {props.category === "men" ? <p>Men's homepage</p> : <p>Women's homepage</p>}
        </div>
    )
}

export default MenWomenHome;