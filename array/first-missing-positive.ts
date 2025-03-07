function firstMissingPositive(nums: number[]): number {

    let i = 0;

    while(i<nums.length){
        if(nums[i]==i+1 || nums[i]<=-1 || nums[i]>nums.length){
            i++;
            continue;
        } else {
            let k = nums[i]-1;
            if(k>=nums.length || nums[k]==nums[i]){
                nums[i]=-1
            } else {
                let flag = nums[k];
                nums[k] = nums[i]
                nums[i] = flag;
            }
        }
    }

    for(i = 0;i<nums.length;i++){
        if(nums[i]>nums.length || nums[i]==-1){
            return i+1;
        }
    }

    return nums.length+1;

};