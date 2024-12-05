//Task 1
const fruits = [];
fruits.push('apple','banana','orange');
console.log(fruits.length);
console.log(fruits);

//Task 2
const numbers = [1,2,3,4,5];
numbers.pop();
console.log(numbers);
numbers.shift();
console.log(numbers);

//Task 3
const colors = ['red','green','blue','yellow'];
const index = colors.indexOf('green');
console.log(index);
const include = colors.includes('orange');
console.log(include);

//Task 4
const nameOf = [ 'John', 'Jane', 'Mike', 'Jennifer'];
nameOf.unshift('David');
console.log(nameOf);
console.log(nameOf.indexOf('Mike'));

//Task 5
const numbersOf = [2,4,6,8,10];
const hasElement = numbersOf.includes(5);
if (hasElement) {
    console.log("This array has a five");
} else {
    console.log("This array doesn't have a five");
}
const pushElement = numbersOf.push(12);
console.log(numbersOf);

//Task 6
const monthsOne = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

console.log("Sorted array:",monthsOne.sort());

//Task 7
const filteredMonths = monthsOne.filter(month => month.length > 3)
console.log("Filtered array:", filteredMonths);

//Task 8
const slicedMonths = monthsOne.slice(5, 10);
console.log("Sliced array:", slicedMonths);

//Task 9
const monthsTwo = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
monthsTwo.sort();
const filteredMonthsTwo = monthsTwo.filter(month => month.length >= 5);
const result = filteredMonthsTwo.join('-');
console.log("Result:", result);