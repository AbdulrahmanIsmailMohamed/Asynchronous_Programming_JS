/**
* *steps to make ice cream by promisse
*/
let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
};

const isShopOpen = true;

// time & work
const order = (time, work) => {
    return new Promise((resolve, reject) => {
        if (isShopOpen) {
            setTimeout(() => {
                resolve(work())
            }, time);
        } else {
            reject(console.log("our shop is closed"));
        }
    })
}
order(2000, () => console.log("the production has started")
).then(() => {
    return order(2000, () => console.log("the fruit has been chopped"))
}).then(() => {
    return order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`))
}).then(() => {
    return order(1000, () => console.log("start the machine"))
}).then(() => {
    return order(2000, () => console.log(`${stocks.holder[1]}`))
}).then(() => {
    return order(3000, () => console.log(`${stocks.toppings[0]} and ${stocks.toppings[1]} from topping`))
}).then(() => {
    return order(2000, () => console.log("serve ice cream"))
}).catch(
    () => console.log("Customar left")
).finally(
    () => console.log("Day end, shop is closed")
)