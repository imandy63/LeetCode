function maxProfit(prices: number[]): number {
    let min=prices[0];
    let max=0;
    
    for(let i = 1; i<prices.length;i++){
        if(prices[i-1]>prices[i]){
            if(max<prices[i-1]-min){
                max=prices[i-1]-min
            }
        }
        if(prices[i]<min){
            min=prices[i];
        }
    }
    return max
};