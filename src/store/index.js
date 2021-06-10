import updateQuantity from './reducers/update-quantity';
import UpdateCurrentProduct from './reducers/current-product';
import ProductList from './reducers/store';
import {combineReducers} from 'redux';

let reducers = combineReducers({
    checkoutProducts: updateQuantity,
    currentProduct: UpdateCurrentProduct,
    productList: ProductList
});

export default reducers;