const toppingsChoice = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log("which topping do yoy like ?"))
        }, 3000);
    })
}

const kitchen = (async () => {
    console.log(" A ");
    console.log(" B ");
    console.log(" C ");
    await toppingsChoice()
    console.log(" D ");
    console.log(" E ");
    console.log(" F ");
})();

console.log("doing the dishes");
console.log("cleaning the tables");
console.log("talking other order");