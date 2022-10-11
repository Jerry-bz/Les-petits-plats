import { recipes } from '/DATA/recettes.js';
import { textIngredient } from '/SCRIPTS/Functions/ingredient.js';
import { recipeFactory } from '../Functions/recipeFactory.js';


// Affichage de toutes les recettes

function displayRecipes() {
    for (let recipe of recipes) {

        let definedObject = new Object();
        definedObject = {
            ingredient: "",
            quantity: "",
            unit: "",
        }

        if (recipe.ingredients[3] == undefined) {
            recipe.ingredients[3] = definedObject;
        }

        if (recipe.ingredients[4] == undefined) {
            recipe.ingredients[4] = definedObject;
        }

        if (recipe.ingredients[5] == undefined) {
            recipe.ingredients[5] = definedObject;
        }

        textIngredient(recipe, 0)
        textIngredient(recipe, 1)
        textIngredient(recipe, 2)
        textIngredient(recipe, 3)
        textIngredient(recipe, 4)
        textIngredient(recipe, 5)

        // Fonction d'usine qui affiche le HTML de la recette
        const sectionDom = document.querySelector('.recipes')
        sectionDom.appendChild(recipeFactory(recipe))
    }
}


displayRecipes()















