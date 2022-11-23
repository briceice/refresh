function isOdd(number){
    if (typeof number === "number") {
        return number % 2 !== 0;
    }
    return false;
}

function isEven(number){
    if (typeof number === "number") {
        return number % 2 === 0;
    }
    return false;
}

function identity(input){
    if (typeof input === "number") {
        return input;
    }
    return false;
}

function isFive(input){
    if (typeof input === "number") {
        return input === 5;
    }
    return false;
}

function addFive(input){
    if (typeof input === "number") {
        return input + 5;
    }
    return false;
}

function isMultipleOfFive(input){
    if (typeof input === "number") {
        return input % 5 === 0;
    }
    return false;
}

function isMultipleOfThreeAndFive(input){
    if (typeof input === "number") {
        return input % 5 === 0 && input % 3 === 0;
    }
    return false;
}

function isMultipleOf(target, n){
    if (typeof target === "number" && typeof n === "number") {
        return target % n === 0;
    }
    return false;
}

function isTrue(boolean){
    if (typeof boolean === "boolean") {
        return boolean;
    }
    return false;
}

function isFalse(boolean){
    if (typeof boolean === "boolean") {
        return !boolean;
    }
    return false;
}

function isTruthy(input){
    return !!input;
}

function isFalsy(input){
    return !input;

}

function isVowel(letter){
    let input = letter.toLowerCase();
    switch (input) {
        case "a":
            return true;
        case "e":
            return true;
        case "i":
            return true;
        case "o":
            return true;
        case "u":
            return true;
        default:
            return false;
    }
}

function isCapital(letter){
    let input = letter.toUpperCase().trim();
    return letter === input;
}

function isLowerCase(letter){
    let input = letter.toLowerCase().trim();
    return letter === input;
}

function hasLowerCase(string){
    let stringLength = string.length;
    for (let i = 0; i < stringLength; i++) {
        if (isLowerCase(string.charAt(i))){
            return true;
        }
    }
    return false;
}