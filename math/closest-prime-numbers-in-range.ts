function closestPrimes(left: number, right: number): number[] {
    
    let sieve = Array(right+1).fill(1)

    let i = 2;

    let count = 2;

    sieve[0] = 0
    sieve[1] = 0

    let result = []

    while(i<=Math.sqrt(right)){
        if(sieve[i]==1){
            for(let k = i*2; k<=right;k+=i){
                sieve[k] = 0;
            }
        }

        i++;
    }

    let min = right
    let current = 0

    for(let j = left; j<=right;j++){
        if(sieve[j]==1){
            if(current == 0){
                current=j
            } else if(j-current<min){
                min = j-current
                result = [current,j]
            }
            current=j
        }
    }

    if(min==right){
        return [-1,-1]
    } else {
        return result
    }

}
