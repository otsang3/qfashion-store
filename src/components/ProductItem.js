import React from 'react';
import NotFoundPage from './NotFoundPage';
import ProductDetail from './ProductDetail';
import { useSelector } from 'react-redux';

function ProductItem(props) {
    const storeData = useSelector((state) => state.productsData);
    const prodCategories = storeData[props.category];
    const {
        match: { params },
    } = props.name;

    const renderItem = () => {
        for (let category in prodCategories) {
            if (category.toLowerCase() === params.name.toLowerCase()) {
                for (let item of prodCategories[category]) {
                    if (
                        item.name.split(' ').join('-').toLowerCase() ===
                        params.product.toLowerCase()
                    )
                        return <ProductDetail item={item} />;
                }
                return <NotFoundPage />;
            }
        }
    };

    return <div>{renderItem()}</div>;
}

export default ProductItem;
