/*
    PROBLEM: Write a function "countConstruct(target, wordBank)" that accept a target
    string and an array of strings.

    Returned a value indicating how many unique ways can we construct the target with the words in the wordBank.
    return zero if there's no way
*/

// My solution
const countConstruct = (target, wordBank) => {
    const table = Array(target.length+1).fill(0)
    table[0] = 1

    for(let i = 0; i <= target.length; i++){
        if(table[i] === 0) continue

        for(let word of wordBank){
            // If word matches the characters started in the position i
            if(target.slice(i, i+ word.length) === word){
                table[i+word.length] += table[i]
            }
        }
    }

    return table[target.length]
}

console.log(countConstruct("banana", ["ba", "pa", "ca", "na"])) // 1
console.log(countConstruct("", ["ba", "pa", "ca", "na"])) // 0
console.log(countConstruct("abcdef", ["ab", "abcdefgh", "c", "def"])) // 1
console.log(countConstruct("potato", ["pot", "ta", "to"])) // 0
console.log(countConstruct("skateboard", ["skat", "te", "bor", "ard"])) // 0
console.log(countConstruct("skateboard", ["skat", "te", 'e', "bo", "ard", 'ska'])) // 2
console.log(countConstruct("purple",['purp', 'p', 'ur', 'le', 'purpl', 'e'])) // 3