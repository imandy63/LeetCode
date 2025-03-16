function repairCars(ranks: number[], cars: number): number {
    let right = Math.max(...ranks) * (cars ** 2);
    let left = 0;
    let result = -1;

    while(left<=right){
        let mid = Math.floor((left+right)/2)
        if(isSolvable(ranks, cars, mid)){
            result=mid
            right=mid-1
        } else {
            left=mid+1
        }
    }

    return result;
};

function isSolvable(ranks:number[], cars:number,max:number){
    let result = 0;
    for(let i = 0; i<ranks.length;i++){
        result+=Math.floor(Math.sqrt(max/ranks[i]))
    }
    return result>=cars
}