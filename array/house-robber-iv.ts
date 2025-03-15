function minCapability(nums: number[], k: number): number {
    let right = Math.max(...nums)
    let left = 0;
    let mid = 0;

    let result = 0;

    while(left<=right){
        mid = Math.floor((right+mid)/2)
        if(isSolvable(nums,k,mid)){
            result=mid
            right=mid-1
        } else {
            left=mid+1
        }
    }


    return result
};

function isSolvable(nums:number[], k: number, n:number){
    let count = 0;
    for(let i = 0; i<nums.length;i++){
        if(nums[i]<=n){
            count++;
            i++;
        }
        if(count===k){
            return true;
        }
    }
    return false;
}