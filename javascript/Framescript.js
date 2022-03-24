
console.log("Framework ok")



//---------funzione colore random su oggetto html 1a versione------------//

function setColor(htmlElementone) {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    htmlElementone.style.backgroundColor = "#" + randomColor;
};

//---------funzione colore random su oggetto html 2a versione------------//

function generateRandomColor() {
    let color = '#';
    const availableValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * availableValues.length);
        color += availableValues[randomIndex];
    }
    // console.log(color);
    return color;
}

//----------funzione genera array con numeri casuali---------//

function createRandomNumberArray(arrayLength) {
    const resultArray = [];
    for (let i = 0; i < arrayLength; i++) {
        const random = generateRandomNumber(0, 100);
        resultArray.push(random);
    }
    return resultArray;
}

//----------funzione genera numero casuale---------//

function generateRandomNumber(min, max) {
    const range = max - min + 1;
    const generatedNumber = Math.floor(Math.random() * range) + min;
    return generatedNumber;
}

//----------funzione genera numero casuale univoco---------//

function generateUniqueRandomNumber(arrayLength) {
    const uniqueNumbers = [];

    while (uniqueNumbers.length < arrayLength) {
        const number = generateRandomNumber(1, 100);
        if (!uniqueNumbers.includes(number)) {
            uniqueNumbers.push(number);
        }
    }
    return uniqueNumbers;
}

//----------funzione controllo numero pari o dispari---------//

function isEvenOrOdd(num) {
    if (num % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}

//----------controllo input testo---------//

function askUserAText(message) {

    let valid = false;
    let userInput;
    while (valid === false) {
        userInput = prompt(message);
        if (!isNaN(userInput) === false) {
            valid = true;
        }
    }
    return userInput;
}

//----------controllo input numero---------//

function askUserANumber(message) {

    let valid = false;
    let userInput;
    while (valid === false) {
        userInput = parseInt(prompt(message));
        if (isNaN(userInput) === false) {
            valid = true;
        }
    }
    return userInput;
}

//----------controllo input numeri in array---------//

function askNumbers(numbersToAsk) {
    const userNumbers = [];
    let number;
    for (let i = 0; i < numbersToAsk; i++) {
        do {
            number = parseInt(prompt('Che numero hai visto?'));
        } while (isNaN(number));
        userNumbers.push(number);
    }
    return userNumbers;
}

//----------inverto una stringa  casa ===> asac---------//

function inverser(x) {
    var newString = "";
    var index = (x.length - 1);

    for (var i = index; i >= 0; i--) {
        newString += x[i];
    }
    return (newString);
}

//----------pushare gli elementi di due array in uno alternativamente---------//

function alternatePush(arr1, arr2) {
    let myArray = [];
    for (let i = 0; i < arr2.length; i++) {
        myArray.push(arr1[i]);
        myArray.push(arr2[i]);
    }
    return myArray;
}