function minZeroArray(nums: number[], queries: number[][]): number {
    let n=nums.length;
    let m = queries.length
    let left = 0;
    let right = m;
    let ans = -1
    
    while(left<=right){
        let mid = Math.ceil(left+(right-left)/2)
        if(!!isSolvable(nums,queries,mid)){
            ans=mid;
            right=mid-1;
        } else {
            left=mid+1
        }
    }

    return ans;
};

function isSolvable(nums, queries, k):boolean{
    let n = nums.length;
    let diff = Array(n+1).fill(0)

    for(let i = 0; i<k;i++){
        let l = queries[i][0];
        let r = queries[i][1];
        let val = queries[i][2];
        diff[l]-=val;
        if(r+1<n){
            diff[r+1]+=val
        }
    }

    let tmp = [...nums]

    let curr = 0;

    for(let i = 0; i<n;i++){
        curr+=diff[i];
        tmp[i]+=curr;
        if(tmp[i]>0){
            return false;
        }
    }

    return true;
}