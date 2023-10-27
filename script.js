// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


var passwordLength;
var passwordArray = [];
var generatedPassword = "";

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');


// Add event listener to generate button
generateBtn.addEventListener('click', runGenerator);


// Prompt user for password options and store their choice in an array
function getPasswordOptions(message, array) {
  if (confirm(message)) {
    passwordArray = passwordArray.concat(array);
    console.log(passwordArray);
  }
}

// Generate randomized password with user input
function generatePassword(array) {
  for(i = 0; i < passwordLength; i++){
    var random = Math.floor(Math.random() * array.length);
    generatedPassword += array[random].toString();
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatedPassword;
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// RUN GENERATOR FUNCTION
function runGenerator() {

passwordArray = [];
generatedPassword = "";
passwordLength = prompt('How many characters you would like in your password?');

// error handling
if (passwordLength < 8 || passwordLength > 128) {
  alert('Password needs to be between 8 and 128 characters');
  location.reload()
}

// prompt with options
getPasswordOptions('Do you want to include special characters?', specialCharacters);

getPasswordOptions('Do you want to include numeric characters?', numericCharacters);

getPasswordOptions('Do you want to include uppercase characters?', upperCasedCharacters);

getPasswordOptions('Do you want to include lowercase characters?', lowerCasedCharacters);

// password generation and output
if (passwordArray.length < 1) {
  alert('You need to include at least one type of characters');
  location.reload()
} else {
  generatePassword(passwordArray);
  writePassword();
  }
}
// END OF RUN GENERATOR FUNCTION




/* ----------------------------- SUDO CODE ----------------------- */

/*

1. Error handling : Wrong Number
      - if less than 8 or more than 128: prompt with the error message and break
      - else: run the first confirm pop up


CREATE AN EMPTY ARRAY

2. Do you want Lowercase?
      - if yes: add to array
      - if not: ignore

3. Do you want uppercase?
      - if yes: add to array
      - if not: ignore

4. Do you want numeric?
      - if yes: add to array
      - if not: ignore

5. Do you want special characters?
      - if yes: add to array
      - if not: ignore


2. Error handling: Only FALSE in confirm
      - if all confirm are false: break the app
      - else generate password:
            - choose NUMBER of indexes from new array
            - randomize
            - generate

*/


