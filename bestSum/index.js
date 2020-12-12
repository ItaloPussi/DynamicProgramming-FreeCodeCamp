/*
    PROBLEM: Write a function "bestSum(targetSum, numbers)" that takes in a targetSum
    and an array of numbers as arguments.
    The function should return an array containing the minimum combination of elements that
    add up to exactly the targetSum. If there is no combination, result is null.

    Only one combination is needed
*/

const bestSum = (targetSum, numbers, memo = {}) => {
    if(targetSum in memo) return memo[targetSum]
    if(targetSum === 0) return []
    if(targetSum < 0) return null

    let shortestCombination = null

    for (let num of numbers){
        const remainder = targetSum - num
       const remainderCombination =  bestSum(remainder, numbers, memo)

       if(remainderCombination !== null){
           const combination = [...remainderCombination, num]
           if(shortestCombination === null || shortestCombination.length > combination.length){
                shortestCombination = combination
           }
       }
    }

    memo[targetSum] = shortestCombination
    return memo[targetSum]
}

console.log(bestSum(7, [5,3,4,7]))
console.log(bestSum(8, [2,3,5]))
console.log(bestSum(8, [1,4,5]))
console.log(bestSum(100, [1,2,5,25]))