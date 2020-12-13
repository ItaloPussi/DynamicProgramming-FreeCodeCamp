/*
    PROBLEM: Write a function "canConstruct(target, wordBank)" that accept a target
    string and an array of strings.

    Returned a boolean indicating whether or not the target can be constructed by concatenating elements of the wordBank array.
*/

// Mixed my soluction with instructor's soluction
const canConstruct = (target, wordBank) => {
    const table = Array(target.length+1).fill(false)
    table[0] = true

    for(let i = 0; i <= target.length; i++){
        if(table[i] === false) continue

        for(let word of wordBank){
            // If word matches the characters started in the position i
            if(target.slice(i, i+ word.length) === word){
                table[i+word.length] = true
            }
        }
    }

    return table[target.length]
}

console.log(canConstruct("banana", ["ba", "pa", "ca", "na"])) // True
console.log(canConstruct("", ["ba", "pa", "ca", "na"])) // true
console.log(canConstruct("abcdef", ["ab", "abcdefgh", "c", "def"])) // True
console.log(canConstruct("potato", ["pot", "ta", "to"])) // False
console.log(canConstruct("skateboard", ["skat", "te", "bor", "ard"])) // False
console.log(canConstruct("skateboard", ["skat", "te", 'e', "bo", "ard"])) // True