function minimumRecolors(blocks: string, k: number): number {
    let min = 0;
    let cur = 0;
    let i = 0;

    for(i = 0;i<k;i++){
        if(blocks[i]==="W"){
            cur++;
        }
    }

    min = cur;
    i=1;
    while(i<blocks.length-k){
        if(blocks[i-1]==="W"){
            cur--;
        }
        if(blocks[i+k-1]==="W"){
            cur++;
        }

        if(cur==0){
            return 0;
        }

        if(cur<min){
            console.log(min)
            min=cur
        }

        i++;
    }

    return min

};