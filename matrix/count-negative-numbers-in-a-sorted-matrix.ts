function countNegatives(grid: number[][]): number {
    let count = 0;
    for(let i = 0; i<grid.length;i++){
        let j = grid[i].length-1;
        while(grid[i][j]<0){
            count++;
            j--;
        }
    }

    return count
};