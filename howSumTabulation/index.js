/*
    PROBLEM: Write a function "howSum(targetSum, numbers)" that takes in a targetSum
    and an array of numbers as arguments.
    The function should return an array containing any combination of elements that
    add up to exactly the targetSum. If there is no combination, result is null.

    Only one combination is needed
*/

// My solution
const howSum = (targetSum, numbers) => {
    const table = Array(targetSum+1).fill(null)
    table[0] = []

    for(let x = 0; x<=targetSum; x++){
        if(table[x] === null) continue
        for(let num of numbers){
            let row = x+num
            if(row> targetSum ) continue
            table[row] = [...table[x], num]
        }
    }

    return table[targetSum]

}

console.log(howSum(7,[2,3]))
console.log(howSum(7,[5,3,4,7]))
console.log(howSum(7,[2,4]))
console.log(howSum(13, [7,1]))
console.log(howSum(100, [25]))
console.log(howSum(300, [7,14]))