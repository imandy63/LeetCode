function divideArray(nums: number[]): boolean {
    let map = new Map();

    for(let i = 0; i<nums.length;i++){
        if(map.get(nums[i])){
            map.delete(nums[i])
        } else {
            map.set(nums[i],1)
        }
    }

    return map.size===0
};