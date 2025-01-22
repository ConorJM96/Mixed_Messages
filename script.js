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
    let first = arr1[Math.floor(Math.random() * 12)];
    let second = arr2[Math.floor(Math.random() * 12)];
    let third = arr3[Math.floor(Math.random() * 12)];
    let fourth = arr4[Math.floor(Math.random() * 12)];

    console.log(`${first}...${second} ${third}..${fourth}`);
}

// Test area

mixedMessage(starSign, firstPart, secondPart, colourNumber);





