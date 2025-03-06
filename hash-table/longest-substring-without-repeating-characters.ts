function lengthOfLongestSubstring(s: string): number {
    let i = 0;
    let map = new Map()
    let max = 0;
    let count = 0;
    let result = ""

    while(i<s.length){
        if(result.indexOf(s[i])==-1){
            result+=s[i]
            count++;
            if(count>max){
                max=count;
            }
            i++;
        } else {
            let index=result.indexOf(s[i])
            result=result.slice(index+1)
            count=result.length;
        }
    }

    return max
};