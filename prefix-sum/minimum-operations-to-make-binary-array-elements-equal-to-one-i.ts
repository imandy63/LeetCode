function minOperations(nums: number[]): number {
    let result = 0;
    let length = nums.length;
    for(let i = 0; i<=length-3;i++){
        if(nums[i]===0){
            result++;
            nums[i] = 1 - nums[i]
            nums[i+1] = 1 - nums[i+1]
            nums[i+2] = 1 - nums[i+2]
        }
    }
    if(nums[length-2]!=0 && nums[length-1] !=0){
        return result;
    }
    return -1;
};