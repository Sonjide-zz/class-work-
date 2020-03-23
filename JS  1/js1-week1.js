// Exercise (20 minutes)
// In pairs, design and create a function that:
// takes in more than one input
// uses string interrperlation
// performs some form of operation on a number
// uses return to return a string
// Comment your function to explain what it does
// Call your function and run your script
// What's the difference between a return and console.log?
// When would you choose to use functions over the way we have been scripting so far?

// let sharks = 15;
// let sharks = 7;
// let sharks = 8;
// let sharks = 20;
// let whales = 12;

function calculatePercentage(sharks, whales) {
    let totalFish = sharks + whales
    let percOfsharks = sharks / totalFish * 100
    let percOfwhales = whales / totalFish * 100
    let roundedPercOfsharks = Math.round(percOfsharks)
    let roundedPercOfwhales = Math.round(percOfwhales)
    return `Percentage of sharks: ${roundedPercOfsharks}%
Percentage of whales: ${roundedPercOfwhales}%`
}
let mexicanSharks = calculatePercentage(201, 44) // Group B
// let groupA = calculatePercentage(31, 3) // Group A
console.log("There are this many Mexican Fish in the world:" + mexicanSharks)
// console.log(groupA)


//coments from Harris, and Mahmut. 

// strenghts-The code is readeble. they also had comments.
