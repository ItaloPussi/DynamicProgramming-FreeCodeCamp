/*
    PROBLEM: Write a function "allConstruct(target, wordBank)" that accept a target
    string and an array of strings.

    Returned a 2d array indicating all the unique ways that can we construct the target with the words in the wordBank.
    return [] if there's no way
*/

const allConstruct = (target, wordBank, memo = {}) => {
    if(target in memo) return memo[target]
    if (target === '') return [[]]

    const result = []
    for(let word of wordBank){
        if (target.indexOf(word) === 0){
            const suffix = target.slice(word.length)
            const suffixWays = allConstruct(suffix, wordBank, memo)
            const targetWays = suffixWays.map(suffixWay => ([word, ...suffixWay]))
            result.push(...targetWays)
        }
    }

    memo[target] = result
    return result
 }
 

 console.log(allConstruct("purple", ['purp', 'p', 'ur', 'le', 'purpl'])) // 2 ways on the output
 console.log(allConstruct("abcdef", ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c'])) // 4 ways on the output
 console.log(allConstruct("potato", ['pot', 'ta', 'to']))
 console.log(allConstruct("eeeeeeeeeeeeeeef", [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee',
    'eeeeeee',
    'eeeeeeee'
]))
