
// 1. Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.
//let votesInteresting = 23;
//let votesMindblowing = 5;

const text = "Lisbon is the capital of Portugal";

votesInteresting = votesInteresting + 1;
console.log(votesInteresting);


let totalUpvotes = votesInteresting + votesMindblowing;
console.log("Upvotes:", totalUpvotes);

let votesFalse = 4;
const isCorrect = votesFalse < totalUpvotes;
console.log("Is correct:", isCorrect);

console.log(parseInt("23.5333cc"));



function calFactAge(year) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - year;
    return age;
}

const age1 = calFactAge(2015);
console.log(age1);


let votesInteresting = 20;
let votesMindblowing = 20;

if(votesInteresting === votesMindblowing) {
    alert("This fact is equally interesting and mindblowing");
} else {
    console.log("Both are equal");
}
