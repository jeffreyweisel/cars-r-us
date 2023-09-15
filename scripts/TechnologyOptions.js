import { setTechnology } from "./TransientState.js"

export const TechnologyOptions = async () => {
    const response = await fetch("http://localhost:8088/technologies")
    const technologies = await response.json()

    //listens for change to the metals that are clicked
    document.addEventListener("change", handleTechnologyChange)


    let html = ""
    
    html += '<select id="tech">'
    html += '<option value="0">Select a technology package</option>'
    
    // Use .map() to generate new array of strings
    const arrayOfOptions = technologies.map((tech) => {
        return `<option value="${tech.id}">${tech.technology}</option>`
    }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html

}


//Handles what happens when different metals are clicked    
const handleTechnologyChange = (changeEvent) => {
    if (changeEvent.target.name === "technology") {
        setTechnology(parseInt(changeEvent.target.value))
    }
}