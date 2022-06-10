
export const ShowSnackBar = (message: string) => {
    return {
        type: "SHOW_SNACKBAR",
        payload: message
    }
}

export const HideSnackBar = () => {
    return {
        type: "HIDE_SNACKBAR",
    }
}