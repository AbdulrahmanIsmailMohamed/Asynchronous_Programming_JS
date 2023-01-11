/**
* *steps to make ice cream by callback hell  
*/

let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
};

const isShopOpening = true;

const time = (tm) => {
    return new Promise((resolve, reject) => {
        if (isShopOpening) {
            setTimeout(resolve, tm)
        } else {
            reject(console.log("our shop is closed"))
        }
    })
}

const order = (async () => {
    try {
        await time(2000);
        console.log(`${stocks.Fruits[0]}`);

        await time(0000);
        console.log(`strat the production`);

        await time(2000);
        console.log(`cut the fruit`);

        await time(1000);
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

        await time(3000);
        console.log(`ice cream placed on ${stocks.holder[0]}`);

        await time(3000);
        console.log(`${stocks.toppings[0]} was selected`);

        await time(2000);
        console.log(`serve ice cream`);

    } catch (error) {
        console.log("Customer left", error);
    }
    finally {
        console.log("day ended, shop is closed");
    }
})();


