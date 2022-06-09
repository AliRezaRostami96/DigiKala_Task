import { createStore, combineReducers } from 'redux';
import CartReducer from './reducers/cartReducer';
// ...

const rootReducer = combineReducers({
    cartList: CartReducer,
})

const store = createStore(rootReducer);
export default store;
