// ? #13 ** Obtén los usuarios que han enviado su aplicación. **


const app = [
    { name: 'Erik', email: 'erik@academlo.com', channel: 'youtube', application: null },
    {
        name: 'Georg', email: 'georg@gmail.com', channel: 'facebook',
        application: { country: 'Mexico', state: 'Nuevo León' }
    },
    {
        name: 'Daniela', email: 'daniela@gmail.com', channel: 'youtube',
        application: { country: 'Colombia', state: 'Bogotá' }
    }
];

function countApplicationsByChannel(students) {
    let applications = [];
    for (let i = 0; i < students.length; i++) {
        if(students[i].application !== null){
            applications.push({
                name: students[i].name,
                email: students[i].email,
                channel: students[i].channel,
                application: students[i].application
            })
        }
    }
        return applications
    }
    console.log(countApplicationsByChannel(app));


    // ! -------------------------------------------- ! //

    // respuesta esperada
// [
//     { name: 'Georg', email: 'georg@gmail.com', channel: 'facebook', application: { country: 'Mexico', state: 'Nuevo León' }},
//     { name: 'Daniela', email: 'daniela@gmail.com', channel: 'youtube', application: { country: 'Colombia', state: 'Bogotá' }}
// ]