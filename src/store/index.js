import updateQuantity from './update-quantity';
import UpdateCurrentProduct from './current-product';
import {combineReducers} from 'redux';

let reducers = combineReducers({
    checkoutProducts: updateQuantity,
    currentProduct: UpdateCurrentProduct
});

export default reducers;