const students = [
  {
    id: 1,
    firstName: 'Katy',
    lastName: 'Fry',
    isDead: false
  },
  {
    id: 2,
    firstName: 'Ben',
    lastName: 'Jarrett',
    isDead: false
  },
  {
    id: 3,
    firstName: 'Casey',
    lastName: 'Walker',
    isDead: false
  },
  {
    id: 4,
    firstName: 'Chie',
    lastName: 'Stroud',
    isDead: false
  },
  {
    id: 5,
    firstName: 'Chris',
    lastName: 'M',
    isDead: false
  },
  {
    id: 6,
    firstName: 'Dani',
    lastName: 'Crosby',
    isDead: false
  },
  {
    id: 7,
    firstName: 'Ellie',
    lastName: 'Walker',
    isDead: false
  },
  {
    id: 8,
    firstName: 'Martin',
    lastName: 'Sisk',
    isDead: false
  },
  {
    id: 9,
    firstName: 'Gabby',
    lastName: 'Tobermann',
    isDead: false
  },
  {
    id: 10,
    firstName: 'Matthew',
    lastName: 'Gonzales',
    isDead: false
  },
  {
    id: 11,
    firstName: 'John',
    lastName: 'Maple',
    isDead: false
  },
  {
    id: 12,
    firstName: 'Holly',
    lastName: 'Parsons',
    isDead: false
  },
  {
    id: 13,
    firstName: 'Hunter',
    lastName: 'Juneau',
    isDead: false
  },
  {
    id: 14,
    firstName: 'Jim',
    lastName: 'Conner',
    isDead: false
  },
  {
    id: 15,
    firstName: 'Jesse',
    lastName: 'Robinson',
    isDead: false
  },
  {
    id: 16,
    firstName: 'Juan',
    lastName: 'Davila',
    isDead: false
  },
  {
    id: 17,
    firstName: 'Lindsey',
    lastName: 'Satterfield',
    isDead: false
  },
  {
    id: 18,
    firstName: 'Mitchell',
    lastName: 'Crumbley',
    isDead: false
  },
  {
    id: 19,
    firstName: 'Nathan',
    lastName: 'Keith',
    isDead: false
  },
  {
    id: 20,
    firstName: 'Rob',
    lastName: 'Cole',
    isDead: false
  },
  {
    id: 21,
    firstName: 'Sara',
    lastName: 'Schoonover',
    isDead: false
  },
  {
    id: 22,
    firstName: 'Sean',
    lastName: 'Rossettie',
    isDead: false
  },
  {
    id: 23,
    firstName: 'Honey - Rae',
    lastName: 'Swan',
    isDead: false
  },
  {
    id: 24,
    firstName: 'Tad',
    lastName: 'Sekeres',
    isDead: false
  }
];

const livingStudents = () => {
  const livingStudentsArr = students.filter((obj) => obj.isDead === false);
  return livingStudentsArr;
};

const dearlyBeloved = () => {
  const deadStudentsArr = students.filter((obj) => obj.isDead === true);
  return deadStudentsArr;
};

const followTheLight = () => {
  const currentLiveStudents = livingStudents();
  const randomStudent = currentLiveStudents[Math.floor(Math.random() * currentLiveStudents.length)];
  students[students.indexOf(randomStudent)].isDead = true;
  return [livingStudents(), dearlyBeloved()];
};

const reset = () => {
  students = students.map((student) => ({ ...student, isDead: false }));
  return [livingStudents(), dearlyBeloved()];
};

export {
  livingStudents, dearlyBeloved,
  followTheLight, reset
};
