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

//variable of all character types
var strSpecial = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var strNumber = "1234567890";
var strLowercase = "abcdefghijklmnopqrstuvwxyz";
var strUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


function generatePassword(){
  //Variable need for this
  var characterCount;
  var isSpecialChar;  //ascii of 33-47, 58-64, 91-96, 123-126 thought about ascii, but not right way
  var isNumChar;      //ascii of 48-57
  var isLowerChar;    //ascii of 97-122
  var isUpperChar;    //ascii of 65-90
  var possibleCharType = "";  //string to storage possible char types
  var password = "";  //This is what we'll be returning

  //prompt the user for the length of the password
  characterCount=prompt("How many characters for your password(must be 8 to 128 characters)?");

  //checks if the password is the password have right amount of characters/letters
  if(characterCount=== null) return ""; //if it is null
  if(characterCount=== "") return "";   // if it is empty
  console.log("Your characterCount value is "+characterCount); //checks in the console how many characters are in the password
  if(characterCount < 8){   
    alert("You need at least 8 characters!!");
    return"";
  }else if(characterCount > 128){
    alert("You have more than 128 characters!!")
    return"";
  }else if(/[a-zA-Z]/.test(characterCount) == true){ //if there is letters inside of characterCount
    alert("You can not have letter in your character count!!!!");
    return"";
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
    return "";
  }

  //adds all character type together depending types of char wanted
  if(isSpecialChar === true) possibleCharType += strSpecial; 
  if(isNumChar === true) possibleCharType += strNumber; 
  if(isLowerChar === true) possibleCharType += strLowercase; 
  if(isUpperChar === true) possibleCharType += strUppercase; 
  console.log("Possible characters: "+possibleCharType);

  //add random characters from within a possibleCharType to password
  var count = 0;
  for(var i = 0; i<characterCount; i++){
    var ranNumber = Math.floor(Math.random() * possibleCharType.length);
    password += possibleCharType[ranNumber];
    count++;
  }

  //log password in the console and on the screen
  alert("Your password: " + password);
  console.log("Your password is " + password);

  return password;
};