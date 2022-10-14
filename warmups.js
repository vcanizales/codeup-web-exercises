// let numbers2 = [35,21,87,43,55];
// let sum = 0;
// // My first attempt
// for (let i= 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }
// console.log(sum/numbers.length);

// Javier presenting a for loop for warm-up
//  for (let i= 0; i < numbers.length; i++) {
//     if (numbers === undefined) {
//         return false;
//
//         if(!isNumber(numbers[i])) {
//             return false; }
//     sum += numbers[i];
// }
// return sum/numbers.length;
// }



// My Way
// let sumOfNumbers = numbers2.reduce((previousValue, currentValue) => previousValue + currentValue, sum);
// console.log(sumOfNumbers/numbers2.length);

//another way
// function arrayAverage(numbers) {
//     numbers.forEach(number => {
//         if(!isNumber(number)){
//             return false;
//         }
//         total += number;
//     });
//     return total/numbers.length;
// }
//
//
// let array = ['cup', 'desk','lunchade','pen','backpack','laptop'];
// function getLongestString(strArray) {
//     let longestString= " ";
//     for (let i = 0; i < strArray.length; i++) {
//         if (strArray[i].length > longestString.length) {
//             longestString = strArray[i];
//         }
//     }
//     return longestString;
// };
//
// console.log(getLongestString(array));
//
// //Write a function, calculateTotalStudents, that returns the total number of students recorded in the classes array.
// let classes = [
//     {class: "6th grade history", students: 18},
//     {class: "7th grade history", students: 20},
//     {class: "8th grade history", students: 22}
// ];
//
// // function calculateTotalStudents() {
// //     let sum = classes.reduce((accumulator, object, students) => {
// //         return accumulator + object.students;
// //     }, 0);
// //     console.log(sum);
// // }
//
// function calculateTotalStudents(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i].students;
//         }
//     return sum;
//     }
//
//
// let numericArray = [8, 10, 20];
// function calculateTotal(array) {
//     let total=0;
//     for (let i=0; i < array.length; i++) {
//         total += array[i];
//     }
//     return total;
// }
//
// console.log(calculateTotal(numericArray));

// Write a function called convertToObject that takes in a string that is the name of a class, and a number that is the number of students, and returns an object with the properties `class` and `students`

//convertToObject("Intro to Programming", 20) returns {class: "Intro to Programming", students: 20}

// function convertToObject(string, number) {
//     let temp = convertToObject.split("",number),
//         obj = {};
//     for (let i=0; i<temp.length; i +=2) {
//         obj[temp[i]] = temp[(i+1)];
//     }
//     console.log(obj);
// }

// const convertToObject = function(nameOfClass, numberOfStudents) {
//     return {
//         class: nameOfClass,
//         numberOfStudents: numberOfStudents
//     }
// }

