import React from 'react';

function SideNav(props) {

    const renderList = () => {
        return props.list.map((listItem, index) => {
            return (
                <li key={index}>{listItem}</li>
            )
        })
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