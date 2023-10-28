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
var specialChar, numericChar, upperChar, lowerChar;
var specialCharIncluded, numericCharIncluded, upperCharIncluded, lowerCharIncluded;

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// clear the password when the page refreshed
document.querySelector('#password').value = "";

// Add event listener to generate button
generateBtn.addEventListener('click', runGenerator);


// Prompt user for password options and store their choice in an array
function getPasswordOptions(message, array) {
  if (confirm(message)) {
    passwordArray = passwordArray.concat(array);
    return true;
  }
}

// Generate randomized password with user input
function generatePassword(array) {
  generatedPassword = "";
  for(i = 0; i < passwordLength; i++){
    var random = Math.floor(Math.random() * array.length);
    generatedPassword += array[random].toString();
  }

  specialCharIncluded = includeAllRequiredCharacters(specialChar, specialCharacters);
  numericCharIncluded = includeAllRequiredCharacters(numericChar, numericCharacters);
  upperCharIncluded = includeAllRequiredCharacters(upperChar, upperCasedCharacters);
  lowerCharIncluded = includeAllRequiredCharacters(lowerChar, lowerCasedCharacters);

  if (!specialCharIncluded || !numericCharIncluded || !upperCharIncluded || !lowerCharIncluded){
    generatePassword(array);
  }
}

// verify if at least one character of selected is used
function includeAllRequiredCharacters(type, array) {
  return !type || array.some(item => generatedPassword.includes(item));
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
  passwordLength = prompt('Choose the length of your password: (8 to 128 characters)');

  // error handling
  if(!passwordLength) {
    location.reload();
    return;
  } else if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert('Your password must be between 8 and 128 characters in length.');
    location.reload();
    return;
  } 

  // prompt with options
  specialChar = getPasswordOptions('Would you like to include special characters?', specialCharacters);
  numericChar = getPasswordOptions('Would you like to include numeric characters?', numericCharacters);
  upperChar = getPasswordOptions('Would you like to include uppercase characters?', upperCasedCharacters);
  lowerChar = getPasswordOptions('Would you like to include lowercase characters?', lowerCasedCharacters);

  // password generation and output
  if (passwordArray.length < 1) {
    alert('Ensure your password includes at least one character type.');
    location.reload()
    return;
  } else {
    generatePassword(passwordArray);
    writePassword();
    }
}