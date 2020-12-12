/*
    PROBLEM: Write a function "countConstruct(target, wordBank)" that accept a target
    string and an array of strings.

    Returned a value indicating how many unique ways can we construct the target with the words in the wordBank.
    return zero if there's no way
*/

const countConstruct = (target, wordBank, memo = {}) => {
   if(target in memo) return memo[target]
   if (target === '') return 0

   let totalCount = 0
   for (let word of wordBank){
       if(target.indexOf(word) === 0){
           let suffix = target.slice(word.length)
           if(suffix==='') return 1
           const numWaysForRest = countConstruct(suffix, wordBank, memo)
           totalCount+=numWaysForRest
       }
   }

   memo[target] = totalCount
   return totalCount
}

console.log(countConstruct("banana", ["ba", "pa", "ca", "na"])) // 1
console.log(countConstruct("", ["ba", "pa", "ca", "na"])) // 0
console.log(countConstruct("abcdef", ["ab", "abcdefgh", "c", "def"])) // 1
console.log(countConstruct("potato", ["pot", "ta", "to"])) // 0
console.log(countConstruct("skateboard", ["skat", "te", "bor", "ard"])) // 0
console.log(countConstruct("skateboard", ["skat", "te", 'e', "bo", "ard", 'ska'])) // 2
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee',
    'eeeeeee',
    'eeeeeeee'
])) // 0