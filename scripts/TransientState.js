// Set up the transient state data structure and provide initial values
const transientState = {
    "colorId": 0,
    "technologyId": 0,
    "wheelId": 0,
    "interiorId": 0
}


// Functions to modify each property of transient state
export const setColor = (chosenColor) => {
    transientState.colorId = chosenColor
    console.log(transientState)
}

export const setTechnology = (chosenTechnology) => {
    transientState.technologyId = chosenTechnology
    console.log(transientState)
}

export const setWheel = (chosenWheel) => {
    transientState.wheelId = chosenWheel
    console.log(transientState)
}

export const setInterior = (chosenInterior) => {
    transientState.interiorId = chosenInterior
    console.log(transientState)
}

//Function that converts transient state to permanent state
export const saveCustomCarChoice = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    const response = await fetch("http://localhost:8088/orders", postOptions)

    const customEvent = new CustomEvent("newCustomCarChoiceAdded")
    document.dispatchEvent(customEvent)

}