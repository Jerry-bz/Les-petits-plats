import recipes from '../Data/recettes.js';
import recipeFactory from '../Factories/factoryRecipe.js';
import { textIngredientRecipe } from '../Factories/factoryIngredient.js';

// Affichage de toutes les recettes
function displayRecipes() {
	const sectionDom = document.querySelector('.recipes');

	for (let recipe of recipes) {
		let definedObject = new Object();
		definedObject = {
			ingredient: null,
			quantity: null,
			unit: null,
		};

		if (recipe.ingredients[3] == undefined) {
			recipe.ingredients[3] = definedObject;
		}

		if (recipe.ingredients[4] == undefined) {
			recipe.ingredients[4] = definedObject;
		}

		if (recipe.ingredients[5] == undefined) {
			recipe.ingredients[5] = definedObject;
		}

		textIngredientRecipe(recipe, 0);
		textIngredientRecipe(recipe, 1);
		textIngredientRecipe(recipe, 2);
		textIngredientRecipe(recipe, 3);
		textIngredientRecipe(recipe, 4);
		textIngredientRecipe(recipe, 5);

		// Fonction d'usine qui affiche le HTML de la recette
		sectionDom.appendChild(recipeFactory(recipe));
	}

	return sectionDom;
}

export default displayRecipes;
