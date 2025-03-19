function minOperations(nums: number[]): number {
    let result = 0;
    let length = nums.length;
    for(let i = 0; i<=length-3;i++){
        if(nums[i]===0){
            result++;
            for(let j = i;j<i+3;j++){
                nums[j] = 1 - nums[j]
            }
        }
    }
    console.log(nums)
    if(nums[length-2]!=0 && nums[length-1] !=0){
        return result;
    }
    return -1;
};