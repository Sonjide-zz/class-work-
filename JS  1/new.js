const result = words.filter(findword);
function findword(word) {
  if (word.startsWith("e")) {
    return true;
  } else {
    return false;
  }
}
console.log(result);

13:24
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present"
];

￼
const animals2 = ['ant', 'bison', 'camel', 'elephant'];
const birds = ["duck", "chicken"]
const mixed = animals2.concat(birds)
console.log(mixed);
￼
1



￼

let num = [0, 2, 4, 5, 9];
console.log(num.includes(3));
// returns false

￼let colors = ["red","blue","pink","green","yellow"];
console.log(colors.includes(“red”));
console.log(colors.includes(“purple”)); (edited) 

￼

let arr1 = [4, 2, 8, 1, 9];
let newArr2 = arr1.slice(0, 3);
console.log(newArr2);

￼
let alphabet1 = ["a", "b", "c", "h", "p"];
let x  = alphabet1.slice(1,4);
console.log(x);

￼

let arr22 = ["a", "b", "c", "d", "e", "f", "g"];

var i;
for (i = 0; i < arr22.length; i++) {
  let x = arr22.slice(i, 7);
  console.log(x);
} 

let alphabetSort1 = ["C", "M", "Z", "S", "T", "P", "L"];
alphabetSort1.sort();
console.log(alphabetSort1);

new messages


let sortAlpha = [4, 56,7, 0, 8];

 //sortAlpha.sort();
 sortAlpha.sort(function (a, b) {return b - a});
 //mutator method / modifine arry 

console.log(sortAlpha); (edited) 




￼const listItems = ["butter", "bread", "book"]
const isBreadIncluded = listItems.includes("butter");

console.log(isBreadIncluded)

￼

let name3 = [“Fred”, “Tam”, “Fatima”, “Adam”, “Simon”, “John”, “Elly”];
let hege = [“Cecilie”, “Lone”];
let mixName = name3.concat(hege);
console.log(mixName);

￼

let elements1 = ['I', 'am', 'Harris', 'Sheraz'];
console.log(elements1.join());
// You can expect "I,am,Harris,Sheraz"
console.log(elements1.join(" "));
// You can expact "I am Harris Sheraz"
console.log(elements1.join('-'));
// You can expect "I-am-Harris-Sheraz"