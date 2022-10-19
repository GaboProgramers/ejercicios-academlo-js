// ? #8 = ** Mezclando datos de 2 arreglos **

const arrayMerge = [
    { name: 'Georg', email: 'georg@academlo.com' },
    { name: 'Andrea', email: 'andrea@gmail.com' }
];

const merge = [
    { email: 'georg@academlo.com', attendance: true },
    { email: 'andrea@gmail.com', attendance: false }
];

// function mergeData(users, attendances) {

//     let array = []
    
//     for (let i = 0; i < users.length; i++) {
//           array.push({
//               name: users[i].name,
//               email: users[i].email,
//               attendance: attendances[i].attendance
//           });
//       }
//     return array
// }

// console.log(mergeData(arrayMerge, merge));

function mergeData(users, attendances) {
    const allData = [];
    for (let i = 0; i < users.length; i++) {
        for (let j = 0; j < attendances.length; j++) {
            if (users[i].email === attendances[j].email) {
                allData.push({
                    ...users[i],
                    ...attendances[j]
                })
            }
        }
    }
    return allData;
}

console.log(mergeData(arrayMerge, merge));


// [
//     { name: 'Georg', email: 'georg@academlo.com', attendance: true },
//     { name: 'Andrea', email: 'andrea@gmail.com', attendance: false }
// ]