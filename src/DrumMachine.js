import React from "react"
import DrumPad from "./components/DrumPad"
import ModeSwitcher from "./components/ModeSwitcher"
import PowerSwitcher from "./components/PowerSwitcher"
import VolumeChanger from "./components/VolumeChanger"
import Display from "./components/Display"

function DrumMachine() {
    return (
        <div id="drum-machine" className="grid md:grid-cols-12 w-screen p-4">
            <div className="md:col-start-4 md:col-end-10">
                <h1 className="text-2xl text-center font-bold uppercase px-4 py-8">Drum Machine</h1>
            </div>
            <div className="md:col-start-4 md:col-end-10 grid grid-col-2 md:grid-cols-3 gap-2 mb-2">
                <div className="col-span-1 md:col-span-1"><PowerSwitcher /></div>
                <div className="col-span-1 md:col-span-1"><ModeSwitcher /></div>
                <div className="col-span-2 md:col-span-1"><VolumeChanger /></div>
            </div>
            <div className="md:col-start-4 md:col-end-10">
                <Display />
            </div>
            <div className="md:col-start-4 md:col-end-10">
                <DrumPad />
            </div>
        </div>
    )
}

export default DrumMachine