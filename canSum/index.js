 /*
    PROBLEM: Write a funcion "canSum(targetSum, numbers)" that takes in a targetSum
    and an array of numbers as arguments.
    The function should return a boolean indicating whether or not it is possible to
    generate the targetSum using numbers from the array.
    You may use an element of the array as many times as needed
    You may assume that all input numbers are nonnegative
*/

// Mixed my solution and instructor's solution
const canSum = (targetSum, numbers, memo = {}) => {
    if(targetSum in memo) return memo[targetSum]
    if(numbers.indexOf(1) != -1) return true
    if(numbers.indexOf(targetSum) != -1) return true
    if(targetSum==0) return true
    if(targetSum<0) return false
    
    for (let num of numbers){
        let remainder = targetSum - num
        let result = canSum(remainder, numbers, memo)
        if(result === true) {
            return true
        }
        memo[remainder] = result
    }

    return false
}
console.log(canSum(7, [2,3])) // true
console.log(canSum(7, [5,3,4,7])) //true
console.log(canSum(7, [2,4])) // false
console.log(canSum(7, [2,3,5])) // true
console.log(canSum(7, [2,3,5,7])) // true
console.log(canSum(197, [1,10,2])) // true
console.log(canSum(300, [7, 14])) // false
console.log(canSum(3042970, [240022, 100000, 1])) // true
