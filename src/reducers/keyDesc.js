export const keyDescReducer = (state = "", action) => {
    switch(action.type) {
        case "dislayKeyDesc":
            return action.description
        default:
            return state
    }
}