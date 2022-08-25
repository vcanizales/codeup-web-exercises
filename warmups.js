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