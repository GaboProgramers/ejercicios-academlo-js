// ? #7 = ** Elimina un usuario del arreglo **

const deleteEmails = [
    { name: 'Erik', email: 'erik@academlo.com' }, 
    { name: 'Georg', email: 'georg@academlo.com' }, 
    { name: 'Andrea', email: 'andrea@gmail.com' }
];


// function deleteUser(users, email) {
//     const deleteEmail = email;
    
//     const index = users.findIndex(x => x.email === deleteEmail);
    
//     users.splice(index, 1);
    
//     return users;
// }

function deleteUser(users, email) {
    const deleteEmail = 'erik@academlo.com';

    const index = users.findIndex(x => x.email === deleteEmail);

    users.splice(index, 1);

    return users;
}

console.log(deleteUser(deleteEmails));