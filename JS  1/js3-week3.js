//https://codeyourfuture.github.io/syllabus-london/js-core-1/week-3/lesson.html

//let scores = [80, 41, 47];// created an array -1st - index array list starts at 0, 1, 2 etc

//scores - below we are re-assinging new values to the array
// scores[2] = 29; // Change the last score
// scores[3] = 51; // Add a new score
// scores.push(["1hdehgdjgasgg"]);// this should find the end of the arrays and add the new information into the array

//console.log(scores.push(["1hdehgdjgasgg"]));

//=========
//let arr = ["name", "tom", "soul", "jon", "adam"];  you can reassign but not use the same varisble name
//const arr = ["name", "tom", "soul", "jon", "adam"]; //const you can not reassign a new variable

//get name

// arr[1] = "sara";

// arr.push('chickens', 'cats', 'dogs')

// console.log(arr.unshift(123456778))


//Some examples of things you might want to do with a list of data
// Only use the first 10 items in a list 
// = something.slice(0, 10)// gives a new array with 10 items
// Get people from a list whose name starts with a M  = something.indexOf("will select any character from the array") something.filter()    
// Find the first person in a list to be over 100 years old =
// Arrange people in a list alphabetically = something.sort(will sort name alphabetically)
// Get the last 10 items in an array = something.sort()
// Add all the numbers up in a list =
// Get all the cats in an array of animals  = 
// From a list of numbers, add a £ sign prefix = concat
// Combine a list of romance films and thrillers


//romancefilms.concat(thrillerFilms); //returns only
// // .join

// let elements = ['Fire', 'Air', 'Water'];

// elements = ["soul", "tom", "ooo", "uuu"];
// console.log(elements.join());
// // expected output: "Fire,Air,Water"

// console.log(elements.join(''));
// // expected output: "FireAirWater"

// console.log(elements.join('-'));
// // expected output: "Fire-Air-Water"

// console.log(elements.join(' & '))

// let num = [0, 2, 4, 5, 9];
// console.log(num.includes(3));
// // returns false

// let colors = ["red","blue","pink","green","yellow"];
// console.log(colors.includes("red"));
// console.log(colors.includes("purple"));

// let bus = [4, 2, 8, 1, 9];
// let newBus = bus.slice(0, 3);
// console.log(newBus);

// let alphabet = ["a", "b", "c", "h", "p"];
// let x  = alphabet.slice(1,4);
// console.log(x);

// let ar = ["a", "b", "c", "d", "e", "f", "g"];
// var i;
// for (i = 0; i < ar.length; i++) {
//   let x = ar.slice(i, 6);
//   console.log(x);
// }

//  //sortAlpha.sort();
//  sortAlpha.sort(function (a, b) {return b - a});
//  //mutator method / modifine arry 
// console.log(sortAlpha);

// const listItems = ["butter", "bread", "book"]
// const isBreadIncluded = listItems.includes("butter");
// console.log(isBreadIncluded)

// let name3 = [“Fred”, “Tam”, “Fatima”, “Adam”, “Simon”, “John”, “Elly”];
// let hege = [“Cecilie”, “Lone”];
// let mixName = name3.concat(hege);
// console.log(mixName);

// let elements = ['I', 'am', 'Harris', 'Sheraz'];
// console.log(elements.join());
// // You can expect "I,am,Harris,Sheraz"
// console.log(elements.join(" "));
// // You can expact "I am Harris Sheraz"
// console.log(elements.join('-'));
// // You can expect "I-am-Harris-Sheraz"


     let newInfo = ['James', 'Pope'].map(lower)
     
     let newInfo4 = ['Soul', 'JS'].map(function(word) {
         return word.toLowerCase()
        }) //functional programming 
  





  function lower(name) {

   let newName = name.toLowerCase();

      return newName
      }

  
  //Upper cases all letters in the array
  //Sorts abracaArray in alphabetical order