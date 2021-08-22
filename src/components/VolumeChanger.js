import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { volume } from "../actions"

function VolumeChanger() {

    const volumeStatus = useSelector(state => state.volumeReducer)
    const dispatch = useDispatch()
    const handleChange = (e) => dispatch(volume(e.target.value))
    
    return (
        <div className="volumeChanger">
            <span className="uppercase font-bold">Volume {volumeStatus}</span>
            <input type="range" name="volume" value={volumeStatus} onChange={handleChange} min="0" max="100" step="10" />
        </div>
    )
}

export default VolumeChanger