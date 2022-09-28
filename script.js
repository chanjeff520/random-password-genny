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


function generatePassword(){
  //Variable need for this
  var characterCount;
  var isSpecialChar;
  var isNumChar;
  var isLowerChar;
  var isUpperChar;
  var password; //This is what we'll be returning

  //prompt the user for the length of the password
  characterCount=prompt("How many characters for your password(must be 8 to 128 characters)?");

  //checks if the password is the password have right amount of characters
  if(characterCount < 8 || characterCount > 128){
    alert("You need at least 8 characters!!");
    return;
  }else if(characterCount > 1024){
    alert("You have more than 128 characters!!")
    return;
  }

  //ask the user if they want special, number, lowercase, and/or uppercase characters
  isSpecialChar = confirm("Do you want Special Characters?");
  isNumChar = confirm("Do you want number characters");
  isLowerChar = confirm("Do you want lowercase characters");
  isUpperChar = confirm("Do you want uppercase characters");

  //Gives a display in the console for the choices of true and false
  console.log("Special Character = " + isSpecialChar + "\n",  "Number Character = " + isNumChar  +"\n",
    "Lowercase = " + isLowerChar+ "\n", "Uppercase = " + isUpperChar + "\n");

  //checks if the characters boolean are all false
  if((isSpecialChar || isNumChar || isLowerChar || isUpperChar) === (false)){
    alert("You can not selected 'cancel' to all character type!! Please retry.");
  }


  return password;
};