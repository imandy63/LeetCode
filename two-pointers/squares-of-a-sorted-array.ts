function sortedSquares(nums: number[]): number[] {

    let left = 0, right = nums.length-1
    let result = []

    while(left<=right){
        let leftSquare = nums[left] ** 2;
        let rightSquare = nums[right] ** 2;

        if(leftSquare>rightSquare){
            result.unshift(leftSquare);
            left++;
        } else {
            result.unshift(rightSquare);
            right--;
        }
    }

    return result
};