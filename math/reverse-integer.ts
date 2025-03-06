function reverse(x: number): number {
    let result = 0;
    let pos = x>0?true:false;
    if(!pos){
        x=-x
    }
    while(x!=0){
        result*=10
        result+=x%10
        if((pos && result>=2**31-1) || result>=2**31){
            return 0;
        }
        x=Math.floor(x/10)
    }
    return pos?result:-result
};