// ? #9 = ** Ordenando estudiantes por calificación **

const ageMinus = 
[
    { name: 'Georg', email: 'georg@academlo.com', score: 100 },
    { name: 'Andrea', email: 'andrea@gmail.com', score: 70 },
    { name: 'Andrés', email: 'andres@gmail.com', score: 34 }
];

function orderStudentsByScore(students) {

    students.sort((a, b) => {
        return a.score - b.score;
    });
    return students
};

// console.log(orderStudentsByScore(ageMinus));