/* 
    PROBLEM: Say that you are a traveler on a 2D grid. You begin in the
    top-left corner and your goal is to travel to the bottom-right corner.
    You may only move down or right.
    In how many ways can you travel to the goal on a grid with dimensions m * n?
*/

// My solution
const gridTraveler = (rows, columns) => {
    const table = Array(rows+1)
        .fill()
        .map(()=> Array(columns+1).fill(0))

    table[1][1] = 1
    for(let m = 0; m<=rows; m++){
        for(let n = 0; n<=columns; n++){        
            if(n<columns){
                table[m][n+1] += table[m][n]
            }    
            if(m<rows){
                table[m+1][n] += table[m][n]
            }
        }
    }
    return table[rows][columns]
}

console.log(gridTraveler(1,1)) // 1
console.log(gridTraveler(2,3)) // 3
console.log(gridTraveler(3,2)) // 3
console.log(gridTraveler(3,3)) // 6
console.log(gridTraveler(18,18)) // 2333606220