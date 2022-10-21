// ? #6 = ** Obtén los correos de todos los usuarios **

const usersEmail = 
[
    { name: "Erik", email: "erik@academlo.com", age: 20 },
    { name: "Georg", email: "georg@academlo.com", age: 30 },
    { name: "Daniel", email: "daniel@academlo.com", age: 40 }
];

function getEmails(users) {
    const emailUsers = [];

    for (let i = 0; i < users.length; i++) {
        emailUsers.push(users[i].email);
    }

    return emailUsers;
}

// console.log(getEmails(usersEmail));