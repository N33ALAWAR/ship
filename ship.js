const shipWeightLimit = 10000;
let counter = 1;
let weight = 0;
let numContainers = 0;

while (counter < 500) {
  if (counter <= 100 && weight < shipWeightLimit) {
    weight += 10;
    numContainers++;
  } else if (counter >= 101 && counter <= 200 && weight < shipWeightLimit) {
    weight += 20;
    numContainers++;
  } else if (counter >= 201 && counter <= 250 && weight < shipWeightLimit) {
    weight += 50;
    numContainers++;
  } else if (counter >= 251 && counter <= 300 && weight < shipWeightLimit) {
    weight += 100;
    numContainers++;
  } else if (counter >= 301 && counter <= 400 && weight < shipWeightLimit) {
    weight += 200;
    numContainers++;
  } else if (counter >= 401 && counter <= 500 && weight < shipWeightLimit) {
    weight += 500;
    numContainers++;
  }
  counter++;
}

let rest = shipWeightLimit - weight;
console.log(
  ` we have now ${numContainers} containers with ${weight} Kilos, the rest available goods weight is ${rest}`
);
console.log(counter);
// let maxWeight = 10000;
// let weightIncluded = 0;
// let id;
// let weightNextContainer = 10;

// while (maxWeight >= weightIncluded + weightNextContainer) {
//   if (id <= 100) {
//     weightIncluded += 10;
//     id === 100 ? (weightNextContainer = 20) : (weightNextContainer = 10);
//   } else if (id <= 200) {
//     weightIncluded += 20;
//     id === 200 ? (weightNextContainer = 50) : (weightNextContainer = 20);
//   } else if (id <= 250) {
//     weightIncluded += 50;
//     id === 250 ? (weightNextContainer = 100) : (weightNextContainer = 50);
//   } else if (id <= 300) {
//     weightIncluded += 100;
//     id === 300 ? (weightNextContainer = 200) : (weightNextContainer = 100);
//   } else if (id <= 400) {
//     weightIncluded += 200;
//     id === 400 ? (weightNextContainer = 500) : (weightNextContainer = 200);
//   } else {
//     weightIncluded += 500;
//     weightNextContainer = 500;
//   }
//   // in case you want to see every step!
//   // console.log(`${id} container included, the current Weight is {weightIncluded}. Remain weight is ${maxWeight - weightIncluded}!`)
//   id++;
// }

// console.log(
//   `I have included ${id -
//     1} containers to the ship and the weight remained is ${maxWeight -
//     weightIncluded}!`
// );
//let foo = 0;
//while (foo <= 10) {
//foo++;
//if (foo % 2 !== 0) {//if(foo === 5)
//continue; //befor we put break
//}
//console.log(foo);
//}
