//Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

//[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x){
let arrSum = x.reduce( (a,b) => a * b );
return arrSum
};

//Sample Tests:
//Test.describe("Example tests",_=>{
//Test.assertEquals(grow([1, 2, 3]), 6);
//Test.assertEquals(grow([4, 1, 1, 1, 4]), 16);
//Test.assertEquals(grow([2, 2, 2, 2, 2, 2]), 64);
//});

//Daily Log
//Day 4/129
//Today I read about using the push(), pop(), and splice() methods to manipulate data in arrays. I also read about methods like .toLowerCase and .toUpperCase to manipulate strings. I also had to relearn about reducer functions to solve this coding problem.
