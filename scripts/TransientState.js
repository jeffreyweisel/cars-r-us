// Set up the transient state data structure and provide initial values
const transientState = {
  paintId: 0,
  technologyId: 0,
  wheelId: 0,
  interiorId: 0,
};

// Functions to modify each property of transient state
export const setColor = (chosenColor) => {
  transientState.paintId = chosenColor;
  console.log(transientState);
};

export const setTechnology = (chosenTechnology) => {
  transientState.technologyId = chosenTechnology;
  console.log(transientState);
};

export const setWheel = (chosenWheel) => {
  transientState.wheelId = chosenWheel;
  console.log(transientState);
};

export const setInterior = (chosenInterior) => {
  transientState.interiorId = chosenInterior;
  console.log(transientState);
};

//Functions that convert transient state to permanent state
export const saveCustomCarChoice = async () => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transientState),
  };

  const response = await fetch("https://localhost:7105/orders", postOptions);
  //create new custom event after response is received
  //dispatches custom event created on document object
  const customEvent = new CustomEvent("stateChange");
  document.dispatchEvent(customEvent);
};

export const completeOrder = async (orderId) => {
  await fetch(`https://localhost:7105/orders/${orderId}/fulfill`, {
    method: "POST",
  });
  document.dispatchEvent(new CustomEvent("stateChange"));
};
