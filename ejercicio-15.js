// ? #15 = ** Encuenta los múltiplos de un número ** 

function getMultiples(number, limit) {
    let multiple = [];
    let mult = 2;
        for (let i = 2; number * mult < limit; i++) {
            multiple.push(number * mult);
            mult++;
        }
    return multiple;
}

console.log(getMultiples(20, 100));