// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var password;

function generatePassword(){
  //Variable need for this
  var characterCount;
  var isTrue;

  //prompt the user for the length of the password
  characterCount=prompt("How many characters for your password(must be 8 to 1024 characters)?");

  //checks if the password is the password have right amount of characters
  if(characterCount < 8 || characterCount > 1024){
    alert("You need at least 8 characters!!");
    return;
  }else if(characterCount > 1024){
    alert("You have more than 1024 characters!!")
    return;
  }


};