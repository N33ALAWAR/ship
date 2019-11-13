// The containers with number from 251 up to 300 (included)
// weight 100kg each.
// The containers with number from 301 up to 400 (included)
// weight 200kg each.
// The rest weight 500 Kg each.
// Put as many containers as possible without sinking your
// ship. Find a way to stop adding weight if you surpass the
// limit your ship can afford.
// Print to the console exact how many containers you have
// included to your ship and how much is the difference
// between the total weight of the containers and the weight
// your ship can afford (free available weight).
let counter = 1;
let endCount = 500;
let weightLimit = 8950;
let weight = 0;
let numContainers = 0;
let kilos = 0;
// while (counter < endCount) {
//   if (counter <= 100 && weight < weightLimit) {
//     weight += 10;
//     numContainers++;
//     kilos = 10;
//   } else if (counter <= 200 && weight < weightLimit) {
//     weight += 20;
//     numContainers++;
//     kilos = 20;
//   } else if (counter <= 250 && weight < weightLimit) {
//     weight += 50;
//     numContainers++;
//     kilos = 50;
//   } else if (counter <= 300 && weight < weightLimit) {
//     weight += 100;
//     numContainers++;
//     kilos = 100;
//   } else if (counter <= 400 && weight < weightLimit) {
//     weight += 200;
//     numContainers++;
//     kilos = 200;
//   } else if (counter <= 500 && weight < weightLimit) {
//     weight += 500;
//     numContainers++;
//     kilos = 500;
//   }
//   counter++;
//   if (numContainers > 112) {
//     break;
//   }
// }
// if (Math.abs(weightLimit - weight) > 0) {
//   weight -= kilos;
//   numContainers--;
// }
// console.log(
//   `${numContainers} have been loaded onto the ship. The total combined weight is ${weight}Kg. There are ${Math.abs(
//     weightLimit - weight
//   )}Kg still available.`
// );
for (let counter = 1; counter < endCount; counter++) {
 if (counter <= 100 && weight < weightLimit) {
   weight += 10;
   numContainers++;
   kilos = 10;
 } else if (counter <= 200 && weight < weightLimit) {
   weight += 20;
   numContainers++;
   kilos = 20;
 } else if (counter <= 250 && weight < weightLimit) {
   weight += 50;
   numContainers++;
   kilos = 50;
 } else if (counter <= 300 && weight < weightLimit) {
   weight += 100;
   numContainers++;
   kilos = 100;
 } else if (counter <= 400 && weight < weightLimit) {
   weight += 200;
   numContainers++;
   kilos = 200;
 } else if (counter <= 500 && weight < weightLimit) {
   weight += 500;
   numContainers++;
   kilos = 500;
 }
 if (numContainers > 112) {
   break;
 }
}
if (Math.abs(weightLimit - weight) > 0) {
 weight -= kilos;
 numContainers--;
}
console.log(
 `${numContainers} have been loaded onto the ship. The total combined weight is ${weight}Kg. There are ${Math.abs(
   weightLimit - weight
 )}Kg still available.`
);