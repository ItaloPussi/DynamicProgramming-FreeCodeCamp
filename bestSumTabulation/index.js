/*
    PROBLEM: Write a function "bestSum(targetSum, numbers)" that takes in a targetSum
    and an array of numbers as arguments.
    The function should return an array containing the minimum combination of elements that
    add up to exactly the targetSum. If there is no combination, result is null.

    Only one combination is needed
*/

// Mixed my soluction with instructor's soluction
const bestSum = (targetSum, numbers) => {
    const table = Array(targetSum+1).fill(null)
    table[0] = []
    
    for(let i = 0; i <= targetSum; i++){
        if(table[i]!== null) {
            for (let num of numbers){
                const combination = [...table[i], num]
    
                // If this current combination is shorther that what is already stored
                if( !table[i+num] || table[i+num].length > combination.length){
                    table[i+num] = combination
                }
            }
        }
    }


    return table[targetSum]
}

console.log(bestSum(7, [5,3,4,7]))
console.log(bestSum(8, [2,3,5]))
console.log(bestSum(8, [1,4,5]))
console.log(bestSum(100, [1,2,5,25]))