function numberOfSubstrings(s: string): number {
    let map = new Map()

    let i = 0;
    let result = 0;

    while(i<s.length){
        let cur = 0

        while(i+cur<s.length){

            map.set(s[i+cur],1);
            console.log({i,cur,size:map.size})
            if(map.size>3){
                break;
            }

            if(map.size===3){
                result++;
            }

            cur++;
        }
        map=new Map()
        i++;
    }

    return result;
};