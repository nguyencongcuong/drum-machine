import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { mode } from "../actions"
import { FiToggleLeft, FiToggleRight } from "react-icons/fi"

function ToggleButton(props) {
    const modeStatus = useSelector(state => state.modeReducer)
    return (
        <div
            onClick={props.onClick}>
            {
                modeStatus === 1 ?
                <div className="text-gray-600"><FiToggleLeft size="30px" /></div> :
                <div className="text-gray-600"><FiToggleRight size="30px" /></div>
            }
        </div>
    )
}

function ModeSwitcher() {
    const dispatch = useDispatch()
    return (
        <div className="modeSwitcher">
            <span className="uppercase font-bold">Mode</span>
            <ToggleButton onClick={() => dispatch(mode())} />
        </div>
    )
}

export default ModeSwitcher