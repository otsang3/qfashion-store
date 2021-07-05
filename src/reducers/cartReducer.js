const cartReducer = (state = [], action) => {
    console.log('current state --', state);
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state, action.payload];
        case 'REMOVE_FROM_CART':
            const cartCopy = [...state];
            const index = action.payload;
            cartCopy.splice(index, 1);
            return cartCopy;
        default:
            return state;
    }
};

export default cartReducer;
