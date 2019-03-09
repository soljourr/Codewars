//Given a sequence of items and a specific item in that sequence, return the item immediately following the item specified. If the item occurs more than once in a sequence, return the item after the first occurence. This should work for a sequence of any type.
//When the item isn't present or nothing follows it, the function should return nil in Clojure and Elixir, Nothing in Haskell, undefined in JavaScript, None in Python.

let num = ["a","b","c","e","f","g","h"]
function nextItem(xs, item) {
  // TODO: Implement me
  let currentIndex =  xs.indexOf(item);
  let nextIndex = currentIndex+1;

  if(currentIndex === -1 || nextIndex === -1){

    return undefined
  }
  return num[nextIndex];

}

console.log(num.indexOf("c"))
console.log (nextItem(num, "y"))




function countFrom(n) {
  for (let i = n; ; ++i) yield i;
}


console.log(countFrom(12))
