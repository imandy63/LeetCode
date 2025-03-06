function letterCombinations(digits: string): string[] {

    let i = 0;

    let result = []

    while(i<digits.length){
        let letters = getLetters(digits[i])
        if(letters.length==0) continue;
        
        if(result.length===0){
            result = letters
            i++;
            continue;
        }

        let newArr=[]

        for(let j=0;j<result.length;j++){
            for(let k=0;k<letters.length;k++){
                newArr.push(result[j]+letters[k])
            }
        }

        result=newArr

        i++;
    }

    return result

};

function getLetters(digit:string){
    switch(digit){
        case '1':
            return []
        case '2':
            return ['a','b','c']
        case '3':
            return ['d','e','f']
        case '4':
            return ['g','h','i']
        case '5':
            return ['j','k','l']
        case '6':
            return ['m','n','o']
        case '7':
            return ['p','q','r','s']
        case '8':
            return ['t','u','v']
        case '9':
            return ['w','x','y','z']
        default:
            return []
    }
}