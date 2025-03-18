function longestNiceSubarray(nums: number[]): number {
    let start = 0;
    let result = 1;
    let temp = 0;
    let i = 1;
    while(i<nums.length){
        let flag = 0;
        for(let j = start;j<i;j++){
            let bw = nums[i] & nums[j]
            if(bw!=0){
                flag++;
                break;
            }
        }
        if(flag==0){
            temp=temp<=1?2:temp+1;
            if(temp>result){
                result=temp;
            }
            i++;
        } else {
            start++;
            temp=temp<=1?0:temp-1
            if(temp==0){
                i++;
            }
        }
    }

    return result;
};