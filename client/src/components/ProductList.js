import React from 'react';
import Product from './Product';
import SideNav from './SideNav';

function ProductList(props) {

    const renderList = () => {
        let list = []
        for (let category in props.state) {
            if (category.toLowerCase() === props.name.name.toLowerCase()) {
                props.state[category].map((item, index) => {
                    return list.push(<Product key={index} item={item}></Product>)
                })
            }
        }
        return list;
    }

    return(
        <div className="prod-list-container">
            <div>
                <SideNav list={props.state}/>
            </div>
            <div className="prod-list-col">
                {renderList()}
            </div>
            
        </div>
    )
}

export default ProductList;