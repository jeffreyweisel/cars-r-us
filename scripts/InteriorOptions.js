export const InteriorOptions = async () => {
    const response = await fetch("http://localhost:8088/interiors")
    const interiors = await response.json()

    //listens for change to the metals that are clicked
    document.addEventListener("change", handleInteriorChange)

    let html = ""

    html += '<select id="interior">'
    html += '<option value="0">Select an interior package</option>'

    // Use .map() to generate new array of strings
    const arrayOfOptions = interiors.map((interior) => {
        return `<option value="${interior.id}">${interior.interior}</option>`
    }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}


//Handles what happens when different metals are clicked    
const handleInteriorChange = (changeEvent) => {
    if (changeEvent.target.name === "interior") {
        setMetal(parseInt(changeEvent.target.value))
    }
}