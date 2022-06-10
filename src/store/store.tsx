import { createStore, combineReducers } from 'redux';
import CartReducer from './reducers/cartReducer';
import SnackBarReducer from './reducers/snackbarReducer';
// ...

const rootReducer = combineReducers({
    cartList: CartReducer,
    snackbar: SnackBarReducer
})

const store = createStore(rootReducer);
export default store;
