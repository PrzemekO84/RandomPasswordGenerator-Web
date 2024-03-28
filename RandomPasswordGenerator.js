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
const saveToClipboard = document.getElementById("saveToClipboard");

//Main Function

<<<<<<< HEAD
function generateRandomPassword(){
    const password = [];

    const passwordLengthNumber = Number(passwordLength.value);

    const charactersArray = createCharArray();
    const joinedCharacters = charactersArray.join("");

    const shuffeldCharacters = shuffle(joinedCharacters.split("")).join("");

    for(let i = 0; i < passwordLengthNumber; i++){
        const randomPosition = Math.floor(Math.random() * shuffeldCharacters.length);
        password.push(shuffeldCharacters[randomPosition]);
    }

    saveToClipboard.style.display = ""
    document.getElementById("footer").style.display = "block";
    result.textContent = `Your password is: ${password.join("")}`
}

//Create Characters Array

function createCharArray(){
    const charactersArray = [];

    if(letter.checked){
        charactersArray.push(randomLetters); 
    }
    if(numbers.checked){
        charactersArray.push(randomNumbers);
    }
    if(characters.checked){
        charactersArray.push(randomCharacters);
    }

    if(charactersArray.length === 0){

        document.getElementById("footer").style.display = "block";
        saveToClipboard.style.display = "none"

        return result.textContent = `Please choose at least one type
        of charcaters for you password`;
    }

    return charactersArray;
}

//Shuffle function

function shuffle(array){
    for(let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i+1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
=======
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
>>>>>>> origin/main
}

createPassword.onclick = generateRandomPassword;
