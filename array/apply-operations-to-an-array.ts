function applyOperations(nums: number[]): number[] {
    for(let i = 0; i<nums.length-1;i++){
        if(nums[i]===nums[i+1]){
            nums[i]=nums[i]+nums[i+1];
            nums[i+1]=0;
        }
    }

    let flag = 0;

    for(let i = 0; i<nums.length-1; i++){
        if(nums[i]==0){
            let j = i+1;
            while(j<=nums.length){
                if(j===nums.length){
                    flag=1;
                    break;
                } else if(nums[j]!=0){
                    nums[i]=nums[j]
                    nums[j]=0;
                    break;
                }
                j++;
            }
        }
        if(flag==1){
            break;
        }
    }

    return nums
};