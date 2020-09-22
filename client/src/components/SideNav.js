import React from 'react';

function SideNav(props) {

    const renderList = () => {
        const listArr = [];
        let index = 0;
        for (let listItem in props.list) {
                listArr.push(<li key={index}>{listItem}</li>)
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