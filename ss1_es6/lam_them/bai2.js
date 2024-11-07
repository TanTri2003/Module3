const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    gender: 'male',
    occupation: 'developer',
    nationality: 'American',
    city: 'New York',
    hobbies: ['reading', 'traveling', 'photography'],
    languages: ['English', 'Spanish'],
    education: {
        degree: 'Bachelor',
        major: 'Computer Science',
        university: 'Harvard University'
    }
};

const {firstName,gender,education:{degree},languages} = person;
const students = {
    firstName,
    gender,
    degree,
    languages:languages.filter(a => a === 'English')
}
console.log(students);
