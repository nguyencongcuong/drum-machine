import { combineReducers } from "redux";
import { powerReducer } from "./power";
import { modeReducer } from "./mode";
import { volumeReducer } from "./volume";

const allReducers = combineReducers({
    powerReducer,
    modeReducer,
    volumeReducer
})

export default allReducers