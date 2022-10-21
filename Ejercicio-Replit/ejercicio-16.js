// ? #16 = ** Cuenta las veces que se repite una letra **

const repitLetterString = "Hola, me llamo Erik";

function countLetter(phrase, letter) {
    let indices = [];
    for (let i = 0; i < phrase.length; i++) {
        if (phrase[i] === letter) indices.push(i);
    }
    return indices.length;
}


// console.log(countLetter(repitLetterString, "E"));