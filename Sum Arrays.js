//Sum Array
//Write a method sum (sum_array in python, SumArray in C#) that takes an array of numbers and returns the sum of the numbers. These may be integers or decimals for Ruby and any instance of Num for Haskell. The numbers can also be negative. If the array does not contain any numbers then you should return 0.

//Examples
//numbers = [1, 5.2, 4, 0, -1]
//puts sum(numbers)
//9.2
//Assumptions
//You can assume that you are only given numbers.
//You cannot assume the size of the array.
//You can assume that you do get an array and if the array is empty, return 0.

// Sum Numbers
function sum (numbers) {
    let numbersTotal = numbers.reduce(
  ( accumulator, currentValue ) => accumulator + currentValue, 0);

 return total;
};

//Sample tests:
//Test.assertEquals(sum([]), 0);
//Test.assertEquals(sum([1, 5.2, 4, 0, -1]), 9.2);

//Daily Log
//Day 3 / 129
// Today I reviewed vanilla JS. I read about different kinds of functions and ES6 syntax as well as creating objects in javascript in The JS Way. 
