function twoSum(nums: number[], target: number): number[] {
    let max;
    for(var i = 0; i<nums.length-1;i++){
        max=nums[i]
        let index = nums.indexOf(target-max,i+1)
        if(index!=-1){
            return [i,index]
        }
    }
    return []
};