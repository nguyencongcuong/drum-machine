export const mode = () => {
    return {
        type: "mode"
    }
}
export const power = () => {
    return {
        type: "power"
    }
}
export const volume = (volumeLevel) => {
    return {
        type: "volume",
        volumeLevel: volumeLevel
    }
}