// const convertToObject = (nameOfClass, numberOfStudents) => {
//     return {
//         class: nameOfClass,
//         numberOfStudents: numberOfStudents
//     }
// }
//
// //////////////////////////
// console.log(convertToObject("Intro to Programming", 20));;
//
// let myFunction = convertToObject;
// console.log(myFunction("Intro to React", 6));
//
// //////////////////////////
//
// const neighborhood1 ={
//     neighborhood: "Lovely Estates",
//     medianHomePrice: 280000,
//     pool: true,
//     tennis: false,
//     crimeRate: "low",
//     schools: [
//         {name: "ES1", rating: 8},
// //         {name: "MS2", rating: 6},
// //         {name: "HS3", rating: 8}
// //     ]
// // }
// //
// // const neighborhood2 ={
// //     neighborhood: "Luminous Estates",
// //     medianHomePrice: 270000,
// //     pool: true,
// //     tennis: false,
// //     crimeRate: "low",
// //     schools: [
// //         {name: "ES1", rating: 8},
// //         {name: "MS2", rating: 8},
// //         {name: "HS3", rating: 8}
// //     ]
// // }
// //
// // const neighborhood3 ={
// //     neighborhood: "Ginormous Ego Estates",
// //     medianHomePrice: 350000,
// //     pool: true,
// //     tennis: true,
// //     crimeRate: "low",
// //     schools: [
// //         {name: "ES1", rating: 9},
// //         {name: "MS2", rating: 9},
// //         {name: "HS3", rating: 9}
// //     ]
// // }
//
// // Write a function that takes a neighborhood object and determines if it is desirable. A neighborhood is desirable if the median home price is less than 300000, crime rates are low, and the total rating of schools is at least 24.
//
// // function desirableNeighborhood(neighborhoodsObject) {
// //     let total = 0;
// //     for (let i = 0; i < neighborhoodsObject.schools.length; i++) {
// //         total += neighborhoodsObject.schools[i].rating;
// //     }
// //         return neighborhoodsObject.medianHomePrice < 300000 && neighborhoodsObject.crimeRate === "low" && total >= 24;
// // }
//
// //Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.
// //
// // A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...
// //
// // Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:
// //
// //     your referral bonus, and
// //
// //     the price of a beer can
// //
// // For example:
// //
// // beeramid(1500, 2); // should === 12
// // beeramid(5000, 3); // should === 16
//
// //what's the cost of each level? level*level*priceOfCan
// //need a total cost accumulator variable and some kind of level variable that keeps track of the level we are on
// //need to keep looping until total cost > bonus
//
// // function beeramid(bonus, price) {
// //     let totalCost = 0;
// //     let levels = 0;
// //     while (totalCost < bonus) {
// //         totalCost += levels * levels * price;
// //         if(totalCost + ((levels + 1) ** 2 * price) > bonus) {
// //             break;
// //         }
// //         levels++;
// //     }
// //     return levels;
// // }
// //
// //
// //
// // const attendance = {
// //     miami: 32789,
// //     buffalo: 45678,
// //     portland: 24567,
// // }
// //
// //
// // // Given the attendance object, write a function that returns the total attendance across all teams.
// // // function totalAttendance(attendanceObject) {
// // //     return (miami + buffalo + portland);
// // // }
// //
// // // function totalAttendance(attendanceObject) {
// // //     let attendanceArray = Object.values(attendanceObject);
// // //     let total = 0;
// // //     for(let i=0; i < attendanceArray.length;i++) {
// // //         total += attendanceArray[i];
// // //     }
// // //     return total;
// // // }
// //
// // function totalAttendance(attendanceObject) {
// //     let total = 0;
// //     for (const prop in attendance) {
// //         total += attendance[prop];
// //     }
// //     return total;
// // }
// //
// //
// // // Given the attendance object, write a function that returns the average attendance
// // // function(avgAttendance) {
// // //     return (miami + buffalo + portland)/3;
// // // }
// //
// // function avgAttendance(attendanceObject) {
// //     let total = 0;
// //     for (const prop in attendance) {
// //         total += attendance[prop];
// //     }
// //     return total/Object.keys(attendance).length;
// // }
// //
// //
// // // Given the attendance object, write a function that returns an object with totalAttendance and averageAttendance properties set to the correct values
// //
// // function createObject(attendanceObject) {
// //     let total = 0;
// //     for (const prop in attendance) {
// //         total += attendance[prop];
// //     }
// //     return {
// //         totalAttendance: total,
// //         avgAttendance: total/Object.keys(attendance).length,
// //     }
// // }
//
//
//
// // Convert to Number
// //  * You prepare a list to send to the insurance company. As you finish, you notice you misformatted it.
// //  * Write a function named convertToNumber that takes in an object with at least one key/value pair, convert all the values to numbers.
// //  *
// //  * Examples
// //  *
// //  * convertToNumber({ piano: "200" }) ➞ { piano: 200 }
// //  * convertToNumber({ piano: "200", tv: "300" }) ➞ { piano: 200, tv: 300 }
// //  * convertToNumber({ piano: "200", tv: "300", stereo: "400" }) ➞ { piano: 200, tv: 300, stereo: 400 }
// //  */
//
// /**
//  * Convert Address to Object
//  * Write a function named convertAddressToObject that accepts a string that contains a street number (as a string) and street name separated by a space characters, and returns an object with properties streetNumber and streetName.
//  *
//  * Examples
//  *
//  * >> convertAddressToObject('8646 Sunny Oaks') ➞ {streetNumber: '8646', streetName: 'Sunny Oaks'}
//  * >> convertAddressToObject('5408 Villa Nueva') ➞ {streetNumber: '5408', streetName: 'Villa Nueva'}
//  **/
//
// let address = '8646 Sunny Oaks';
// function convertAddressToObject(addressString){
//     let addressArray = addressString.split(' ');
//     return {
//         streetNUmber: addressArray[0],
//         // streetNumber: address.substring(0,address.indexOf(' ')),
//         streetName: addressString.substring(address.indexOf(' ') + 1),
//     }
// }
//
//
// /**
//  * Count total pets
//  * Write a function named totalPets that accepts an array of objects where each object represents a person, and has a 'pets' property for their owned pets. The function should return the sum of every object's numPets property.
//  *
//  * Examples
//  *
//  * >> totalPets([
//  *       {name: 'Fernando Mendoza', pets: 1},
//  *       {name: 'Douglas Hirsh', pets: 8},
//  *       {name: 'Kenneth Howell', pets: 2}
//  *    ]) ➞ 11
//  */
//
// let peopleAndPets = [
//     {name: 'Fernando Mendoza', pets: 1},
//     {name: 'Douglas Hirsh', pets: 8},
//     {name: 'Kenneth Howell', pets: 2}
// ]
//
// // function totalPets(petsArray){
// //     let total = 0;
// //     for(let i=0; i < petsArray.length; i++){
// //         total += petsArray[i].pets;
// //     }
// //     return total;
// // }
//
// function totalPets(arrayOfObjects){
//     return arrayOfObjects.reduce(function(acc, currentValue){
//         return acc + currentValue.pets;
//     }, 0)
// }
// //2nd Assessment will include: looping over arrays, looping over an array of objects with different values, get totals and averages, converting string to objects within arrays//
// /**
//  * Find the Smallest and Biggest Numbers
//  * Create a function named minMax that takes an array of numbers and return both the minimum and maximum numbers, in that order.
//  *
//  * Examples
//  * >> minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
//  * >> minMax([2334454, 5]) ➞ [5, 2334454]
//  * >> minMax([1]) ➞ [1, 1]
//  *
//  * Notes
//  * All test arrays will have at least one element and are valid.
//  */
//
//
// /**
//  * Filter out Strings from an Array
//  * Create a function named filterArray that takes an array of non-negative integers and strings and return a new array without the strings.
//  *
//  * Examples
//  *
//  * >> filterArray([1, 2, "a", "b"]) ➞ [1, 2]
//  * >> filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]
//  * >> filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]
//  *
//  * Notes
//  * Zero is a non-negative integer.
//  * The given array only has integers and strings.
//  * Numbers in the array should not repeat.
//  * The original order must be maintained.
//  */
//
// // **
// // * Drink Sorting
// // * You will be given an array of drinks, with each drink being an object with two properties: name and price.
// // * Create a function named sortDrinkByPrice that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.
// // *
// // * Assume that the following array of drink objects needs to be sorted:
// //     * drinks = [
// //     *     {name: "lemonade", price: 50},
// // *     {name: "lime", price: 10}
// // * ]
// // *
// // * Examples
// // * >> sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]
// // */
//
//       drinks = [
//           {name: "lemonade", price: 50},
//           {name: "lime", price: 10}
//     ];
//
// drinks.sort(function(a, b){
//     return parseFloat(a.price) - parseFloat(b.price);
// });
//
//
//
// //Refresher on objects
// // let myDog = {};
// // myDog.name = "Fido";
// //
// // let myKey = "name";
// // console.log(myDog);
// // console.log(myDog[myKey])
// //
// // myDog.myKey = "???";
// // console.log(myDog);
// // console.log(myDog.myKey);
//
// //2nd PreAssessment class Review
// function doubleNumber(number) {
//     return number * 2;
// }
//
// function upperCase(string){
//     return string.toUpperCase();
// }
//
// function repeatString(string){
//     return string.concat(' ',string);
// }
//
// const myArray = [1, 2, 3, 4, 5, 6];
//
// //if you add return before array.shift, then it returns the item it removed
// function removeFirstElement(array){
//     array.shift();
// }
// function moveFirstToLast(array){
//     let firstElement = array.shift();
//     array.push(firstElement);
//     return array;
// }
//
//
//       const students = [
//          {
//              id: 1,
//              name: "Jacek",
//              notes: [5, 3, 4, 2, 5, 5]
//            },
//     {
//         id: 2,
//         name: "Ewa",
//         notes: [2, 3, 3, 3, 2, 5]
//     },
//     {
//         id: 3,
//              name: "Zygmunt",
//         notes: [2, 2, 4, 4, 3, 3]
//     }
//     ]
//
//     function getStudentTopNotes(arrayOfStudentObjects){
//         const topNotes = [];
//         arrayOfStudentObjects.forEach(studentObject => {
//             topNotes.push(Math.max(...studentObject.notes));
//         });
//         return topNotes;
//     }
//     //
//     // function getStudentTopNotes(arrayOfStudentObjects){
//     //     let topNotes = [];
//     //     for (let i=0; i < arrayOfStudentObjects.length; i++){
//     //         let topNote = arrayOfStudentObjects[i].notes[0];
//     //         for(let j=0; j < arrayOfStudentObjects[i].notes.length;j++){
//     //             if(arrayOfStudentObjects[i].notes[j] > topNote){
//     //                 topNote = arrayOfStudentObjects[i].notes[j];
//     //             }
//     //         }
//     //         topNotes.push(topNote);
//     //     }
//     //     return topNotes;
//     // }
//
//
//
//     // /**
//     //  * TODO:
//     //  * Remove the Letters ABC
//     //  * Create a function named removeABC that will remove the letters "a", "b" and "c" from the given string and return the modified version. If the given string does not contain "a", "b", or "c", return null.
//     //  *
//     //  * Examples
//     //  * >> removeABC("This might be a bit hard") ➞ "This might e  it hrd"
//     //  * >> removeABC("hello world!") ➞ null
//     //  * >> removeABC("") ➞ null
//     //  *
//     //  * Notes
//     //  * If the given string does not contain "a", "b", or "c", return null.
//     //  */
//
//
// //     Write a function called removeBs that takes in an array of strings and returns an array of strings with all b's removed from each string. Assume the array contains only string elements.
// //
// // Examples...
// //
// // removeBs(['abc', 'ab', 'cat', 'Bay']) // returns ['ac', 'a', 'cat', 'ay']
//
//
//
//
// //
// // Write a function that accepts the top three bowling scores and returns the average.
// //
// //     Write a function that accepts the top three bowling scores and returns the average.
// // 1. write a function
// // 2. pass in parameters
// // 3. 3 scores ( variables)
// // 4. return something (number)
// //
// // let first = 120;
// // let second = 234;
// // let third = 90;
// //
// // Modify the function to accept an array of bowling scores and return the average
// //
// // Write a function that accepts an array of bowling scores and returns the highest
// //
// // Write a function that accepts an array of bowling scores and returns true if the highest score is divisible by 3
//
// // Write a function that accepts a string, breaks down the string into components, and returns an object where each component of the string has become the value of a property
//
// let cityAndState = "San Antonio, Texas";
//
// function cityStateObject(cityAndState){
//     return {
//         city: cityAndState.split(", ")[0],
//         state: cityAndState.split(", ")[1]
//     }
// }
//
// // Write a function that analyzes a string, returning an object that contains several properties with information about the string, example, length, firstLetter, and lastLetter properties//similar to returning the length of a string
//
// function analyzeString(string){
//     return {
//         length: string.length,
//         firstLetter: string.charAt(),
//         lastLetter: string.charAt(string.length - 1)
//     };
// }
//
// // -- Write a function that takes in an array and returns the array modified in some way -- certain elements removed, certain elements modified in a regular way (example, every numerical value doubled, every string uppercased)
// //removes every odd number from an array of numbers
//
// myOtherArray = [0,1,2,3,4,5,6,7,8,9,10];
//
// function removesOdds(array){
//     const newArray = [];
//     for(let i=0; i < array.length;i++){
//         if(array[i] % 2 === 0){
//             newArray.push(array[i]);
//         }
//     }
//     return newArray;
// }
//
// //write a function that takes an array of numeric values and returns an array with all those values doubled
//
// // function doubleNumbers(array){
// //     const newArray = [];
// //     for(let i=0; i < array.length;i++){
// //         if(array[i] % 2 === 0){
// //             newArray.push(array[i] * 2);
// //         }
// //     }
// //     return newArray;
// // }
//
// //*************************************************************//
// // document.querySelector("button").addEventListener('click',(e) =>{
// //     if(e.target.textContent === 'Warmups'){
// //         e.target.textContent = "I own the DOM";
// //     } else {
// //         e.target.textContent = 'Warmups';
// //     }
// // });
//
// // document.querySelector("button").addEventListener("click", (e) => {
// //
// //     (e.target.textContent === 'Warmups') ? e.target.textContent = "I was clicked" : e.target.textContent = "Warmups"
// //
// // });
//
// // $("button").on('click', function(){
// //     console.log("hi").text("I own the DOM");
// // });
//
// document.getElementsByTagName("button")[0].addEventListener('click', function(e){
//     document.getElementsByTagName("h1")[0].innerHTML = "I own the DOM";
// });
//
// $("#source").on('keyup', function(){
//     $("#output").text($("#source").val());
// });
//
// //When the mouse enters the h2 with the text "Lorem Generator", a paragraph containing lorem appears in the div with the id of loremParagraphs
// // function changeText(){
// // var display = document.getElementById("LoremParagraphs");
// // display.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus blanditiis deserunt dolore dolores doloribus earum eius, explicabo inventore maxime molestiae obcaecati odit optio, pariatur quaerat quam reiciendis velit voluptas. Excepturi.";
// // }
// const lorem = "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus blanditiis deserunt dolore dolores doloribus earum eius, explicabo inventore maxime molestiae obcaecati odit optio, pariatur quaerat quam reiciendis velit voluptas. Excepturi.</p>";
// // $("#LoremParagraphs h2").mouseenter(function(){
// //     $("#loremParagraphs").append(lorem);
// // });
//
// $("#LoremParagraphs h2").on('mouseenter', function (){
//     $("#LoremParagraphs").append(lorem);
// });
//
// // When the user clicks on the "Hot Pink It" button, all the text in the div with the id of loremParagraphs becomes hotpink if it's black, or black if it's hotpink.
// // document.getElementById("hotPinkIt").addEventListener('click', function(changeStyle){
// //     element = document.getElementById("LoremParagraphs");
// //     element.style.color = "hot pink";
// // })
// $("#hotPinkIt").on('click', function(){
//     $("#LoremParagraphs").toggleClass('hotpink');
// });
//
// //bonus
// $("#blinkPink").on('click', function(){
//     setInterval(function(){
//         $("#LoremParagraphs").toggleClass('hotpink');
//     }, 3000);
// });

// if(true) {
//     x = 5;
// }
// console.log(typeof x)
//
//
// function sayHello(name){
//     return 'Hello' + name + '!';
}
// const sayHello = (name) => { 'Hello, ' + name + '!' }

console.log("hello")

