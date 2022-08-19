//Declaring an array literal
//each item in an array is called an element
let groceryList = ['bread','eggs','butter','milk'];
console.log(groceryList); //we can call it
// let myLastItem = groceryList[3]; //we can store it in a variable
// console.log("Don't let me forget " + myLastItem);


//looping over an array: conditional to access last element
// for(let i = 0; i < groceryList.length; i++) {
//     if(i === groceryList.length -1) {
//         console.log("I have to buy " + groceryList[i] + ".");
//     } else {
//         console.log("I have to buy " + groceryList[i] + " and ");
//     }
// }


// let schoolItems = ['journals', 'pencils', 'tissues', 'markers'];
// //console.log(schoolItems[1]);
// for(let i = 0; i < schoolItems.length; i++) {
//     if(i === schoolItems - 1) {
//         console.log("We need to buy " + schoolItems[i] + ".");
//     } else {
//         console.log("We need to buy " + schoolItems[i] + ".");
//     }
// }
//
//
//Looping through arrays
// let beerTypes = ['stout', 'IPA', 'lager', 'doppelbock'];
// for(i = 0; i < beerTypes.length; i++) {
//     if(i % 2 === 1) {
//         console.log("Oh no! We ran out of " + beerTypes[i] + "!");
//     } else {
//         console.log(beerTypes[i]);
//     }
// }

// function outputArray(array) {
//     for (i = 0; i < beerTypes.length; i++) {
//         console.log(array[i]);
//     }
// }
//
// outputArray(beerTypes);

//FOR EACH
//an array method
//you HAVE to add a callback function within the foreach()
//this function is anon, you can use arrow syntax since it is not named
//can have up to 3 parameters
//first parameter within the function always represents the first element of the array
//second parameter represents the index, optional
//third parameter is the array, optional

// let prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
// // // prices.forEach(function(price, index) {
// // //     console.log("item number " + index + " costs " + price);
// // // });
// //
// //
// // prices.forEach(price => {
// //     console.log(price)
// // });
//
// groceryList.push("potatoes", "serranos", "cookies", "ham", "soda");
// console.log(groceryList);
// groceryList.pop();
// console.log(groceryList);
//
// groceryList.unshift("sliced cheddar");
// console.log(groceryList);
// groceryList.shift();
// console.log(groceryList);
//
// let indexOfButter = groceryList.indexOf("butter");
// console.log(indexOfButter);
//
//
// //replaces butter with peanut butter
// //located the element based on index number
// groceryList[indexOfButter] = "peanut butter";
// console.log(groceryList);
//
// groceryList[0] = "avocados";
// console.log(groceryList);
//
//
// //slice it, push to a slice and then concat them back together
// let firstHalfOfGroceryList = groceryList.slice(0, 2);
// console.log(firstHalfOfGroceryList);
// let secondHalfOfGroceryList = groceryList.slice(2);
// console.log(secondHalfOfGroceryList);
//
// firstHalfOfGroceryList.push("butter");
// groceryList = firstHalfOfGroceryList.concat(secondHalfOfGroceryList);
// console.log(groceryList);
//
// groceryList.reverse();
// console.log(groceryList);
//
// groceryList.sort();
// console.log(groceryList);
// console.log(groceryList.reverse());
//
// prices.sort(function(a,b) {
//     return a-b;
// });
// console.log(prices);
//
// groceryList[3] = "Blueberries";
// console.log(groceryList);
// console.log(groceryList.sort());

// groceryList.forEach(item => item.toLowerCase());
// console.log(lowerCase);

// let newList = [];
// //groceryList.forEach(item, index => )
// for(let i = 0; i < groceryList.length; i++) {
//     groceryList[i] = groceryList[i].toLowerCase();
// }
// console.log(groceryList.sort());

// groceryList.forEach((item, index, array_) => {
//     groceryList[index] = item.toLowerCase();
// })
// console.log(groceryList);

let wishList = [25, 15, 34, 8, 59];

function checkWishListPrices(wishList) {
    for (let i = 0; i < wishList.length; i++) {
        if (wishList[i] > 50) {
            return false;
        }
    }
    return true;
}

console.log(checkWishListPrices(wishList));

function checkWishListTotal(wishList) {
    let total = 0;
    for (let i = 0; i < wishList.length; i++){
        total += wishList[i];
    }
    return total <= 100;
}
console.log(checkWishListTotal(wishList));

function processWishList(wishList, testFunction1, testFunction2){
    return testFunction1(wishList) && testFunction2(wishList);
}

console.log(processWishList(wishList, checkWishListPrices, checkWishListTotal));


