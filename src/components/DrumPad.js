import React, { useEffect } from "react"
import { database1, database2 } from "../DrumMachineDB"
import { useSelector, useDispatch } from "react-redux"
import { dislayKeyDesc, getDatabase } from "../actions"

function DrumKey(props) {

    const handleKeyDown = (event) => {
        if (event.keyCode === props.keyCode) {
            { props.onKeyDown() }
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown)
    })

    return (
        <div 
            id={props.keyDesc.split(" ").join("-")}
            className="drum-pad bg-gray-500 text-white text-center font-bold rounded cursor-pointer gap-2 p-4"
            onClick={props.onClick}
        >
            <audio 
                id={props.keyName}
                className="clip"
                src={props.audioURL} 
                hidden
            />
            <span className="uppercase">{props.keyName}</span>
        </div>
    )
}

function DrumPad() {

    const powerStatus = useSelector(state => state.powerReducer)
    const modeStatus = useSelector(state => state.modeReducer)
    const volumeStatus = useSelector(state => state.volumeReducer) / 100
    const database = useSelector(state => state.databaseReducer)
    
    const dispatch = useDispatch()

    const playAudio = (keyID) => {
        const audio = document.getElementById(keyID)
        if(powerStatus) {
            audio.muted = false
            audio.volume = volumeStatus
            audio.play()
        } else if (!powerStatus) {
            audio.muted = true
        }
    }

    const handler = (keyID, keyDesc) => {
        playAudio(keyID)
        dispatch(dislayKeyDesc(keyDesc))
    }

    useEffect(() => {
        modeStatus === 1 ? dispatch(getDatabase(database1)) : dispatch(getDatabase(database2))
    }, [modeStatus])

    const DrumPadList = () =>
        database.map(e => 
            <DrumKey
                key={ e.code }
                keyName={e.name}
                keyCode={ e.code }
                keyDesc={ e.desc }
                audioURL={ e.url }
                onClick={ () => handler(e.name, e.desc) }
                onKeyDown={ () => handler(e.name, e.desc) }
            />
        )

    return (
        <React.Fragment>
            <div className="grid grid-cols-3 gap-1">
                { DrumPadList() }
            </div>
        </React.Fragment>
    )
}

export default DrumPad