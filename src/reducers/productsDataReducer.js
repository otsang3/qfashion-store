const productsDataReducer = (state = {}, action) => {
    switch (action.type) {
        case 'STORE_PRODUCTS_DATA':
            return action.payload;
        default:
            return state;
    }
};

export default productsDataReducer;
