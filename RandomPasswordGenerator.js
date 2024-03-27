//Arrays
const randomLetters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const randomNumbers = '0123456789';
const randomCharacters = '!@#$%^&*()-_=+[{]}|;:,<.>/?';

//Id's from Html
const letter = document.getElementById("letters");
const numbers = document.getElementById("numbers");
const characters = document.getElementById("characters");
const passwordLength = document.getElementById("passwordLength");
const createPassword = document.getElementById("createPassword");
const result = document.getElementById("result");
const saveToClipBoard = document.getElementById("saveToClipBoard");

function generateRandomPassword(){

    const password = [];

    const passwordLengthValue = passwordLength.value;
    const passwordLengthNumber = Number(passwordLengthValue);

    console.log(typeof passwordLengthNumber);

    if(letter.checked){
        password.push(randomLetters)
    }
    if(numbers.checked){
        password.push(randomNumbers)
    }
    if(characters.checked){
        password.push(randomCharacters)
    }

    console.log(password.join(""));
}


createPassword.onclick = generateRandomPassword;
