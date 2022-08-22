//an object has properties(variables)
//you can do anything with a property that you can with variables
//concat strings,

// let currentWeather = {
//     humidity: 77,
//     temp: 82.33,
//     feels_like: 88.79,
//     clouds: 75,
//     description: "cloudy"
// }

//use dot notation
//objects live in a different area of memory, they grow and shrink in unpredictable ways

// console.log(currentWeather.temp);
// console.log(currentWeather.description);
// console.log(currentWeather.feels_like);
//
// console.log(currentWeather["humidity"]);
// let userChoice = "clouds";
// console.log(currentWeather[userChoice]);
// userChoice = "temp";
// console.log(currentWeather[userChoice]);
// // console.log(currentWeather.userChoice); undefined
//
// console.log("The current weather is " + currentWeather.temp);
// if(currentWeather.temp > 95) {
//     console.log("It's kind of hot");
// } else {
//     console.log("It's a cool today for Texas");
// }

//loop through an array using for in loop
// for (let property in currentWeather) {
//     console.log(property + ": " + currentWeather[property]);
// }

//you can declare a variable(property)
//dynamically add new properties to existing objects
// currentWeather.uvIndex = 9.79;
// console.log(currentWeather.uvIndex);
//
// //an array of objects
// //
// let hourlyWeather = [
//     {
//         time: "08:00",
//         temperature: 78.91,
//         feels_like: 78.91
//     },
//     {
//         time: "09:00",
//         temperature: 79.57,
//         feels_like: 79.57
//     },
//     {
//         time: "10:00",
//         temperature: 81.46,
//         feels_like: 86.04
//     },
//     {
//         time: "11:00",
//         temperature: 84.49,
//         feels_like: 89.24
//     }
// ];

//Loop over an array objets
// for(let i = 0; i < hourlyWeather.length; i++) {
//     console.log(`At ${hourlyWeather[i].time} the temperature will be ${hourlyWeather[i].time}`);
// }

//Use a forEach loop with arrow syntax

// hourlyWeather.forEach(forecast =>
//     console.log(`At ${forecast.time} the temperature will be ${forecast.temperature} and feel like ${forecast.feels_like}`)
// );

// hourlyWeather.forEach(function(forecast){
//     console.log(`At ${forecast.time} the temperature will be ${forecast.temperature} and feel like ${forecast.feels_like}`)
// });

//Array of objects where the objects have properties that are objects
//so far we have learned that these properties can be strings, numbers, arrays, functions

// let texasInfo = [
//     {
//         city: "San Antonio",
//         latitude: 29.423017,
//         longitude: -98.48527,
//         timezone: "America/Chicago",
//         currentWeather: {
//             humidity: 77,
//             temp: 82.33,
//             feels_like: 88.79,
//             clouds: 75
//         }
//     },
//     {
//         city: "Houston",
//         latitude: 29.7915,
//         longitude: -95.093,
//         timezone: "America/Chicago",
//         currentWeather: {
//             humidity: 68,
//             temp: 87.44,
//             feels_like: 97.7,
//             clouds: 75
//         }
//     }
// ];
//
// console.log("The temperature in " + texasInfo[1].city + " is " + texasInfo[1].currentWeather.temp);

//A method is a property whose value is a function


// let fighter = {
//     name: "Arata",
//     hitPoints: 18,
//     maxDamage: 8,
//      attack: function(opponent) {
//     console.log(`${opponent.name} has ${opponent.hitPoints} hit points.`);
//           console.log(this.name + " attacks!");
//           let damage = Math.ceil(Math.random() * this.maxDamage);
//           console.log(this.name + " does " + damage + " points of damage!");
//           //also like
//        // console.log(`${this.name} does ${damage} points of damage!`);
//           opponent.hitPoints -= damage;
//           console.log(`${opponent.name} now has ${opponent.hitPoints} hit points.`);
//       }
// }
//
// //fighter.attack();
//
// let monster = {
//     name: "Goblin",
//     hitPoints: 8,
//     maxDamage: 6,
//     attack: function() {
//         console.log(this.name + " attacks!");
//     }
// }
//
// //Let's create a controller object to handle anything players or game objects do that affects the state of the game.. The controller might handle taking user input and calculating the input's effect on the game.
// //
//
// let controller = {
//     attack: function(attacker, defender) {
//         // console.log(`${defender.name} has ${defender.hitPoints} hit points`);
//         // console.log(attacker.name + " attacks!");
//         let defenderHPBeforeAttack = defender.hitPoints;
//         let damage = Math.ceil(Math.random() * attacker.maxDamage);
//         console.log(`${attacker.name} does ${damage} hit points of damage!`);
//         defender.hitPoints -= damage;
//         view.displayAttackResults(attacker, defender, defenderHPBeforeAttack, damage);
//         // console.log(`${defender.name} now has ${defender.hitPoints} hit points`);
//         // console.log("------------------------");
//     }
// }
//
// let view = {
//     displayAttackResults: function(attacker, defender, damage, defenderHPBeforeAttack) {
//         console.log(`${defender.name} has ${defenderHPBeforeAttack} hit points`);
//         console.log(attacker.name + " attacks!");
//         console.log(`${attacker.name} does ${damage} hit points of damage!`);
//         defender.hitPoints -= damage;
//         console.log(`${defender.name} now has ${defenderHPBeforeAttack} hit points`);
//         console.log("------------------------");
//     }
// }
//
// let model = {
//     fighter: {
//         name: "Arata",
//         hitPoints: 18,
//         maxDamage: 8,
//     },
//     monster: {
//         name: "Goblin",
//         hitPoints: 8,
//         maxDamage: 6,
//     }
// }
//
//
// controller.attack(fighter, monster);
// controller.attack(monster, fighter);
//
// // Creating objects
// // define an empty object and create properties dynamically
// let goblin = {};
// goblin.name = "Goblin";
//
// // Create a function that returns objects
//
// function makeMonster(name, hitPoints, maxDamage) {
//     return {
//         name: name,
//         hitPoints: hitPoints,
//         maxDamage: maxDamage,
//     }
// }
//
// // model.hobGoblin = makeMonster("Hobgoblin", 11, 11);
// // controller.attack(model.hobGoblin, model.fighter);
//
// ;//use an object constructor
//
// function Monster(name, hitPoints, maxDamage) {
//     this.name = name;
//     this.hitPoints = hitPoints;
//     this.maxDamage = maxDamage;
// }
//
// model.hobgoblinCaptain = new Monster("Hobgoblin Captain", 39, 14);
// controller.attack(model.hobgoblinCaptain, model.fighter);
//
// // for(let property in model) {
// //     console.log(model[property].name);
// // }

// Object Destructing
const car = {
    make: "Toyota",
    model: "Tacoma",
    year: 2019,
    mileage: 12657
}

// let make = car.make;
// let model = car.model;
//
// console.log(make);
// console.log(model);

const {make, model, year, mileage} = car;
console.log(make);
console.log(model);