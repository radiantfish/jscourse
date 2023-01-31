// CODING CHALLENGE #1
/*
//setting data
const markHeight = 1.74;
const markMass = 55;

const johnHeight = 1.9;
const johnMass = 100;

// calculating BMI
markBMI = markMass / markHeight ** 2;
console.log(
  `Mark weights ${markMass} kg and is ${markHeight} m tall. Mark's BMI is ${markBMI}`
);

johnBMI = johnMass / (johnHeight * johnHeight);
console.log(
  `John weights ${johnMass} kg and is ${johnHeight} m tall. John's BMI is ${johnBMI}`
);

const markHigherBMI = markBMI > johnBMI;

if (johnBMI > markBMI) {
  console.log("John's BMI is higher than the Mark's one!");
} else {
  console.log("Mark's BMI is higher than the John's one!");
}
*/

// CODING CHALLENGE #3
/*
const avScoreDolphins = (97 + 112 + 10) / 3;
console.log(avScoreDolphins);

const avScoreKoalas = (109 + 95 + 10) / 3;
console.log(avScoreKoalas);

if (avScoreDolphins > avScoreKoalas && avScoreDolphins >= 100) {
  console.log("Dolphins win!");
} else if (avScoreKoalas > avScoreDolphins && avScoreKoalas >= 100) {
  console.log("Koalas win!");
} else if (avScoreDolphins === avScoreKoalas) {
  console.log("Both win!");
} else {
  console.log("It's a draw! Nobody wins!");
}
*/

// CODING CHALLENGE #4
let billValue = prompt("How much is the bill?");

console.log(
  (tipValue =
    billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2)
);
