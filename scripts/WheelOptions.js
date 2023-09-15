export const WheelOptions = async () => {
    const response = await fetch("http://localhost:8088/wheels")
    const wheels = await response.json()

    //listens for change to the metals that are clicked
    document.addEventListener("change", handleWheelChange)

        let html = ""
    
    html += '<select id="wheels">'
    html += '<option value="0">Select a wheel package</option>'
    
    // Use .map() to generate new array of strings
    const arrayOfOptions = wheels.map((wheel) => {
        return `<option value="${wheel.id}">${wheel.wheel}</option>`
    }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}


//Handles what happens when different metals are clicked    
const handleWheelChange = (changeEvent) => {
    if (changeEvent.target.name === "wheel") {
        setMetal(parseInt(changeEvent.target.value))
    }
}