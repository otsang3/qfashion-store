import React from 'react';

function SideNav(props) {

    const renderList = () => {
        const listArr = [];
        let index = 0;
        for (let listItem in props.list) {
                let url = `/${props.category}/${listItem.toLowerCase()}`
                listArr.push(<li key={index}><a href={url}>{listItem}</a></li>)
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