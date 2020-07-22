// The Password Generator will create a password between 8-128 characters dependant upon the user's specified criteria

// Calling the Generate Password Button to prompt questions once clicked
document.querySelector("#generate").addEventListener("click", writePassword);

// Arrays
var charLower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var charUpper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numb = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?"];

// Declarations
var confirmLength = "";
var confrimLowerCase;
var confirmUpperCase;
var confrimNumber;
var confirmSpecialChar;

// First prompt asking user how many characters they would like to use
function generatePassword() {
  var confirmLength = prompt(
    "How many characters would you like your password to contain?"
  );

  // Creating a loop in case the answer is outside our specified parameters
  while (confirmLength <= 7 >= 129) {
    alert("Password must contain between 8-128 characters. Try Again!");
    var confirmLength = prompt(
      "How many characters would you like your password to contain?"
    );
  }

  // Repeat back how many characters the password will contain
  alert("Your password will contain " + confirmLength + " characters");

  // Determine the parameters of the password

  var confrimLowerCase = confirm(
    "Click OK if you would like to include lowercase characters"
  );
  var confirmUpperCase = confirm(
    "Click OK if you would like to include uppercase characters"
  );
  var confrimNumber = confirm("Click OK if you would like to include numbers");
  var confirmSpecialChar = confirm(
    "Click OK if you would like to include special characters"
  );

  // While loop to make sure answer is not outside password parameters
  while (
    confirmUpperCase === false &&
    confrimLowerCase === false &&
    confrimNumber === false &&
    confirmSpecialChar === false
  ) {
    alert("At least one parameter needs to be selected");
    var confrimLowerCase = confirm(
      "Click OK if you would like to include lowercase characters"
    );
    var confirmUpperCase = confirm(
      "Click OK if you would like to include uppercase characters"
    );
    var confrimNumber = confirm(
      "Click OK if you would like to include numbers"
    );
    var confirmSpecialChar = confirm(
      "Click OK if you would like to include special characters"
    );
  }

  // Creating an action for password parameters

  var passwordChar = [];

  if (confrimLowerCase) {
    passwordChar = passwordChar.concat(charLower);
  }

  if (confirmUpperCase) {
    passwordChar = passwordChar.concat(charUpper);
  }

  if (confirmSpecialChar) {
    passwordChar = passwordChar.concat(specialChar);
  }

  if (confrimNumber) {
    passwordChar = passwordChar.concat(numb);
  }

  console.log(passwordChar);

  // Var created to hold string of random characters selected

  var randomPassword = "";

  for (var i = 0; i < confirmLength; i++) {
    randomPassword =
      randomPassword +
      passwordChar[Math.floor(Math.random() * passwordChar.length)];
  }
  return randomPassword;
}

// Created a function to call writePassword

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
