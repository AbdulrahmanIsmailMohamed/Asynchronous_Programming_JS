/**
* *steps to make ice cream by callback hell  
*/

let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
};

let order = (fruitName, call_production) => {
    setTimeout(() => {
        console.log(`${stocks.Fruits[fruitName]} was started`);
        call_production();
    }, 2000);
};

let production = () => {
    setTimeout(() => {
        console.log("Production has started");
        setTimeout(() => {
            console.log("the fruit has been chopped");
            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
                setTimeout(() => {
                    console.log("start the machine");
                    setTimeout(() => {
                        console.log(`${stocks.holder[1]}`);
                        setTimeout(() => {
                            console.log(`${stocks.toppings[0]} and ${stocks.toppings[1]} from topping`);
                            setTimeout(() => {
                                console.log("serve ice cream");
                            }, 2000);
                        }, 3000);
                    }, 2000);
                }, 1000);
            }, 1000);
        }, 2000);
    }, 0000)
}


order(0, production);
