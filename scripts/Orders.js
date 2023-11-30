export const Orders = async () => {
  const fetchResponse = await fetch("https://localhost:7105/orders");
  const orders = await fetchResponse.json();
  let ordersHTML = orders.map((order) => {
    const priceFormatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    const formattedPrice = priceFormatter.format(order.totalCost);

    return `<div class="orders"> ${order.id}. ${order.paint.color} car with the ${order.technology.package}, ${order.interior.material} interior, and ${order.wheels.style} wheels costs ${formattedPrice}. <input type="button" class="complete" name="complete" id="${order.id}" value="Complete"></div>`;
  });

  return ordersHTML.join("");
};
