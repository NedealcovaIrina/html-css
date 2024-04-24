let weightSarah = 65;
let weightBob = 93;
let heightSarah = 1.75; 
let heightBob = 1.89;
let sarahBMI = weightSarah / (heightSarah**2);
let bobBMI = weightBob / (heightBob**2) 

console.log(sarahBMI);
console.log(bobBMI);

if (sarahBMI < 18.5) {
    console.log("Sarah is underweight");
} 
else { (sarahBMI <= 18.5 && 25) 
    console.log("Sarah's weight is normal");
}

if (bobBMI < 18.5) {
    console.log("Bob is underweight");
} 
else if (bobBMI > 25) {  
    console.log("Bob is overweight");
}
else {
    console.log("Bob's weight is normal");
}
    
