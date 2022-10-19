// ? #10 = ** Cuenta los estudiantes de un país **

const usersCountry =
    [
        { name: 'Georg', email: 'georg@academlo.com', country_id: 1 },
        { name: 'Andrea', email: 'andrea@gmail.com', country_id: 2 },
        { name: 'Daniela', email: 'daniela@gmail.com', country_id: 2 },
        { name: 'Mónica', email: 'monica@gmail.com', country_id: 2 },
        { name: 'Georg', email: 'georg@academlo.com', country_id: 1 }
    ];

const idCountry =
    [
        { id: 1, name: 'Mexico', },
        { id: 2, name: 'Colombia' }
    ];

function countStudents(students, countries, countryName) {

    let totalStudents = 0;

    for (let i = 0; i < students.length; i++) {
        for (let j = 0; j < countries.length; j++) {
            if (students[i].country_id === countries[j].id && countries[j].name === countryName) {
                totalStudents++
            }
        }
    }

    return totalStudents;
};

// console.log(countStudents(usersCountry, idCountry, "Mexico"));