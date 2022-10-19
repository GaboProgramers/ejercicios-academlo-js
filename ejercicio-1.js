// ? #1 = ** Encuentra la última letra de un string **

const findLetter = "Hola, me llamo Erik";

function findLastLetter(text) {
    return text.split("").slice(-1).join("");
}

// console.log(findLastLetter(findLetter));