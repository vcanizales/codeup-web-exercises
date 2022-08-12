// console.log("Hello from external Javascript!");
//
//
// alert("Welcome to my website!");
// let input = prompt("What is your favorite color?");
// alert("My favorite color is" + " " + input + " " +"too!");
//
// //exercise 3 from prev lesson Data Types, operators, and variables
// let m1 = prompt("How many days did you rent out the Little Mermaid?");
// let m2 = prompt("How many days did you rent out Brother Bear?");
// let m3 = prompt("How many days did you rent out Hercules?");
//
// let totalCost = (m1 * 3) + (m2 * 5) + (m3 * 1);
//
// alert("Your total rental cost is " + totalCost + " dollars.");
//
// // var m1 = 3 * 3;
// // var m2 = 5 * 3;
// // var m3 = 1 * 3;
// //     function totalPay(m1, m2, m3) {
// //         return (m1 + m2 + m3);
// //     }
// //     console.log(totalPay(m1, m2, m3));
//
//
// let fb = prompt("How many hours did you work at Facebook?");
// let g = prompt("How many hours did you work at Google?");
// let a = prompt("How many hours did you work at Amazon?");
//
// let totalPayout = (fb * 350) + (g * 400) + (a * 380);
// alert("Your paycheck for the week is " +totalPayout + " dollars.");

// var fb = 350 * 10;
// var g = 400 * 6;
// var a = 380 * 4;
//     function totalPayOut(fb, g, a) {
//         return (fb + g + a);
//     }
//     console.log(totalPayOut(fb, g, a));

// let classFull = confirm("Is the class full?");
// let ScheduleConflict = confirm("Does this conflict with your schedule?");
// let canEnroll = !classFull && !ScheduleConflict;
//
// if (canEnroll) {
//     alert("You can enroll");
// } else {
//     alert("You can't enroll");
// }

let numberOfItemsBought = prompt("How many items did the customer buy?");
let offerExpired = confirm("Has the offer expired?");
let pM = confirm("Is the customer a premium member?");

let makeProductOffer = (pM || numberOfItemsBought > 2) && !offerExpired;
if(makeProductOffer) {
    alert("You get a product offer!")
} else {
    alert("You're not a premium member.")
}

