const texto = "hola Mundaaa";

function repitLetter(text) {
    let mostCommonLetter = '';
    let count = 0;
    let count2 = 0;
    let letter = '';
    let letter2 = '';
    for (let i = 0; i < text.length; i++) {
        count = 0;
        letter = text[i];
        for (let j = 0; j < text.length; j++) {
            if (letter === text[j]) {
                count++;
            }
        }
        if (count > count2) {
            count2 = count;
            mostCommonLetter = letter;
        }
    }
    return mostCommonLetter;
}

// console.log(repitLetter(texto));