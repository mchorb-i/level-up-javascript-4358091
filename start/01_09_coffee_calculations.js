// Write your code here
const coffeeCost = 1.25;

function getTotalBill (numCoffeePerPerson) {
  let totalBill = 
  numCoffeePerPerson.reduce((totalCoffee, numCoffe) => totalCoffee += numCoffe, 0);
  return `The total bill is $${totalBill  * coffeeCost}`;
}

const numCoffeePerPerson = [2,3,1,5];
console.log(getTotalBill(numCoffeePerPerson));
