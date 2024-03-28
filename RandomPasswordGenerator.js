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

//Shuffle function

function shuffle(array){
    for(let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i+1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function generateRandomPassword(){

    const charactersArray = [];
    const password = [];

    const passwordLengthNumber = Number(passwordLength.value);

    console.log(passwordLengthNumber);

    if(letter.checked){
        charactersArray.push(...randomLetters.split('')); // Split string into array of characters
    }
    if(numbers.checked){
        charactersArray.push(...randomNumbers.split(''));
    }
    if(characters.checked){
        charactersArray.push(...randomCharacters.split(''));
    }

    const joinedCharacters = charactersArray.join("");

    console.log(joinedCharacters);

    const shuffeldCharacters = shuffle(joinedCharacters.split("")).join("");

    console.log(shuffeldCharacters);
}

createPassword.onclick = generateRandomPassword;
