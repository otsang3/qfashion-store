export const addToCart = (item) => {
    return {
        type: 'ADD_TO_CART',
        payload: item,
    };
};

export const removeFromCart = (itemIndex) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: itemIndex,
    };
};

export const storeProductsData = (productsData) => {
    return {
        type: 'STORE_PRODUCTS_DATA',
        payload: productsData,
    };
};
