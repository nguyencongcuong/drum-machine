import React from "react"
import { database1, database2 } from "../DrumMachineDB"
import { useSelector } from "react-redux"
import { useState, useEffect } from "react"

function Screen(props) {
    return (
        <div
            id="display"
            className="flex justify-center items-center bg-white font-bold text-center rounded mb-4 p-2 h-24">
            {props.desc}
        </div>
    )
}

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
                controls 
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

    const [keyDesc, setKeyDesc] = useState("")
    const [audioID, setAudioID] = useState("")
    const [database, setDatabase] = useState([])

    const powerStatus = useSelector(state => state.powerReducer)
    const modeStatus = useSelector(state => state.modeReducer)
    const volumeStatus = useSelector(state => state.volumeReducer) / 100

    const playAudio = (id) => {
        const audio = document.getElementById(id)
        if(powerStatus) {
            audio.muted = false
            audio.volume = volumeStatus
            audio.play()
        } else if (!powerStatus) {
            audio.muted = true
        }
    }

    useEffect(() => {
        modeStatus === 1 ? setDatabase(database1) : setDatabase(database2)
    }, [modeStatus])

    const DrumPadList = () => {
        return database.map(e => 
            <DrumKey
                key={ e.name }
                keyCode={ e.keyCode }
                keyName={ e.name } 
                keyDesc={ e.desc }
                audioURL={ e.url }
                onClick={ () => {
                    setKeyDesc(e.desc)
                    playAudio(e.name)
                }}
                onKeyDown={ () => {
                    setKeyDesc(e.desc)
                    setAudioID(e.name)
                    playAudio(e.name)
                }}
            />
        )
    }

    return (
        <React.Fragment>
            <Screen desc={keyDesc} />
            <div className="grid grid-cols-3 gap-1">
                {DrumPadList()}
            </div>
        </React.Fragment>
    )
}

export default DrumPad