import React, { useContext } from 'react';
import { GlobalContext } from './GlobalState';
import Product from './Product';
import SideNav from './SideNav';

function ProductList(props) {

    const globalContext = useContext(GlobalContext)
    const prodCategories = globalContext[props.category]


    const { match: {params} } = props.name;

    const renderList = () => {
        let list = []
        for (let category in prodCategories) {
            if (category.toLowerCase() === params.name.toLowerCase()) {
                prodCategories[category].map((item, index) => {
                    return list.push(<Product category={props.category} prodType={params.name} key={index} item={item}></Product>)
                })
            }
        }
        return list;
    }

    return(
        <div className="prod-list-container">
            <div>
                <SideNav category={props.category} list={globalContext[props.category]}/>   
            </div>
            <div className="prod-list-col">
                {console.log(props)}
                {renderList()}
            </div>
        </div>
    )
}

export default ProductList;