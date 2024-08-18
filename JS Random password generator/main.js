function generatePassword(passwordLength, includeLovwercase, includeUppercase, includeNumbers, includeSymbols){

const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+*="

let allowedChars = "";
let password = "";

allowedChars += includeLovwercase ? lowercaseChars : "";
allowedChars += includeUppercase ? uppercaseChars : "";
allowedChars += includeNumbers ? numberChars : "";
allowedChars += includeSymbols ? symbolChars: "";

if(passwordLength <= 0){
    return "(password length has to be at least 1)";
}
if(allowedChars.length === 0){

    return `(at least 1 set of characters must be selected)`;
}
for(let i = 0; i <passwordLength; i++){

    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
}


return password;

}


const passwordLength = 25;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;


const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);


console.log(`Generated password ${password}`);