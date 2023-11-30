import { setColor } from "./TransientState.js";

export const ColorOptions = async () => {
  const response = await fetch("https://localhost:7105/paintcolors");
  const colors = await response.json();

  //listens for change to the metals that are clicked
  document.addEventListener("change", handleColorChange);

  let html = "";

  html += '<select id="color">';
  html += '<option value="0">Select a paint color</option>';

  // Use .map() to generate new array of strings
  const arrayOfOptions = colors.map((color) => {
    return `<option value="${color.id}">${color.color}</option>`;
  });

  html += arrayOfOptions.join("");
  html += "</select>";
  return html;
};

//Handles what happens when different metals are clicked
const handleColorChange = (changeEvent) => {
  if (changeEvent.target.id === "color") {
    setColor(parseInt(changeEvent.target.value));
  }
};
