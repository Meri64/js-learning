// Write a for loop to print the multiplication table of a given number n (e.g., n = 5).

let yourNumber = 5;
let result = "";
  for (let i = 1; i <= 10; i++) {
    if (!isNaN(yourNumber)) {
    result += `${yourNumber} x ${i} = ${yourNumber * i}\n`;
  }
 
}
console.log(result); 
