function maximumCandies(candies: number[], k: number): number {
    let n = candies.length;
    let min = Math.min(...candies)
    
    candies.sort((a,b) => b-a)

    if(n===k){
        return min;
    }

    while(n<k){
        let split = Math.floor(candies[(n-candies.length)%candies.length]/2)
        if(split===0){
            return 0;
        }
        candies[(n-candies.length)%candies.length]-=split
        if(split<min){
            min=split
        }
        n++;
    }

    return min;

};