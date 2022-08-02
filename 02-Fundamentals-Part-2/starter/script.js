"use strict";
// // let hasDriversLicense = false;
// // const passTest = true;

// // if (passTest) hasDriverLicense = true;
// // if (hasDriversLicense) console.log("I can drive :D");

// //defining a function
// function logger() {
//   console.log("My name is Jason");
// }

// //calling / running / invoking the function
// // logger();
// // logger();
// // logger();

// // function returnAString() {
// //   const str = "This is a string";
// //   return str;
// // }

// // let str = returnAString();

// // str = "Another string";
// // console.log(str);
// // const calcAge2 = function (birthYear) {
// //   return 2037 - birthYear;
// // };
// // let B = calcAge2;
// // console.log(B(2011));

// function calcAverage(scores) {
//   return (scores[0] + scores[1] + scores[2]) / 3;
// }

// const checkWinner = (avgDolphins, avgKoalas) => {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     return;
//   }
//   if (avgDolphins * 2 <= avgKoalas) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     return;
//   }
//   console.log("Draw!");
//   return;
// };

// // let Dolphins = [44, 23, 71];
// // let Koalas = [65, 54, 49];
// let Dolphins = [85, 54, 41];
// let Koalas = [23, 34, 27];

// checkWinner(calcAverage(Dolphins), calcAverage(Koalas));

// let anArray = [1, 2, 3, 4, 5, 6, 7, 8];
// //console.log(anArray[0:2]);
// const a = 1;
// a += 1;

// console.log(a);

// const friends = ["Michael", "Jay", "Irvine"];
// friends[4] = "Steven";
// console.log(friends);

// const calcTip = (billValue) => {
//   return billValue * (billValue <= 300 && billValue >= 50 ? 0.15 : 0.2);
// };
// const bills = [125, 555, 44];
// const tips = bills.map(calcTip);
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);

// const jonas = {
//   firstName: "jonas",
//   lastName: "Jason",
//   birthYear: 2000,
//   //age: 2037,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   calAge: function () {
//     this.age = 2037 - this.birthYear;
//     return 2037 - this.birthYear;
//   },
//   hasDrivingLicense: true,
//   //object methods calling on an internal variable should start with this.variableName
//   // notice the variable could be created in an internal function, but only be called after the function was called.
// };

// console.log(jonas.calAge());
// console.log(jonas.age);
// console.log(jonas.lastName);
// console.log(jonas["last" + "Name"]);
// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}`
// );
// jonas.calAge();
// console.log(
//   `${jonas.firstName} is a ${jonas.age}-year old ${jonas.job}, and he has ${
//     jonas.hasDrivingLicense ? "a" : "no"
//   } driver's license`
// );

// //Arrays 也是obj的一种

// let a = new Array[(1, 2, 3)]();
// console.log(a);

// for (let i = 0; i < jonas.friends.length; ++i) {
//   console.log(jonas.friends[i], typeof jonas.friends[i]);
// }

// let ages = [23, 24, 26, 64, 33];
// let years = ages.map((age) => 2020 - age);

// // let years = [];
// // for (let i = 0; i < ages.length; ++i) {
// //   years.push(2044 - ages[i]);
// // }
// console.log(years);

// let getARandomNumber = function () {
//   return Math.floor(Math.random() * 11) * 10;
// };

// let times = 100;
// while (times-- !== 0) {
//   console.log(getARandomNumber());
// }
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// let tips = [];
// let totals = [];
// const calcTip = (billValue) => {
//   return billValue * (billValue <= 300 && billValue >= 50 ? 0.15 : 0.2);
// };

// for (let i = 0; i < bills.length; ++i) {
//   tips.push(calcTip(bills[i]));
//   totals.push(bills[i] + tips[i]);
// }
// console.log(tips);

// function calcAverage(bills) {
//   let sum = 0;
//   for (let i = 0; i < bills.length; ++i) {
//     sum += bills[i];
//   }
//   return sum / bills.length;
// }
// console.log(calcAverage(totals));
