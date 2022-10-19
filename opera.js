// let cells = ['A10', 'B10', 'C10', 'D10', 'A23', 'B23', 'C23', 'D23', 'A40', 'B40', 'C40', 'D40'];

// let index = 5;
// let group_col = []
// let mask = {}
// cells.forEach(val => {
//     if (mask[val[0]]) {
//         mask[val[0]] += ('; ' + val)
//     } else {
//         mask[val[0]] = val
//     }
// })

// group_col = Object.values(mask)
// console.log(group_col)

var arrayRespuesta = [
    {
        Nombre: 'Fulano Detal',
        Descripcion: 'Un string explicando a qué se dedica',
        Ciudad: 'CIUDAD 1'
    },
    {
        Nombre: 'Otro Fulano',
        Descripcion: 'String diferente que tambien describe su trabajo',
        Ciudad: 'CIUDAD 1'
    },
    {
        Nombre: 'Tercer Fulano',
        Descripcion: 'Su trabajo en donde sea que este',
        Ciudad: 'CIUDAD 2'
    }
]

//Creamos un nuevo objeto donde vamos a almacenar por ciudades. 
let nuevoObjeto = {}
//Recorremos el arreglo 
arrayRespuesta.forEach(x => {
    //Si la ciudad no existe en nuevoObjeto entonces
    //la creamos e inicializamos el arreglo de profesionales. 
    if (!nuevoObjeto.hasOwnProperty(x.Ciudad)) {
        nuevoObjeto[x.Ciudad] = {
            profesionales: []
        }
    }

    //Agregamos los datos de profesionales. 
    nuevoObjeto[x.Ciudad].profesionales.push({
        nombre: x.Nombre,
        descripcion: x.Descripcion
    })

})


console.log(nuevoObjeto)
