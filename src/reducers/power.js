export const powerReducer = (state = true, action) => {
    switch (action.type) {
        case "power":
            return !state
        default:
            return state
    }
}