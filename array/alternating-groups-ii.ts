function numberOfAlternatingGroups(colors: number[], k: number): number {
    let count = 0;
    let length = colors.length
    if(k>length){
        return 0;
    }
    for(let i = 0;i<length;i++){
        let current = 1;
        while(current<k){
            let index = i+current<length?i+current:i+current-length;
            if(colors[index]!=colors[index==0?length-1:index-1]){
                current++;
            } else {
                break;
            }
        }
        if(current==k){
            count++;
        }
    }

    return count;
};