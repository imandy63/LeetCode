function countOfSubstrings(word: string, k: number): number {
    let map = new Map();
    let consonantCount = 0;

    let flag = 0;
    let result = 0;

    let start = 0;
    let end = 0;

    while(end<=word.length-1){
        if(isVowel(word[end])){
            let count = map.get(word[end]);
            map.set(word[end],count?count+1:1)
            if(!count || count ==0) {
                flag++;
            }
        } else {
            consonantCount++;
            while(consonantCount>k){
                if(!isVowel(word[start])){
                    consonantCount--;
                } else {
                    let cur = map.get(word[start]);
                    map.set(word[start],cur-1)
                    if(cur==1){
                        flag--;
                    }
                }
                start++;
            }
        }
        if(flag==5){
            if(consonantCount==k){
                    result++;
            }
        }

        end++;
        while(end==word.length && isVowel(word[start]) && flag==5 && consonantCount==k){
            if(!isVowel(word[start])){
                consonantCount--;
            } else {
                let cur = map.get(word[start]);
                if(cur==1){
                    flag--;
                }
                map.set(word[start],cur-1)
            }
            start++;
            if(flag<5 || consonantCount<k){
                break;
            }
            result++;
        }
    }
    return result
}

function isVowel(word: string){
    switch(word){
        case 'a':
            return true;
        case 'e':
            return true;
        case 'i':
            return true;
        case 'o':
            return true;
        case 'u':
            return true;
        default:
            return false;
    }
}