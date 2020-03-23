//console.log only prints and can not be assigned to a variable
//An expression returns any value. 
//Sometimes we will say that an expression evaluates to a value.

//https://codeyourfuture.github.io/syllabus-london/js-core-1/week-2/lesson.html

//let sum = 1 + 1; // action: assigns result of `1 + 1` to variable `sum`
//let greeting = "hello"; // action: assigns result of the expression "hello" to variable `greeting`
//console.log(2 * 4); // action: logs the result of `2 * 4` to the console
//sayGreeting(greeting); // action: calls the function `sayGreeting` with the parameter `greeting`
/*In your VS Code terminal, run the command node and run the following expressions. What are their outputs? Is there anything you didn't expect? (To exit the node REPL, you have to click Ctrl+d or Cmd+D on Mac)*/

// function boolChecker(boolean) {
//     if (typeof bool === true) {
//       return "You've given me a bool, thanks!";
//     }
//        return "No bool, not cool.";
//   }
// boolChecker(true)
// console.log(boolChecker)

//strict comparison (===).
// function boolChecker(bool) {                        //create a function, giving a para-meeter
//     if (typeof bool === 'boolean') {                //check the condition
//       return "You've given me a bool, thanks!";
//     }
//     return "No bool, not cool";
// }
// console.log(boolChecker(true))  //boolean
// console.log(boolChecker(false))  //boolean

// console.log(boolChecker("true"))  //string
// console.log(boolChecker("false")) //string

/*the exercise above you used an an expression that returns a boolean value. This was possible because of the comparison operator ===. Using a comparison operator will always return a boolean value.*/
/*
>   greater than
<   less than
<=  less than or equal
>=  greater than or equal
=== same value and same type
!== not the same value and type
*/


/* test driven development - the reason for useful for testing requirements and debugging - assert function
//assert function - test will tell you what line and where


const assert = require("assert")

function add(a, b) {
    assert(typeof a === 'number')
    assert(typeof b === 'number')
    return a + b
}
console.log(add(1, 2)) true
console.log(add("Hello","World")) false
*/

//Modify the values below to so that asserts don't fail.  return the desired value:
// const assert = require('assert')

// const mentorCount = 100;
// const studentCount = 400;
// assert(mentorCount < studentCount);

// const capacity = 25;
// const people = 19;
// assert(capacity > people);

// const name1 = "sonjide";
// const name2 = "sonjide";
// assert(name1 === name2);

// const number1 = 100;
// const number2 = 99;
// assert(number1 !== number2);

// const thisNumber = 13;
// const thatNumber = 13;
// assert(thisNumber === thatNumber);

// const thisArray = [1, 2, 3, 4, 5];
// const thatArray = [1, 2, 3, 4, 5];
// assert(thisArray === thatArray);

// const thisArray = [1, 2, 3, 4, 5];
// const thatArray = thisArray;
// assert(thisArray === thatArray);

// terminal answer 
//> typeof [1, 2, 3, 4, 5]
// 'object'
// > 

// https://codeyourfuture.github.io/syllabus-london/js-core-1/week-2/lesson.html

//explain what this function does line by line? What happens when you pass in a string?


function numberChecker(num) {                   // function checks the parameter num
    if (num > 20) {                             // check number is bigger than 20  then 
      return `${num} is greater than 20`;       // return a string with the number value greater than 20 
    } else if (num === 20) {                    //if number value is strict equal to 20  
      return `${num} is equal to 20`;           // return string value 20 is equal to 20
    } else if (num < 20) {                      // if number value check is less than 20 
      return `${num} is less than 20`;          // then restur a string with a number value less than 20
    } else {                                    // or else check value is not a number than
      return `${num} isn't even a number :(`;   // then return a value saying it isnt a number
    } 
  }



//   Create a function that gives you message depending on your mood! It should:

//   take one input
//   return "Good job, you're doing great!" if you pass in "happy"
//   return "Every cloud has a silver lining" if you pass in "sad"
//   return "Beep beep boop" if you pass in a number
//   return "I'm sorry, I'm still learning about feelings!" if you pass in anything else

// this uses numbers
// function moodChecker(num) {
//     if (num === "happy") {
//       return `${num} Good job, you're doing great!`;
//     } else if (num === "sad") {
//         return `${num} Every cloud has a silver lining`;
//     } else if (typeof num === 'number' ) {   
//       return `${num} Beep beep boop`;
//     } else {
//       return `${num} I'm sorry, I'm still learning about feelings!`;
//   }
// }
// console.log(moodChecker(3))


//this uses strings
// function moodChecker(mood) {
//     if (mood === "happy") {
//       return `${mood} Good job, you're doing great!`;
//     } else if (mood === "sad") {
//         return `${mood} Every cloud has a silver lining`;
//     } else if (typeof mood === 'number' ) {   
//       return `${mood} Beep beep boop`;
//     } else {
//       return `${mood} I'm sorry, I'm still learning about feelings!`;
//   }
// }
// console.log(moodChecker("happy"));   //returns line 142
// console.log(moodChecker("sad"));    //returns line 144
// console.log(moodChecker(100));      //returns line 146
// console.log(moodChecker("100"));    //returns line 148

//Logical Operators - There are three logical operators in JavaScript: || (OR), && (AND), ! (NOT).
// let num = 10;

// function satisfiesRequirements(num) {
//   if (num > 3 && num < 10) {
//     return true;
//   }
//   return false;
// }

// console.log(satisfiesRequirements(19))


// function numberChecker(num) {
//     if (num > 20) {
//       return `${num} is greater than 20`;
//     } else if (num === 20 || num === "20") {
//       return `${num} is equal to 20`;
//     } else if (num < 20 && typeof num === 'number') {
//       return `${num} is less than 20`;
//     } else {
//       return `${num} isn't even a number :(`;
//     }
// }
// console.log(numberChecker(10))
// console.log(numberChecker("10"))
// console.log(numberChecker("20"))


// Exercise (15 mins)
// In pairs, write a function that checks a username is of an acceptable format for a user type. The function must:

// take two parameters: one for the username and one for the user type
// if the username starts with a capital letter and has length between 5 and 10 characters long, it must return "Username valid"; otherwise, it must return "Username invalid"
// BONUS: if the user type is an admin or a manager, all usernames must return "Username valid"

// function checkUsername(username) {
//     let isCaptilised = username.charCodeAt(0) >= 65 && username.charCodeAt(0) <= 90 
//     let isGoodLength = username.length < 10 && username.length > 5 
//     if (isCaptilised && isGoodLength) {
//         return 'Username valid'
//     } else {
//         return 'Username invalid'
//     }
// }

// console.log(checkUsername("sonjide"))


// Exercise (5 mins)
// In the node REPL, enter the following array:

// > let fruits = ['banana', 'apple', 'strawberry', 'kiwi', 'fig', 'orange'];
// Which index do you need to return:

// strawberry
// kiwi
// orange
// banana
// Replace 'apple' with 'raspberry' and 'fig' with 'pineapple'

var arr = [ "strawberry","kiwi", "orange", "banana" ];
  
  // append new value to the array
  arr.push("Hola");
  
  console.log(arr);

// Exercise (10 mins)
// Write a function to remove the duplicate elements of a given array and return the new length of the array. Sample array: [20, 20, 30, 40, 50, 50, 50]
// After removing the duplicate elements the function should return 4 as the new length of the array.

