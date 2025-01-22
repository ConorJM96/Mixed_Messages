//Initialising strings from txt files
const fs = require('fs');
const StarResult = fs.readFileSync('./txtFiles/StarSigns.txt', 'utf8');
const FirstResult = fs.readFileSync('./txtFiles/MessageFirstPart.txt', 'utf8');
const SecondResult = fs.readFileSync('./txtFiles/MessageSecondPart.txt', 'utf8');
const ColourResult = fs.readFileSync('./txtFiles/MessageColourNumber.txt', 'utf8');

// convert strings to arrays for easy access

const starSign  = StarResult.split('\n');
const firstPart = FirstResult.split('\n');
const secondPart = SecondResult.split('\n');
const colourNumber = ColourResult.split('\n');

// Function to create mixed message

const mixedMessage = (arr1, arr2, arr3, arr4) => {
    let first = arr1[0];
}

// Test area

console.log(starSign.length, firstPart.length, secondPart.length, colourNumber.length);





