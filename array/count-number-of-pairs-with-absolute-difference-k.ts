function countKDifference(nums: number[], k: number): number {
    let count = 0
    for(var i = 0; i<nums.length-1; i++){
        for(var j = i+1;j<nums.length;j++){
            if(Math.abs(nums[i]-nums[j])==k){
                count++
            }
        }
    }
    return count
};