import updateQuantity from './update-quantity';
import {combineReducers} from 'redux';

let reducers = combineReducers({
    checkoutProducts: updateQuantity
});

export default reducers;