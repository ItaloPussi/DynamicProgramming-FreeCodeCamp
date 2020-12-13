 /*
    PROBLEM: Write a function "canSum(targetSum, numbers)" that takes in a targetSum
    and an array of numbers as arguments.
    The function should return a boolean indicating whether or not it is possible to
    generate the targetSum using numbers from the array.
    You may use an element of the array as many times as needed
    You may assume that all input numbers are nonnegative
*/


// My solution
const canSum = (targetSum, numbers) => {
    const table = Array(targetSum+1).fill(false)
    table[0] = true
    for(let x = 0; x<=targetSum; x++){
        if(table[x] !== true) continue
        for(let num of numbers){
            let row = x+num
            if(row> targetSum ) continue
            table[row] = true
        }
    }
    return table[targetSum]
}

console.log(canSum(7, [2,3])) // true
console.log(canSum(7, [5,3,4,7])) //true
console.log(canSum(7, [2,4])) // false
console.log(canSum(7, [2,3,5])) // true
console.log(canSum(7, [2,3,5,7])) // true
console.log(canSum(197, [1,10,2])) // true
console.log(canSum(300, [7, 14])) // false
console.log(canSum(3042970, [240022, 100000, 1])) // true