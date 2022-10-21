// ? #Prueba-Examen = ** Agrupa los animales por su primera letra en un objecto **


const animals1 = ['abeja', 'aguila', 'araña', 'ballena', 'burro', 'cabra', 'cocodrilo', 'conejo', 'castor', 'zorro'];
// const animals2 = ['perro', 'pajaro', 'pulpo', 'gato', 'garrapata', 'pinguino'];
// const animals3 = ['elefante', 'iguana', 'escarabajo', 'erizo', 'impala'];
// const animals4 = ['foca', 'flamenco', 'delfin', 'dragon'];

function arrayToObject(animals) {
    let resul = {};

    animals.forEach(valor => {
        if (resul[valor[0]]) {
            resul[valor[0]].push(valor)
        } else {
            resul[valor[0]] = [valor]
        }
    });

    return resul;
};

console.log(arrayToObject(animals1));