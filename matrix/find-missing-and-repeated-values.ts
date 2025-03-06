function findMissingAndRepeatedValues(grid: number[][]): number[] {
    const n = grid.length;
    const s = n*n + 1;
    const array = new Array(s).fill(0);
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const num = grid[i][j];
            if(array[num] === num){
                array[0] = num;
            } else {
                array[num] = num;
            }
        }
    }

    const missing = array.indexOf(0);

    return [array[0],missing]
};