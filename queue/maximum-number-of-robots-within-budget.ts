function maximumRobots(chargeTimes: number[], runningCosts: number[], budget: number): number {
    
    let result = 0;

    let i = 0;

    let currentMax=0
    let currentSum = 0;
    let count = 0;

    let start = 0;

    while(i<chargeTimes.length){
        while(currentMax + count * currentSum <=budget){
            if(chargeTimes[i]>currentMax){
                currentMax=chargeTimes[i];
            }

            currentSum+=runningCosts[i];
            count++;
            i++;
        }
        count--;

        if(count>result){
            result = count;
        }

        currentSum-=runningCosts[start]
        if(currentMax===chargeTimes[start]){
            currentMax=0;
            for(let k = start+1; k<i;k++){
                if(chargeTimes[k]>currentMax){
                    currentMax=chargeTimes[k]
                }
            }
        }
        start++;
    }

    return count>result?count:result
};
