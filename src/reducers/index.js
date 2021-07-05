import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import productsDataReducer from './productsDataReducer';

const allReducers = combineReducers({
    cart: cartReducer,
    productsData: productsDataReducer,
});

export default allReducers;
