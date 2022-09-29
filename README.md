# Random Password Generator

This application generates passwords base on certain condition passed forward to the program.

## Technology Used
 - JavaScript : for backend programming
 - Git : for version control system to track changes to source code
 - GitHub : hosts the repository that can be deployed to GitHub Pages

## Picture of Webpage
![site](./Random-password-genny.gif)

## Deploy Webpage
https://chanjeff520.github.io/random-password-genny/

## Code Snippet
```javascript
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
```
<br>

## Installation

N/A

## Author
- [LinkedIn](https://www.linkedin.com/in/jefflchan/)
- [GitHub](https://github.com/chanjeff520)

## Credits