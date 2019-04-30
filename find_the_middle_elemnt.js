//As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

//The input to the function will be an array of three distinct numbers (Haskell: a tuple).

//For example:

//gimme([2, 3, 1]) => 0
//2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

//Another example (just to make sure it is clear):

//gimme([5, 10, 14]) => 1
//10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

var gimme = function (inputArray) {
let newArray = Array.from(inputArray);

  newArray.sort(function(a, b) {
  return a - b;

});
 let half = Math.floor(inputArray.length / 2 )
 let middleVal = newArray[half]
 return inputArray.indexOf(middleVal)
};

//Sample Tests:
//Test.assertEquals(gimme([2, 3, 1]), 0, 'Finds the index of middle element');
//Test.assertEquals(gimme([5, 10, 14]), 1, 'Finds the index of middle element')
//Test.assertEquals(gimme([5, 10, 14, 7, 12]), 1, 'Finds the index of middle element')


//Daily Log
//Day 3/129
//Today I read about objects and and ES6+ fat arrow syntax in the JS Way. I also learned about using the .sort method things that can be done with it, as well as the .from method to create deep copies of an array. 
