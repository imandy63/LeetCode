function minEatingSpeed(piles: number[], h: number): number {
    let left = 0;
    let right = Math.max(...piles)
    let result = 0;

    while(left<=right){
        let mid = Math.floor((left+right)/2)
        if(isSolvable(piles,h,mid)){
            result=mid
            right=mid-1
        } else {
            left=mid+1
        }
    }

    return result;
};

function isSolvable(piles: number[], h:number, min:number){
    let sum = 0;
    for(let i = 0; i<piles.length;i++){
        sum+=Math.ceil(piles[i]/min)
    }
    return sum<=h
}