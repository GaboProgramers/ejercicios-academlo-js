// ? #12 = ** Encontrando un usario por su nombre **


const users = [
    {
        name: 'Erik',
        gender: 'male',
        age: 22,
    },
    {
        name: 'Daniela',
        gender: 'female',
        age: 22,
    },
    {
        name: 'Gustavo',
        gender: 'male',
        age: 49,
    },
    {
        name: 'María',
        gender: 'female',
        age: 35,
    },
];

function findUser(users, name) {
    return users.find(user => user.name === name);
}
// console.log(findUser(users, "María"))