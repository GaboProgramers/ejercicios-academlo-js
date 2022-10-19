// ? #11 = ** Encuentra la edad que más se repite **

const repitAge = 
[
    { name: 'Daniela', age: 25 },
    { name: 'Andrea', age: 23 },
    { name: 'José', age: 27 },
    { name: 'Georg', age: 23 },
];

function findMostCommonAge(students) {
    let arr;
    for (let i = 0; i < students.length; i++) {
      for (let j = i + 1; j < students.length; j++) {
        if (students[i].age === students[j].age) {
          arr = students[j].age
        }
      }
    }
  
    return arr;
  }

// console.log(findMostCommonAge(repitAge));