import React from 'react';
import { Link } from 'react-router-dom';

function SideNav(props) {

    const capitaliseWord = (string) => {
        return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase()
    }

    const renderList = () => {
        const listArr = [];
        let index = 0;
        for (let listItem in props.list) {
                let url = `/${props.category}/${listItem.toLowerCase()}`
                listArr.push(<li key={index}><Link className="nav-list-link" to={url}>{capitaliseWord(listItem)}</Link></li>)
                index++;
        }
        return listArr;
    }

    return(
        <div className="sidenav-container">
            <h4>Shop by category</h4>
            <ul>
            {renderList()}
            </ul> 
        </div>
    )
}

export default SideNav;