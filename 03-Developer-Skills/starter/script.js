// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// function calcTempAmplitude(temps) {
//   let max = -10001,
//     min = 10001;
//   for (let i = 0; i < temps.length; ++i) {
//     //console.log(typeof temps[i]);
//     typeof返回的是string
//     if (!isNaN(temps[i])) {
//       max = Math.max(max, temps[i]);
//       min = Math.min(min, temps[i]);
//     }
//   }
//   if (max === -10001 || min === 10001) {
//     return -1;
//   } else return max - min;
// }

// console.log(calcTempAmplitude(temperatures));

// const temperatures1 = [1, 2, 3, 4, 56, 6];
// console.log(temperatures.concat(temperatures1));

// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",
//     value: prompt("Degree celsius:"),
//   };
//   debugger;
//   //   //console.table(measurement);
//   //   console.warn(1);
//   //   console.error(2);
//   const kelvinDegree = Number(measurement.value) + 273;
//   return kelvinDegree;
//   // this 指针只对obj有效
// };

// console.log(measureKelvin());

const test1 = [17, 21, 23];
const test2 = [12, 5, -5, 0, 4];

const printForecast = (test) => {
  let printStr = "...";
  for (let i = 0; i < test.length; ++i) {
    printStr += ` ${test[i]}°C in ${i + 1} days ...`;
  }
  console.log(printStr);
  return 0;
};
printForecast(test1);
printForecast(test2);
