//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

//The output should be two capital letters with a dot seperating them.

//It should look like this:

//Sam Harris => S.H

//Patrick Feeney => P.F

function abbrevName(name){
  let nameArray = name.split(" ")
   let firstInit = nameArray[0].charAt(0).toUpperCase();
  let lastInit = nameArray[nameArray.length-1].charAt(0).toUpperCase();
 return firstInit +"."+lastInit;
 }



 //A more concise and cleaver answer...

 function abbrevName(name){

  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}
