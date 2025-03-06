function lenLongestFibSubseq(arr: number[]): number {
    const memo = new Map()
    const exist = new Map()

    arr.map((val) => {
        exist.set(val,1);
    })

    let max = 0;

    for(let i = 0;i<arr.length-1;i++){
        const memo2 = new Map();
        for(let j = i+1;j<arr.length;j++){
            let sum = arr[i]+arr[j]
            if(exist.get(sum)==1){
                let prev = memo.get(twoValuesAsKey(arr[j],arr[i]))
                let setValue = prev?prev+1:3
                memo.set(twoValuesAsKey(sum,arr[j]),setValue);
                max=Math.max(setValue,max)
            }
            
        }
    }

    return max
};

const twoValuesAsKey = (val1:number,val2:number) => {
    return `${val1}-${val2}`
}