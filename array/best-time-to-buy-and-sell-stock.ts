function maxProfit(prices: number[]): number {
    let min=prices[0];
    let max=0;
    
    for(let i = 1; i<prices.length;i++){
        if(prices[i]>prices[i-1]){
            if(max<prices[i]-min){
                max=prices[i]-min
            }
        }
        if(prices[i]<min){
            min=prices[i];
        }
    }
    return max
};