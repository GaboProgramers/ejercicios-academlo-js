// ? #4 = ** Suma los elementos de un arreglo **

const sumValue = [1, 2, 3];

function sumValues(array) {
    let sum = 0;

    for(let i = 0; i < array.length; i++) {
        sum += array[i]
    }

    return sum;
};

// console.log(sumValues(sumValue));