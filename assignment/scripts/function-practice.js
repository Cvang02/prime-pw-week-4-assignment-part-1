console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'

function hello() {
  return 'Hello World!'; 
}
console.log('Test - should say "Hello World!"', hello());

// Call the function to test


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'

function helloName(name) {
  return name;
}

console.log ('Hello,', helloName ('Chameng') + "!");
console.log ('Hello,', helloName ('Matt') + "!");

// Remember to call the function to test


// 3. Function to add two numbers together & return the result

function addNumbers( firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

console.log("The result for addNumbers:", addNumbers (10,10));
console.log("The result for addNumbers:", addNumbers (20,20));

// 4. Function to multiply three numbers & return the result

function multiplyThree(num0, num1, num3) {
  return num0 * num1 * num3;
}

console.log("The result for multiplyThree:", multiplyThree (10,10,10));
console.log("The result for multiplyThree:", multiplyThree (20,20,20));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise

function isPositive(number) {
  if (number > 0) {
    return true;
  }
  else {
    return false;
  }
}

console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.

function getLast( array ) {
  if (array.length>0) {
  return array[array.length-1];
  }
  else {
    return undefined;
  }
}
  
// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

function find( value, array ) {
  for (let i=0; i<array.length; i++) {
        if (array[i] === value) {
          return true;
        }
        else {
          return false;
        }
  }
}

console.log ('Test - Is Value in array', find(2,[2,4,6,8]) );
console.log ('Test - Is Value in array', find(1,[2,4,6,8]) );


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise

function isFirstLetter(letter, string) {
  if (letter <= string){
    return true;
  }
  else {
    return false;
  }
}

console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
// TODO: loop to add items

function sumAll(array) {
  let sum = 0
  for (let i=0; i<array.length; i++) {
  sum =+ array [i]
  }
  return sum;
}



// function amountTotal(amount) {
//   var total = 0;
//   for (i = 0; i < amount.length; ++i) {
//        total += amount[i]; // add each element in an array to total
//   }
//   return total;// return sum of elements in array
// }

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

// function arr(inArray) {
//   for (let i=0; i<inArray.length; i++) {
//         if (array[i] === value) {
//           return true;
//         }
//         else {
//           return false;
//         }
//   }
// }

// console.log ('Test - Is Value in array', find(2,[2,4,6,8]) );
// console.log ('Test - Is Value in array', find(1,[2,4,6,8]) );


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// need to finish # 6, 9, 10, 11
