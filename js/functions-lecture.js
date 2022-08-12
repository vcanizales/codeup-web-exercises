
//the parts of a function//
/*
 1. function keyword
2. name of the function
3. parenthesis with 0 or more parameters//not all functions need ()
4. if there's more than one parameter, the list is separated by a comma
5. Curly braces contain the function body
6. The function body contains the code that runs when the function is invoked
7.[optional but common] Return statement
 function sayHello(greeting, name) {
     console.log(`${greeting}, ${name}`);
*/

//functions create scope
//this one has local scope//only exists when the function itself is executed

//Local scope
// function localOrGlobal() {
//     let number =20;
// }
// console.log(number;)


//Global scope here
//function declarations
// let number = 20;
//     function localOrGlobal() {
//         let number = 10;
//     console.log(number);
//     anotherNumber = 23;
// }
// localOrGlobal();
// console.log(number);
// console.log(anotherNumber);

//function expressions
//function expressions are not hoisted, so this won't work
// bark();

// const bark = function() {
//     console.log("woof!");
// }
//
// yap();
//
// function yap() {
//     console.log("yip yip");
// }

//function declratation
function add(num1, num2) {
    return num1 + num2;
}

//function expression
// const add = function (num1, num2) {
//     return num1 + num2;
// }

//arrow function is the same as return
const add = (num1, num2) => num1 + num2;
