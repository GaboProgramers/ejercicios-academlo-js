// ? #14 = ** Sumando números pares en un rango **

function sumEvens(start, end) {
    let sum = 0
    for (let i = start + 1; i < end; i++){
        if (i % 2 === 0){
            sum += i
        }
    }
    return sum
}

// console.log(sumEvens(0, 10));