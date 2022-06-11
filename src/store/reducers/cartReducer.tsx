import { Reducer } from "redux";
import { ProductDetailsModel } from "../../components/productDetails/setting";
import { ProductModel } from "../../components/products/setting";
type Action = {
    type: string;
    payload: ProductDetailsModel;
}

const initialState: Array<ProductDetailsModel | ProductModel> = [];

const CartReducer: Reducer<Array<ProductDetailsModel | ProductModel>, Action> = (state: Array<ProductDetailsModel | ProductModel> = initialState, action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            return [...state, action.payload];
        case "REMOVE_PRODUCT":
            let removeIndex = -1;
            state.every((pro, index) => {
                removeIndex = index;
                return pro.id !== action.payload.id
            });
            state.splice(removeIndex, 1)
            return state;
        default:
            return state
    }
}

export default CartReducer;

export interface ReducerModel {
    cartList: Array<ProductDetailsModel | ProductModel>
}
