function countDays(days: number, meetings: number[][]): number {
    
    meetings.sort((a,b) => a[0]-b[0])

    let mergedSchedules = []

    mergedSchedules.push(meetings[0])

    let i = 1;

    while(i<meetings.length){
        let current = mergedSchedules.length-1
        if(mergedSchedules[current][1]>=meetings[i][0]){
            if(mergedSchedules[current][1]<meetings[i][1]){
                mergedSchedules[current][1]=meetings[i][1]
            }
        } else {
            mergedSchedules.push(meetings[i])
        }

        i++;
    }


    let result = mergedSchedules[0][0]-1;

    for(i = 1; i<mergedSchedules.length;i++){
        result+=mergedSchedules[i][0]-mergedSchedules[i-1][1]-1
    }

    return result+days-mergedSchedules[mergedSchedules.length-1][1]
};