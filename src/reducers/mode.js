export const modeReducer = (state = 1, action) => {
    switch(action.type) {
        case "mode":
            return (state === 1) ? 2 : 1
        default:
            return state
    }
}