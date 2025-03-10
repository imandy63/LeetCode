function countOfSubstrings(word: string, k: number): number {
    let i = 0;
    let map = new Map();
    let consonentCount = 0;
    let prev = 0;
    let flag = 0;
    let result = 0;

    while(i<word.length){
        if(isVowel(word[i])){
            let count = map.get(word[i]);
            if(count>=1){
                flag=0;
                map = new Map();
            } else if(!count){
                flag++;
                map.set(word[i],1);
            }
        } else {
            consonentCount++;
            if(consonentCount>k){
                while(isVowel(word[prev])){
                    map.set(word[prev],0);
                    flag--;
                    prev++
                }
                prev++
                consonentCount--;
            }
        }
        
        if(flag==5){
            if(consonentCount==k){
                    result++;
            }
        }

        i++;
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