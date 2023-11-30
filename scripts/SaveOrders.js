import { saveCustomCarChoice } from "./TransientState.js";

//What happens when the save submission button is clicked
const handleSaveOrderClick = (clickEvent) => {
  if (clickEvent.target.id === "savePackage") {
    saveCustomCarChoice();
  }
};

export const saveCustomPackage = async () => {
  document.addEventListener("click", await handleSaveOrderClick);

  return "<div><button id='savePackage'>Save Order</button></div>";
};
