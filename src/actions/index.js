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

export const dislayKeyDesc = (description) => {
    return {
        type: "dislayKeyDesc",
        description: description
    }
}

export const getDatabase = (database) => {
    return {
        type: "getDatabase",
        database: database
    }
}