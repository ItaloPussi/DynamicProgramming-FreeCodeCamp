/*
    PROBLEM: Write a function "howSum(targetSum, numbers)" that takes in a targetSum
    and an array of numbers as arguments.
    The function should return an array containing any combination of elements that
    add up to exactly the targetSum. If there is no combination, result is null.

    Only one combination is needed
*/

// // Mixed my solution and instructor's solution
const howSum = (targetSum, numbers, memo = {}) => {
  if(targetSum in memo) return null
  if(targetSum === 0 ) return [];
  if(targetSum < 0) return null;

  for(let num of numbers){
      const remainder = targetSum - num
      const remainderResult = howSum(remainder, numbers, memo)

      if(remainderResult !== null){
          return [...remainderResult, num]
      }else {
          memo[remainder] = null
      }
  }

  return null
}

console.log(howSum(7,[2,3]))
console.log(howSum(7,[5,3,4,7]))
console.log(howSum(7,[2,4]))
console.log(howSum(13, [7,1]))
console.log(howSum(300, [7,14,1]))