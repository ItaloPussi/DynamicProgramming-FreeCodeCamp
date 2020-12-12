/*
    PROBLEM: Given a N position, return the Nth value of the fibonacci sequence
*/ 


// Memoization
//        js object, keys will be arg to fn, value will be the returned value

const fib = (n, memo = {}) => {
    if (n in memo) return memo[n]
    if (n <= 2) return 1
    memo[n] = fib(n-1, memo) + fib(n-2, memo)
    return memo[n]
}

console.log(fib(6))
console.log(fib(7))
console.log(fib(8))
console.log(fib(9))
console.log(fib(50))

// My original solution
// const fib = (n) => {
//     if (n <= 2) return 1
//     const fibonacci = [1,1]
//     for(let i =2; i<n;i++){
//         fibonacci.push(fibonacci[i-1] + fibonacci[i-2])
//     }
//     return fibonacci[n-1]
// }