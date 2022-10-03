$.get("/data/murals.json", function (data){
    console.log(data)
});

//Fetch API the vanilla way
// fetch("/data/murals.json").then(function(response){
//     return response.json();
// }).then(function(data){
//     console.log(data);
// });

fetch("data/murals.json").then(resp => resp.json()).then(data => console.log(data));

//Callback: a function passed as an argument to another function; it can run after another function has finished running

// function sayHello(greeting, name){
//     return `${greeting},${name}`;
// }
//
// sayHello("Hello", "Valeria");
//
// function displayOutput(output){
//     $("#output").html(output);
// }

// function greeter(greeting, name, displayFunction){
//     greeting = `${greeting}, ${name}!`;
//     displayFunction(greeting);
// }
//
function displayToOutputDiv(output){
    $("#output").html(output);
}
//
// greeter("Hola", "Valeria", displayToOutputDiv);
//
// // setTimeout( () => greeter("Aloha", "Jason", displayToOutputDiv, 3000));
// setTimeout(function(){
//     greeter("Aloha", "Valeria", displayToOutputDiv), 3000
// });

const greetings = [ "Salutations", "Shoutout", "Hello", "Hullo", "Hail", "Hey", "Hi", "Aloha", "Hola", "Bonjour", "Howdy", "Namaste", "Ohayo", "Ni hao"];
const names = ['David', 'Jay', 'Bianca', 'Laura', 'Kenneth', 'Cody', 'Justin', 'Javier', 'Dane', 'Casey', 'Mark', 'Ry', 'Jordy'];
function generateGreeting(greetingsArray, namesArray, displayFunction){
    let greeting = greetingsArray[Math.floor(Math.random() * greetingsArray.length)];
    const name = namesArray[Math.floor(Math.random() * namesArray.length)];
    greeting = `${greeting}, ${name}!`;
    displayFunction(greeting);
}

// generateGreeting(greetings, names, displayToOutput);
setInterval(generateGreeting, 1000, greetings, names, displayToOutputDiv);

//Callback function
const aPromise = new Promise((resolve, reject)=> {
    setTimeout(()=>{
        if(Math.random() > 0.5){
            resolve("I was fulfilled!");
        } else {
            reject("I was rejected!");
        }
    }, 3000);
});

aPromise.then(value => console.log(value)).catch(error=>console.log(error));
//A fetch call returns a promise
fetch("data/murals.json").then(response => response.json()).then(data => console.log(data));
