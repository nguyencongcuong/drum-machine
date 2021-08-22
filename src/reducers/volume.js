export const volumeReducer = (state = 50, action) => {
    switch(action.type) {
        case "volume":
            return action.volumeLevel
        default:
            return state;
    }
}