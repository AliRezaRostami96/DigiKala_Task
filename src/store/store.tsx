import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import CartReducer from './reducers/cartReducer';
import SnackBarReducer from './reducers/snackbarReducer';

const rootReducer = combineReducers({
    cartList: CartReducer,
    snackbar: SnackBarReducer
})

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
