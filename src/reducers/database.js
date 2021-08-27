export const databaseReducer = (state = [], action) => {
    switch(action.type) {
        case "getDatabase":
            return action.database
        default:
            return state
    }
}