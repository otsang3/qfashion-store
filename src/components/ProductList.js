import React from 'react';
import Product from './Product';
import SideNav from './SideNav';
import { useSelector } from 'react-redux';

function ProductList(props) {
    const storeData = useSelector((state) => state.productsData);
    const prodCategories = storeData[props.category];

    const {
        match: { params },
    } = props.name;

    const capitaliseWord = (string) =>
        string.charAt(0).toUpperCase() + string.slice(1);

    const renderList = () => {
        let list = [];
        for (let category in prodCategories) {
            if (category.toLowerCase() === params.name.toLowerCase()) {
                prodCategories[category].map((item, index) => {
                    return list.push(
                        <Product
                            category={props.category}
                            prodType={params.name}
                            key={index}
                            item={item}
                        ></Product>
                    );
                });
            }
        }
        return list;
    };

    return (
        <div className="prod-list-container">
            <div>
                <SideNav
                    category={props.category}
                    list={storeData[props.category]}
                />
            </div>
            <div className="prod-list-col">
                <h2>{capitaliseWord(params.name)}</h2>
                <div className="prod-list-items">{renderList()}</div>
            </div>
        </div>
    );
}

export default ProductList;
