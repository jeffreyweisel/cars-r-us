//Generate html for each new order that is created after save button is pressed
export const Orders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=color&_expand=interior&_expand=technology&_expand=wheel")  //have to access the fully expanded orders to get price property for each object
    const orders = await fetchResponse.json()
    let ordersHTML = orders.map(
        (order) => {
            
            const orderPrice = order.wheel.price + order.technology.price + order.interior.price + order.color.price
            //Converts total price to U.S. dollars format
            const formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
              });
              
              const formattedPrice = formatter.format(orderPrice)


            return `<div class="orders"> A ${order.color.color} car with the ${order.technology.technology}, ${order.interior.interior} interior, and ${order.wheel.wheel} wheels costs ${formattedPrice}</div>`
        }
        )

    return ordersHTML
}