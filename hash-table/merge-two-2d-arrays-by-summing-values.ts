function mergeArrays(nums1: number[][], nums2: number[][]): number[][] {
    let i = 0;
    let j = 0;

    let result = []

    while(i<nums1.length && j<nums2.length){

        while(i<nums1.length&&nums1[i][0]<nums2[j][0]){
            result.push(nums1[i])
            i++;
        }
        if(i>=nums1.length){
            break;
        }
        while(j<nums2.length && nums2[j][0]<nums1[i][0]){
            result.push([nums2[j][0],nums2[j][1]])
            j++;
        }
        if(j>=nums2.length){
            break;
        }
        if(i<nums1.length && j<nums2.length && nums1[i][0]===nums2[j][0]){
            result.push([nums1[i][0],nums1[i][1]+nums2[j][1]])
            i++;
            j++;
        }
    }

    while(i<nums1.length){
        result.push(nums1[i])
        i++;
    }

    while(j<nums2.length){
        result.push(nums2[j]);
        j++;
    }

    return result
};