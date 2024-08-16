const menu = [
    {name: "Marguerita", price: 8},
    {name: "Pepperoni", price: 10},
    {name: "Hawaiian", price: 10},
    {name: "Veggie", price: 9}
];

const cashInRegister = 100;
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

    cashInRegister += price;
    const newOrder = {pizza: selectedPizza, status: "ordered"};
    orderQueue.push(newOrder);
    return newOrder;
}

