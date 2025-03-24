function countDays(days: number, meetings: number[][]): number {
    let arr = new Array(days).fill(0)

    for(let i = 0; i<meetings.length;i++){
        for(let j = meetings[i][0]; j<=meetings[i][1];j++){
            arr[j-1]=1
        }
    }

    return arr.reduce((acc,val) => {
        return val==0 ? acc+1:acc
    },0)
};