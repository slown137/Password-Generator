// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = "!@#$%^&*+',-./:;<=>?~\|";
var alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var alphabetLower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passLength = prompt("Enter the desired password length");
  
  if (passLength < 8 || passLength > 128) {
    alert("Please choose a number between 8 and 128");
    return generatePassword();
  } else if (isNaN(passLength)) {
    return ("Please choose a number");
  };

  if (passLength => 8 && passLength <= 128) {
    
  }

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



