//Complete the function which takes two arguments and returns all numbers which are divisible by given divisor. First argument is an array of numbers and the second is the divisor.

//create function
function divisibleBy(numbers, divisor){
let answers = [];
//loop through array and divide each item
numbers.forEach(number => {
  //check to see if number is divisible
  if(number % divisor === 0){
  //push number to answer array
  answers.push(number)
  }
 })
 return answers
}
