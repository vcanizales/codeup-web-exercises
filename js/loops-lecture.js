// let slices = 4;
// console.log(`There are ${slices} slices`);
// while(slices > 0) {
//     console.log("I'll have a slice");
//     slices = slices -1;
//     console.log(`Now there's ${slices} slices left`);
// }
// console.log("No more pizza.")

// let counter = 100; //this is what we're checking & where we're starting/stop
// while (counter >= 0) { //conditional, what we're checking with the variable
//     console.log(counter);
//     counter--;
// }

// let number = 5;
// while(number < 200) {
//     //number =number * 2;
//     console.log(number);
//     number *= 2;
// }

//Ask user for input -- how much does something cost
//Assign the user input to a variable
//Declare a variable to hold a total cost
//Tell the user what the total is
//Get the user input for the next item's cost
//There needs to be a way for the user to say when there's no more items

// let total = 0;
// let priceOfItem = parseFloat(prompt("Enter the price of your item:"))
// total = total + priceOfItem;
//     alert("Your total is now " + total);
//     let userInput = "";
//     while (userInput !== "stop") {
//         userInput = prompt("Enter the price of your next item: ");
//         if (userInput === "stop") {
//             alert("Your final total is " + total);
//         } else {
//             priceOfItem = parseFloat(userInput);
//             total = total + priceOfItem;
//             alert("Your total is now " + total);
//         }
// }
//
// let total = 0;
// let priceOfItem;
// while(true) {
//     let userInput = prompt("Enter the price of your item: " + "\n Enter STOP when you are done");
//     if (userInput === "STOP") {
//         alert("Your final total is " + total.toFixed(2));
//         break;
//     } else {
//         priceOfItem = parseFloat(userInput);
//         total = total + priceOfItem;
//         alert("Your total is " + total.toFixed(2));
//     }
// }

//While loop exercise on Syllabus
// let i = 2;
// while (i <= 65536) {
//     console.log(i);
//     i = i * 2;
// }

// let number = Math.ceil(Math.random() * 6);
// let guess;
// console.log(guess);
// do {
//     guess = parseInt(prompt("Enter a number between 1 and 6: "));
// } while (guess !== number);
//     alert(`Your guess of ${guess} matches the number ${number}!`);

//Do While exercise
// var allCones = Math.floor(Math.random() * 50) + 50;
// var lessThanFive = Math.floor(Math.random() * 5) + 1;
// var conesLeft = allCones - lessThanFive;
//
// //states cones initially sold
// do {
//     console.log(`${lessThanFive} cones sold`);
//
// }
// while (conesLeft < allCones); {
//     //if the client wants to buy more than 5 cones, they cannot
// //     if (lessThanFive > 5) {
// //         console.log(`Cannot sell you more than 5 cones`);
// //         //store number of cones left
// //         allCones = conesLeft - lessThanFive;
// //     } else if (conesLeft === 0) {
// //         //if all cones are sold
// //         console.log("Yay! I sold them all!");
// //     } else {
// //     }
// // }

//Do While exercise with Prof
// let allCones = Math.floor(Math.random() * 51) + 50;
//
// do {
//     let lessThanFive = Math.floor(Math.random() * 5) + 1;
//     if (lessThanFive > allCones) {
//         console.log(`Cannot sell you ${lessThanFive}. I only have ${allCones}`);
//     } else {
//         console.log(`${lessThanFive} sold...`)
//         allCones = allCones - lessThanFive;
//     }
//         console.log(`${allCones} left`)
// }
// while (allCones > 0);
// console.log("Yay! I sold them all!")

//the loop control variable
//initialize it to a starting value
// let count = 100;
// //check the value of the loop control variable in a conditional test
// while (count >= 0) {
//     console.log(count);
//     //change the value of the loop control variable
//     count = count -1;
// }

//short hand for the while loop is called the for-loop
// for(let i = 100; i >= 0; i--) {
//     console.log(i);
// }

// let i =100;
// while (i < 100) {
//     i++;
//     console.log(i);
// }
// console.log("Outside the loop: " + i);

//BREAKS AND CONTINUE
//you can use both in one loop!

// let string = "";
// for (let i = 0; i < 8; i++) {
//     let word = prompt("Let's make a sentence! Enter a word: ");
//     if (word === "curses") {
//         console.log("That word is not allowed");
//         continue;
//     }
//     string += " " + word;
//     console.log("Your sentence is: " + string);
// }


