function maximumTop(nums: number[], k: number): number {
    if(nums.length===1 && k%2===1){
        return -1
    }

    if(k===0 && nums.length>0){
        return nums[0]
    }

    let n = nums.length

    if(k<=n){
        let topMost = k>=1 ? Math.max(...nums.splice(0,k-1)) : 0
        console.log(topMost)
        if(k<n && nums[1]>topMost){
            return nums[1]
        }
        return topMost
    }

    return Math.max(...nums)
};