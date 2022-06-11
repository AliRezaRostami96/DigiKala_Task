import { AnyAction, Dispatch } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { ProductDetailsModel } from "../../components/productDetails/setting";
import { ProductModel } from "../../components/products/setting";
import { Translation } from "../../components/Public/layout/setting";
import { RootState } from "../store";
import { HideSnackBar, ShowSnackBar } from "./snackbarAction";

const AddToCartAction = (Product: ProductDetailsModel | ProductModel) => {
    return {
        type: "ADD_PRODUCT",
        payload: Product
    }
}

const RemoveFromCartAction = (Product: ProductDetailsModel | ProductModel) => {
    return {
        type: "REMOVE_PRODUCT",
        payload: Product
    }
}

export const AddToCart =
    (Product: ProductDetailsModel | ProductModel): any => (
        async (dispatch: Dispatch<AnyAction>) => {
            dispatch(AddToCartAction(Product));
            dispatch(ShowSnackBar(Translation.saveToCart, "success"));
        }
    )

export const RemoveFromCart =
    (Product: ProductDetailsModel | ProductModel): any => (
        async (dispatch: Dispatch<AnyAction>) => {
            dispatch(RemoveFromCartAction(Product));
            dispatch(ShowSnackBar(Translation.removeFromCart, "error"));
        }
    )