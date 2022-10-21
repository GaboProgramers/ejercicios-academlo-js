// #1 = ** Encuenta N cantidad de múltiplos de un número **

function getNMultiples(number, totalMultiples) {
    let multiples = [];
    let i = 2;
    while (multiples.length < totalMultiples) {
        multiples.push(number * i);
        i++;
    }
    return multiples;
}

// console.log(getNMultiples(90, 3));