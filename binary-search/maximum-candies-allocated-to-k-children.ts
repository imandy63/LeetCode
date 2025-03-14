function maximumCandies(candies: number[], k: number): number {
    if (k === 0) { 
        return 0;
    }
    
    let left: number = 1;
    let right: number = Math.max(...candies);
    let result: number = 0;
    
    while (left <= right) {
        const mid: number = Math.floor((left + right) / 2);
        if (canDistribute(candies, k, mid)) {
            result = mid;
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    
    return result; 

};

function canDistribute(candies: number[], k: number, x: number): boolean {
        let count: number = 0;
        for (let pile of candies) {
            count += Math.floor(pile / x);
        }
        return count >= k;
    }