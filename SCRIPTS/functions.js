// Ingredient qui s'affiche sur le DOM
export function ingredientInnerHtml(ingredient, ingredients, value) {
    ingredient.innerHTML = `<span class="recipes-article--bold">${ingredients[value].ingredient}</span> <span>${ingredients[value].quantity}</span><span>${ingredients[value].unit}</span><br>`
    console.log(ingredient, `ingredient ${value}`);

    return ingredient
}


 // Modification du texte ingredient
export function textIngredient(ingredients, value) {

    if (ingredients[value].ingredient == undefined) {
        ingredients[value].ingredient = ''
    } if (ingredients[value].quantity == undefined) {
        ingredients[value].quantity = ''
    } if (ingredients[value].unit == undefined) {
        ingredients[value].unit = ''
    } if (ingredients[value].unit == 'grammes') {
        ingredients[value].unit = 'g'
    } if (ingredients[value].unit == 'cuillères à soupe') {
        ingredients[value].unit = 'cuillères'
    } if (ingredients[value].ingredient && ingredients[value].quantity) {
        ingredients[value].ingredient = ingredients[value].ingredient + ":"
    } 
}
 

 

