var nextOrderId = 1;
const menu = [
    {name: "Marguerita", price: 8},
    {name: "Pepperoni", price: 10},
    {name: "Hawaiian", price: 10},
    {name: "Veggie", price: 9}
];

let cashInRegister = 100;
const orderQueue = [];

function addNewPizza (pizzaObject) {
    if(isInvalidPizza(pizzaObject)) {
        console.log("Data invalid, insert a valid newPizza!")
        return;
    }

    menu.push(pizzaObject)
}

function isInvalidPizza(newPizza) {
    return !newPizza || !newPizza.name || !newPizza.price || typeof newPizza.name  !== 'string' || typeof newPizza.price  !== 'number'
}

function placeOrder(pizzaName) {
    const selectedPizza = menu.find(pizza => pizza.name === pizzaName);

    if(!selectedPizza) {
        console.log("Pizza not found, insert a valid pizza's name!")
        return;
    }

    cashInRegister = cashInRegister +selectedPizza.price;
    const newOrder = {id: nextOrderId++, pizza: selectedPizza, status: "ordered"};
    orderQueue.push(newOrder);
    return newOrder;
}

function completeOrder(orderId){
    const order = orderQueue.find(order => order.id === orderId);

    if(!order) {
        console.log("Pizza order not found, insert a valid pizza's id!")
        return;
    }

    order.status = "completed";
    return order;
}

addNewPizza({name: "Chicken Bacon Ranch", price:12});
addNewPizza({name: "BBQ Chicken", price:12});
addNewPizza({name: "Spice Sausage", price:11});

placeOrder("Chicken Bacon Ranch");
completeOrder(1);

console.log("Menu", menu);
console.log("Cash in register", cashInRegister);
console.log("Order queue", orderQueue);

