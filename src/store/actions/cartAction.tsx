import { ProductDetailsModel } from "../../components/productDetails/setting"
import { ProductModel } from "../../components/products/setting"

export const AddToCart = (Product: ProductDetailsModel | ProductModel) => {
    return {
        type: "ADD_PRODUCT",
        payload: Product
    }
}

export const RemoveFromCart = (Product: ProductDetailsModel | ProductModel) => {
    return {
        type: "REMOVE_PRODUCT",
        payload: Product
    }
}