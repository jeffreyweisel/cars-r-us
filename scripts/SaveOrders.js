import { saveCustomCarChoice } from "./TransientState.js"

//What happens when the save submission button is clicked, similar to end of book 3
const handleSaveOrderClick = (clickEvent) => {
    if(clickEvent.target.id === "savePackage") {
        saveCustomCarChoice()
    }
}

export const saveCustomPackage = () => {
    document.addEventListener("click", handleSaveOrderClick)

    return "<div><button id='savePackage'>Save Order</button></div>"
}