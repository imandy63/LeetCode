function numOfSubarrays(arr: number[]): number {
    let oddCount = 0, prefixSum = 0;
    for (let a of arr) {
        prefixSum += a;
        oddCount += prefixSum % 2;
        console.log(oddCount)
    }
    oddCount += (arr.length - oddCount) * oddCount;
    return oddCount % 1_000_000_007;
};