function checkPowersOfThree(n: number): boolean {

    while(n>0){
        let r = n%3

        if(r==2){
            return false;
        }

        n=(n-r)/3;
    }

    return true
};