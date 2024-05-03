//Exercises with the ternary operator in JavaScript:
//Task 1
const number = 30;
const isEven = (number % 2 == 0) ? "Yes, it is Even" : "No, it is Odd";
console.log(isEven); 

//Task 2
const isLoggedIn = true;
const authentication = (isLoggedIn == true) ? "Yes,this user is logged in)" : "No,this user is not logged in(";
console.log(authentication);

//Task 3
function hasProduct() {
    let cost = 23;
    let amount = 1;
    let availability = true;
    let fullPrice = cost*amount;
    return  availability == true && fullPrice  ? `Overall price is ${fullPrice}$` : "Sorry, the item is out of stock";
  }
  console.log(hasProduct(true));

//Task 4
let currentDate = new Date(); 
console.log(currentDate.getFullYear());
let leapYear = currentDate.getFullYear()%4 == 0 ? `${currentDate.getFullYear()} is a leap year` : `${currentDate.getFullYear()} is non-leap year` ;
console.log(leapYear);

//Exercises with switch:
//Task 5
const CountryName = 'MD';
switch (CountryName) {
    case 'MD':
        console.log("Moldova");
        break;
    case 'BG':
        console.log("Bulgaria");
        break;
    case 'ES':
        console.log("Spain");
        break;
    case 'IT':
        console.log("Italy");
        break;
    case 'CN':
      console.log("China");
        break;
    default:
        console.log(`No information about this country`);
  }

//Task 6
let score = 56;
    switch (true) {
        case (score >= 90 && score <= 100):
            grade = 'A';
            break;
        case (score >= 80 && score <=89):
            grade = 'B';
            break;
        case (score >= 70 && score <=79):
            grade = 'C';
            break;
        case (score >= 60 && score <=69):
            grade = 'D';
            break;
        case (score >= 0 && score <= 59):
            grade = 'F';
            break;
        case 'Incomplete':
            console.log('I');
            break;
        case 'Satisfactory':
            console.log('S');
            break;
        case 'Unsatisfactory':
            console.log('U');
            break;
        case 'Outstanding':
            console.log('O');
            break;
        default:
            grade = 'Invalid score';
    }
console.log(grade);

//Exercises with function:
//Task 7

function TellFortune(N, Z, Y, X) {
    console.log(`You will be ${X} in ${Y}, and will get married to ${Z} with ${N} kids`);
}
TellFortune(2, 'Alice', 'New York', 'Designer');
TellFortune(1, 'Nick', 'Paris', 'Teacher');
TellFortune(4, 'Charlie', 'Tokyo', 'Engineer');

//Task 8
function CalculatedDogAge (puppyAge) {
    let dogAge = puppyAge * 7;
    console.log(`Your puppy is ${dogAge} years old in dog years.`);
}
CalculatedDogAge(3);
CalculatedDogAge(10);
CalculatedDogAge(13);

//Task 9
function CalculationSupply(currentAge, amountOfFood, maxAge = 100) {
    remainingYears = maxAge - currentAge;
    totalFood = remainingYears * 365 * amountOfFood;
    console.log(`You will need ${totalFood} kilograms of food to last you until ${maxAge} years of old age`);
} 
CalculationSupply(30, 1);
CalculationSupply(25, 0.5, 85);
CalculationSupply(15, 0.75, 65);
