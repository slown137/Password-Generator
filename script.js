// Assignment Code
var generateBtn = document.querySelector("#generate");
var random = ""
var tempPass = ""


function generatePassword() {
  var passLength = prompt("Enter the desired password length");
  
  if (passLength < 8 || passLength > 128) {
    alert("Please choose a number between 8 and 128");
    return generatePassword();
  } else if (isNaN(passLength)) {
    return ("Please choose a number");
  };

  if (passLength => 8 && passLength <= 128) {
    lowerCaseQuestion = confirm("If you need lower case characters, select OK, otherwise select Cancel.")
    upperCaseQuestion = confirm("If you need upper case characters, select OK, otherwise select Cancel.")
    numbersQuestion = confirm("If you need numbers, select OK, otherwise select Cancel.")
    specialCharactersQuestion  = confirm("If you need special characters, select OK, otherwise select Cancel.")

      if (lowerCaseQuestion === false && upperCaseQuestion === false && numbersQuestion === false && specialCharactersQuestion === false) {
        alert("Please choose at least one criteria.")
        return generatePassword();
      }

      if (lowerCaseQuestion === true) {
        alphabetLower = "abcdefghijklmnopqrstuvwxyz";
      } else {
        alphabetLower = ""
      };

      if (upperCaseQuestion === true) {
        alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      } else {
        alphabetUpper = ""
      };

      if (numbersQuestion === true) {
        numbers = "0123456789";
      } else {
        numbers = ""
      };

      if (specialCharactersQuestion === true) {
        specialCharacters = "!@#$%^&*+',-./:;<=>?~\|";
      } else {
        specialCharacters = ""
      };

      random = (alphabetLower + alphabetUpper + numbers + specialCharacters)

      for (let i = 0; i < passLength; ++i) {
          tempPass += random.charAt(Math.floor(Math.random() * random.length));
      }

  };

  return (tempPass);

};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



