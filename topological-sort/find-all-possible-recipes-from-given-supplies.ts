function findAllRecipes(recipes: string[], ingredients: string[][], supplies: string[]): string[] {
    let result:string[] = []
    let recipeToIngredients = new Map();
    let visited = new Map();
    let availableSupplies = new Set(supplies)

    for (let i = 0; i < recipes.length; i++) {
        recipeToIngredients.set(recipes[i], ingredients[i]);
    }
    
    for (let recipe of recipes) {
        canMake(recipe,availableSupplies,recipeToIngredients,visited,result);
    }

    return result;
};

const canMake = (recipe, availableSupplies,recipeToIngredients, visited,result) => {
    if(visited.has(recipe)){
        return visited.get(recipe)===1
    }

    if(availableSupplies.has(recipe)){
        return true;
    }

    if(!recipeToIngredients.has(recipe)){
        return false;
    }

    for(let ingredient of recipeToIngredients.get(recipe)){
        if(!canMake(ingredient, availableSupplies, recipeToIngredients,visited,result)){
            visited.set(recipe,-1)
            return false;
        }
    }

    visited.set(recipe,1);
    result.push(recipe);
    return true;
}