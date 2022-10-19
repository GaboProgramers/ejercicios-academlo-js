// ? #17 = ** Cuenta las aplicaciones por canal **

const appByChannels =
    [
        { name: 'Andrea', email: 'andrea@gmail.com', channel: 'youtube', application: null },
        {
            name: 'Daniela', email: 'daniela@gmail.com', channel: 'youtube',
            application: { country: 'Colombia', state: 'Bogotá' }
        },
        {
            name: 'Alondra', email: 'alondra@gmail.com', channel: 'twitter',
            application: { country: 'Colombia', state: 'Bogotá' }
        },
        {
            name: 'Luis', email: 'luisa@gmail.com', channel: 'twitter',
            application: { country: 'México', state: 'Nuevo León' }
        }
    ];

function countApplicationsByChannel(students) {

    let applications = {};
    for (let i = 0; i < students.length; i++) {
        if (students[i].application !== null) {
            if (applications[students[i].channel]) {
                applications[students[i].channel] += 1;
            } else {
                applications[students[i].channel] = 1;
            }
        }
    }
    return applications;
}

console.log(countApplicationsByChannel(appByChannels));