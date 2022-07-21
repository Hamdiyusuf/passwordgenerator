 // Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
var passwordLength = prompt("What is the length of your password?")
console.log(passwordLength)
if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
  window.alert('Must be greater than 8 and less than 128')
} 
var uppercaseChoice = confirm("Would you like capital letters?")
console.log(uppercaseChoice)
var lowercaseChoice = confirm("Would you like lower case letters?")
console.log(lowercaseChoice)
var numericChoice = confirm("Would you like numerals?")
console.log(numericChoice)
var specialCharacters = confirm("Would you like special characters?")
console.log(specialCharacters)

if (!uppercaseChoice && !lowercaseChoice && !numericChoice && !specialCharacters){
  return "Please choose an option"
}


var password = ""
var index = 0;
while(index < passwordLength) {
  if(index<passwordLength && uppercaseChoice) {
    password += getRandomUpper()
    index++;
  }
  if(index<passwordLength && lowercaseChoice) {
    password += getRandomLower()
    index++;
  }
  if(index<passwordLength && numericChoice){
    password += getRandomNumber()
    index++;
  }
 if(index<passwordLength && specialCharacters){
  password += getRandomSymbol() 
  index++;
 }
 console.log(password)
  
}
return password
} 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(getRandomUpper())

function getRandomUpper() {
  return String.fromCharCode (Math.floor(Math.random() * 26) +65);
}
console.log(getRandomUpper)

function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
console.log(getRandomNumber)

 function getRandomSymbol(){
var symbol = "£$%^&*@()<>/.";
return symbol(Math.random(Math.random() * symbol.length))
console.log(getRandomSymbol);
}
console.log(getRandomSymbol)
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
