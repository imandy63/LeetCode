function sumOddLengthSubarrays(arr: number[]): number {
    let sum = 0;
    for(let i = 1;i<=arr.length;i+=2){
        for(let j = 0;j<arr.length-i+1;j++){
            let slice = arr.slice(j,i+j);
            sum+=sumOfArr(slice)
        }
    }
    return sum;
};

function sumOfArr(arr:number[]){
    let sum = 0;
    for(let i = 0; i< arr.length; i++){
        sum+=arr[i]
    }
    return sum;
}