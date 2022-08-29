let numbers = [1,2,3,4,5];
let numbers2 = [35,21,87,43,55];
let sum = 0;
// My first attempt
for (let i= 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum/numbers.length);

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
function arrayAverage(numbers) {
    numbers.forEach(number => {
        if(!isNumber(number)){
            return false;
        }
        total += number;
    });
    return total/numbers.length;
}


let array = ['cup', 'desk','lunchade','pen','backpack','laptop'];
function getLongestString(strArray) {
    let longestString= " ";
    for (let i = 0; i < strArray.length; i++) {
        if (strArray[i].length > longestString.length) {
            longestString = strArray[i];
        }
    }
    return longestString;
};

console.log(getLongestString(array));

//Write a function, calculateTotalStudents, that returns the total number of students recorded in the classes array.
let classes = [
    {class: "6th grade history", students: 18},
    {class: "7th grade history", students: 20},
    {class: "8th grade history", students: 22}
];

// function calculateTotalStudents() {
//     let sum = classes.reduce((accumulator, object, students) => {
//         return accumulator + object.students;
//     }, 0);
//     console.log(sum);
// }

function calculateTotalStudents(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i].students;
        }
    return sum;
    }


let numericArray = [8, 10, 20];
function calculateTotal(array) {
    let total=0;
    for (let i=0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}

console.log(calculateTotal(numericArray));

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

const convertToObject = (nameOfClass, numberOfStudents) => {
    return {
        class: nameOfClass,
        numberOfStudents: numberOfStudents
    }
}

//////////////////////////
console.log(convertToObject("Intro to Programming", 20));;

let myFunction = convertToObject;
console.log(myFunction("Intro to React", 6));

//////////////////////////

const neighborhood1 ={
    neighborhood: "Lovely Estates",
    medianHomePrice: 280000,
    pool: true,
    tennis: false,
    crimeRate: "low",
    schools: [
        {name: "ES1", rating: 8},
        {name: "MS2", rating: 6},
        {name: "HS3", rating: 8}
    ]
}

const neighborhood2 ={
    neighborhood: "Luminous Estates",
    medianHomePrice: 270000,
    pool: true,
    tennis: false,
    crimeRate: "low",
    schools: [
        {name: "ES1", rating: 8},
        {name: "MS2", rating: 8},
        {name: "HS3", rating: 8}
    ]
}

const neighborhood3 ={
    neighborhood: "Ginormous Ego Estates",
    medianHomePrice: 350000,
    pool: true,
    tennis: true,
    crimeRate: "low",
    schools: [
        {name: "ES1", rating: 9},
        {name: "MS2", rating: 9},
        {name: "HS3", rating: 9}
    ]
}

// Write a function that takes a neighborhood object and determines if it is desirable. A neighborhood is desirable if the median home price is less than 300000, crime rates are low, and the total rating of schools is at least 24.

function desirableNeighborhood(neighborhoodsObject) {
    let total = 0;
    for (let i = 0; i < neighborhoodsObject.schools.length; i++) {
        total += neighborhoodsObject.schools[i].rating;
    }
        return neighborhoodsObject.medianHomePrice < 300000 && neighborhoodsObject.crimeRate === "low" && total >= 24;
}

//Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.
//
// A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...
//
// Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:
//
//     your referral bonus, and
//
//     the price of a beer can
//
// For example:
//
// beeramid(1500, 2); // should === 12
// beeramid(5000, 3); // should === 16

//what's the cost of each level? level*level*priceOfCan
//need a total cost accumulator variable and some kind of level variable that keeps track of the level we are on
//need to keep looping until total cost > bonus

function beeramid(bonus, price) {
    let totalCost = 0;
    let levels = 0;
    while (totalCost < bonus) {
        totalCost += levels * levels * price;
        if(totalCost + ((levels + 1) ** 2 * price) > bonus) {
            break;
        }
        levels++;
    }
    return levels;
}