import React from "react"
import { useSelector } from "react-redux"

function Display() {

    const keyDesc = useSelector(state => state.keyDescReducer)
    
    return (
        <div
            id="display"
            className="flex justify-center items-center bg-white rounded mb-4 p-2 h-24"
        >
            <span className="text-4xl text-center">{keyDesc}</span>
        </div>
    )
}

export default Display