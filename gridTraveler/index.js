/* 
    PROBLEM: Say that you are a traveler on a 2D grid. You begin in the
    top-left corner and your goal is to travel to the bottom-right corner.
    You may only move down or right.
    In how many ways can you travel to the goal on a grid with dimensions m * n?
*/
const gridTraveler = (rows, columns, memo = {}) => {
    const key = `${rows},${columns}`
    if(key in memo) return memo[key]
    if(rows === 0 || columns === 0) return 0
    if(rows === 1 && columns === 1) return 1
    memo[key] = gridTraveler(rows-1, columns, memo) + gridTraveler(rows, columns-1, memo)
    return memo[key]
}

console.log(gridTraveler(2,3))
console.log(gridTraveler(18,18))
console.log(gridTraveler(18,18))