const prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
let output = "";

const pricesAfterTax = prices.map(price =>{
    const tax = (price * 0.0825).toFixed(2);
    const total = (price + parseFloat(tax)).toFixed(2);
    return parseFloat(total);
});

// console.log(prices);
// console.log(pricesAfterTax);

const desserts = ['sherbet', 'whisky cake', 'cupcake', 'eclair'];

// const eatingDessert = desserts.map(dessert =>`Eating ${dessert}`);
// eatingDessert.forEach(element => {
//     $("div").append(`<p>${element}</p>`);
// })

const cars = [
    {
        make: "Honda",
        model: "Civic",
        mileage: 10428
    },
    {
        make: "Toyota",
        model: "Corolla",
        mileage: 9425
    },
    {
        make: "Ford",
        model: "Mustang",
        mileage: 2567
    },
    {
        make: "Audi",
        model: "A3",
        mileage: 14500
    },
    {
        make: "Mazda",
        model: "3",
        mileage: 11248
    }
];

const mileages = cars.map(car => car.mileage);
// console.log(mileages);

const newObject = cars.map(car => {
    car.newProp = 'new property';
    return car;
})
// console.log(cars[0]);

const under10k = cars.filter(car => car.mileage < 10000);
console.log(under10k[0].mileage);

under10k.forEach(({make, model, mileage})=> {
    output += `<p>I found a ${make} ${model} with ${mileage} miles</p>`;
    console.log(output);
    $("#output").html(output);
    console.log($("#output"));
});



prices.filter(price => price < 10)
    .map(price => {
        const tax = (price * 0.0825).toFixed(2);
        const total = (price + parseFloat(tax)).toFixed(2);
        return parseFloat(total);
    });
        // }).forEach(price => $("div").append(`<p>${price}/</p>`));

const totalCost = prices.reduce(function(total, price){
   return total + price;
});

console.log(totalCost);

let total = prices.reduce(function(total, itemPrice, index){
    console.log(`The index is ${index}, the total is ${total}, the itemPrice is ${itemPrice}`);
    return total + itemPrice;
});
$("#output").append(`<p>The total is ${totalCost}</p>`);
//
// $("div").html("<p>Hello world</p>");
// $("#output").append("<p>Hello world 2</p>");
