import { AlertColor } from "@mui/material"

export const ShowSnackBar = (message: string, severity: AlertColor) => {
    return {
        type: "SHOW_SNACKBAR",
        payload: { message, severity }
    }
}

export const HideSnackBar = () => {
    return {
        type: "HIDE_SNACKBAR",
    }
}