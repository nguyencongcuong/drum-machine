import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { power } from "../actions"
import { BsToggleOn, BsToggleOff } from "react-icons/bs"

function ToggleButton(props) {
    const powerStatus = useSelector(state => state.powerReducer)
    return (
        <div
            onClick={props.onClick}>
            { 
                powerStatus ? 
                <div className="text-gray-600"><BsToggleOn size="30px" /></div> : 
                <div className="text-gray-600"><BsToggleOff size="30px" /></div>
            }
        </div>
    )
}

function PowerSwitcher() {
    const dispatch = useDispatch()
    return (
        <div className="powerSwitcher">
            <span className="uppercase font-bold">Power</span>
            <ToggleButton onClick={() => dispatch(power())} />
        </div>
        
    )
}

export default PowerSwitcher