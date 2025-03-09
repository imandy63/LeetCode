function numberOfAlternatingGroups(colors: number[], k: number): number {
    let count = 0;
    let length = colors.length
    let i = 1;
    let current = 1;

    if(k>length){
        return 0;
    }

    while(i<length+k-1) {
        let prev = colors[i%length-1>=0?i%length-1:length-1]
        let cur=colors[i%length]
        if(cur!=prev){
            current++;
        } else {
            current=1;
        }
        if(current>=k){
            count++;
        }
        i++;
    }

    return count;
};