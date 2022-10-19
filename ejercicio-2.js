// ? #2 = ** Encuentra la última palabra de un string **

const findWord = "Hola, me llamo Erik";

function findLastWord(text) {
    return text.split(" ")[text.split(" ").length - 1];
}

// console.log(findLastWord(findWord));