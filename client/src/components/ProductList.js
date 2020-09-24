import React from 'react';
import Product from './Product';
import SideNav from './SideNav';

function ProductList(props) {

    const { match: {params} } = props.name;

    const renderList = () => {
        let list = []
        for (let category in props.state) {
            if (category.toLowerCase() === params.name.toLowerCase()) {
                props.state[category].map((item, index) => {
                    return list.push(<Product category={props.category} prodType={params.name} key={index} item={item}></Product>)
                })
            }
        }
        return list;
    }

    return(
        <div className="prod-list-container">
            <div>
                <SideNav category={props.category} list={props.state}/>
            </div>
            <div className="prod-list-col">
                {console.log(props)}
                {renderList()}
            </div>
        </div>
    )
}

export default ProductList;