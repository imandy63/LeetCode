function findAllRecipes(recipes: string[], ingredients: string[][], supplies: string[]): string[] {
    let result:string[] = []
    let stop=false;
    let flag=0;
    let i = 0;

    while(i<recipes.length || !stop){

        if(i===recipes.length && !stop){
            i=0;
            flag=0;
        }

        if(result.includes(recipes[i])){
            i++;
            continue
        }

        let count = 0;

        for(let j = 0; j<ingredients[i].length;j++){
            if(supplies.includes(ingredients[i][j])){
                count++;
            }
        }

        console.log({count,length:ingredients[i].length, rep:recipes[i],i,stop})

        if(count==ingredients[i].length){
            result.push(recipes[i])
            supplies.push(recipes[i])
            if(stop){
                flag++;
                stop=false;
            }
        } else {
            if(flag==0){
                stop = true;
            } else {
                stop = false;
            }
        }

        if(result.length===recipes.length){
            break;
        }

        i++;
    }
    
    return result;
};