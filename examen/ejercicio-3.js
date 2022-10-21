function sumTwoArrays(array, array2) {
    let sum = 0;

    for (let i = 0; i < array.length + array2.length; i++) {
        if (i < array.length) {
            sum = sum + array[i]
        } else sum = sum + array2[i - array.length]
    }

    return sum
}

// console.log(sumTwoArrays([20, 30], [40, 50]));