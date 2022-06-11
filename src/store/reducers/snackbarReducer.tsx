import { AlertColor } from "@mui/material";
import { Reducer } from "redux";
type Action = {
    type: string;
    payload: {
        message: string,
        severity: AlertColor
    }
}
export type SnackBarStateModel = {
    value: boolean;
    message: string;
    severity: AlertColor
}
const initialState: SnackBarStateModel = { value: false, message: "", severity: "success" };

const SnackBarReducer: Reducer<SnackBarStateModel, Action> = (state: SnackBarStateModel = initialState, action) => {
    switch (action.type) {
        case "SHOW_SNACKBAR":
            return {
                value: true,
                message: action.payload.message,
                severity: action.payload.severity
            };
        case "HIDE_SNACKBAR":
            return {
                ...state,
                ...{
                    value: false,
                    severity: "success"
                }
            };
        default:
            return state
    }
}

export default SnackBarReducer;

export interface SnackBarReducerModel {
    snackbar: SnackBarStateModel
}
