import { combineReducers } from "redux"
import { powerReducer } from "./power"
import { modeReducer } from "./mode"
import { volumeReducer } from "./volume"
import { keyDescReducer } from "./keyDesc"
import { databaseReducer } from "./database"

const allReducers = combineReducers({
    powerReducer,
    modeReducer,
    volumeReducer,
    keyDescReducer,
    databaseReducer
})

export default allReducers