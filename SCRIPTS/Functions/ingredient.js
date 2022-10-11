// Ingredient qui s'affiche sur le DOM
export function ingredientInnerHtml(ingredient, ingredients, value) {
    ingredient.innerHTML = `<span class="recipes-article--bold">${ingredients[value].ingredient}</span> <span>${ingredients[value].quantity}</span> <span>${ingredients[value].unit}</span><br>`
    console.log(ingredient, `ingredient ${value}`);

    return ingredient
}


// Modification du texte ingredient
export function textIngredient(element, value) {

    if (element.ingredients[value].ingredient == undefined) {
        element.ingredients[value].ingredient = ''
    } if (element.ingredients[value].quantity == undefined) {
        element.ingredients[value].quantity = ''
    } if (element.ingredients[value].unit == undefined) {
        element.ingredients[value].unit = ''
    } if (element.ingredients[value].unit == 'grammes') {
        element.ingredients[value].unit = 'g'
    } if (element.ingredients[value].unit == 'cuillères à soupe') {
        element.ingredients[value].unit = 'cuillères'
    } if (element.ingredients[value].ingredient && element.ingredients[value].quantity) {
        element.ingredients[value].ingredient = element.ingredients[value].ingredient + ":"
    }
}




