import { Reducer } from "redux";
type Action = {
    type: string;
    payload: string;
}
export type SnackBarStateModel = {
    value: boolean;
    message: string
}
const initialState: SnackBarStateModel = { value: false, message: "" };

const SnackBarReducer: Reducer<SnackBarStateModel, Action> = (state: SnackBarStateModel = initialState, action) => {
    switch (action.type) {
        case "SHOW_SNACKBAR":
            return {
                value: true,
                message: action.payload
            };
        case "HIDE_SNACKBAR":
            return {
                value: false,
                message: ""
            };
        default:
            return state
    }
}

export default SnackBarReducer;

export interface SnackBarReducerModel {
    snackbar: SnackBarStateModel
}
