function pivotArray(nums: number[], pivot: number): number[] {
    let flag = 0;
    let right = []
    let left = []
    let mid = []
    for(let i = 0; i<nums.length;i++){
        if(nums[i]>pivot){
            right.push(nums[i])
        } else if(nums[i]<pivot) {
            left.push(nums[i])
        } else {
            mid.push(nums[i])
        }
    }

    return [...left,...mid,...right]
};