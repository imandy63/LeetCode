function closestPrimes(left: number, right: number): number[] {
    
    let sieve = Array(right).fill(1)

    let i = 2;

    let count = 2;

    sieve[0] = 0
    sieve[1] = 0

    let result = []

    while(i<=Math.sqrt(right)){
        if(sieve[i]==1){
            for(let k = i*2; k<right;k+=i){
                sieve[k] = 0;
            }
        }

        i++;
    }

    for(let j = left;j<right;j++){
        if(sieve[j]==1){
            result.push(j);
            count--;
        }

        if(count==0){
            return result;
        }
    }

    return [-1,-1]

};
