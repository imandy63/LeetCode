function numberOfSubstrings(s: string): number {
    let map = new Map()
    let subMap;

    let result = 0;

    let start = 0;
    let end = 0;

    while(end<s.length){
        map.set(s[end],map.get(s[end])?map.get(s[end])+1:1);

        if(map.size===3){
            subMap = new Map(map)
            let i = 0;
            while(subMap.size==3 && i<end){
                result++;
                let count = subMap.get(s[start+i])

                if(count==1){
                    break;
                }

                subMap.set(s[start+i],count-1);
                i++
            }
        }

        while(map.size>3){
            let count = map.get(s[start])
            if(count==1){
                map.delete(s[start])
            } else {
                map.set(s[start],count-1)
            }
            start++;
        }

        end++;
    }

    return result;
};