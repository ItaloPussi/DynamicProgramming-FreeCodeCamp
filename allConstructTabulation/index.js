/*
    PROBLEM: Write a function "allConstruct(target, wordBank)" that accept a target
    string and an array of strings.

    Returned a 2d array indicating all the unique ways that can we construct the target with the words in the wordBank.
    return [] if there's no way
*/

// Instructor's solution
const allConstruct = (target, wordBank) => {
    const table = Array(target.length+1)
        .fill()
        .map(()=> [])
    table[0] = [[]]

    for(let i = 0; i <= target.length; i++){
        for (let word of wordBank){
            if(target.slice(i, i+word.length) === word){
                const newCombinations = table[i].map(subarray => [...subarray, word])
                table[i+ word.length].push(...newCombinations)
            }
        }
    }

    return table[target.length]
}

console.log(allConstruct("purple", ['purp', 'p', 'ur', 'le', 'purpl'])) // 2 ways on the output
console.log(allConstruct("abcdef", ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c'])) // 4 ways on the output
console.log(allConstruct("potato", ['pot', 'ta', 'to']))