/**
 Do not return anything, modify board in-place instead.
 */
function solveSudoku(board: string[][]): void {
    let result = solver(board,0,0)
    if(result){
        console.log("Solved")
    } else {
        console.log("Cannot solve")
    }
};

function solver(board, row,col){
    if(row==8 && col ==9){
        return true;
    }

    if (col === 9) {
        row++;
        col = 0;
    }
    
    if(board[row][col]!="."){
        return solver(board,row,col+1);
    }
    
    for(let num = 1; num<=9;num++){
        if(isSafe(board,row, col,num.toString())){
            board[row][col]=num.toString()
            if(solver(board,row,col+1)){
                return true
            }
            board[row][col]="."   
        }
    }

    return false;
}

function isSafe(board,row, column, num){
    // Column check
    for(let i = 0; i<9;i++){
        if(board[row][i]==num){
            return false;
        }
    }

    // Row check
    for(let j = 0; j<9;j++){
        if(board[j][column]==num){
            return false;
        }
    }

    // Block check
    let blockCol = Math.ceil((column+1)/3)*3-2
    let blockRow = Math.ceil((row+1)/3)*3-2
    for(let k = blockRow-1; k<blockRow+2;k++){
        for(let l = blockCol-1;l<blockCol+2;l++){
            if(board[k][l]===num){
                return false;
            }
        }
    }

    return true;
}