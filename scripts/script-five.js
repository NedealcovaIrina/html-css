//Task 1
const fruits = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
    console.log('Task 1:',fruits[i]);
}

//Task 2
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let index = 0; index < numbers.length; index++) {
    sum += numbers[index];
}
console.log('Task 2:',sum);

//Task 3
const names = ['John', 'Jane', 'Mikhael', 'Jennifer', 'Bobby'];
const nameLengths = [];
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length); 
}
console.log('Task 3:',nameLengths);

//Task 4
const department = [
['Anna','Jane','Nick'],
['Liza','Mary'], 
['Rene','Patrick','Tony','Bob'],
['Frank','Dan','Polly'],
];
const departmentNew = [];
for (let i = 0; i < department.length; i++) {
    for (let j = 0; j < department[i].length; j++) {
        departmentNew.push(department[i][j]);   
    }  
}
console.log('Task 4a:', departmentNew.join(', '));

let allEmployees =[];
for (let i = 0; i < department.length; i++) {
    for (let j = 0; j < department[i].length; j++) {
        allEmployees.push(department[i][j]);   
    }
}
allEmployees.sort();
console.log('Task 4b:', allEmployees.join(', '));

//Task 5
const person = {
    name: 'Irina',
    surname: 'Nedealcova',
    age: 20,
    profession: 'student'
}
const keys = Object.keys(person);
console.log('Task 5:',keys);

//Task 6
function generateArray(n) {
    const result = [];

    for (let i = 1; i <= n; i++) {
        result.push(i);
    }
    return result;
}

const n = 8;
const array = generateArray(n);
console.log('Task 6:',array); 

//Task 7
let numArray = [3, 8, 4, 12, 5];
let biggestNumber = numArray[0];
for(i = 0; i < numArray.length; i++){
    if(numArray[i] > biggestNumber) {
        biggestNumber = numArray[i];
    }
}
console.log('Task 7:',biggestNumber);

//Task 8
const subject = {
    math: 8,
    literature: 7,
    history: 9
};

let total = 0;
let count = 0;

for (let key in subject) {
    total += subject[key];
    count++;
}

const average = total / count;
console.log('Task 8:',average); 

//Task 9
const Dog = new Object();
Dog.name = "Pluto";
Dog.age = 5;
Dog.color = "brown";

function addPuppies(dog, numberOfPuppies) {
    dog.puppies = [];
    for (let i = 1; i <= numberOfPuppies; i++) {
        dog.puppies.push(`Puppy_${i}`);
    }
}

addPuppies(Dog, 5);

console.log(Dog);
