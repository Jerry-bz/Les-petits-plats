import {formatText,listsFactory} from '../Factories/factoryLists.js';
import { displayListIngredients, displayListDevices, displayListUtensils } from '../Utils/displayLists.js';
import recipeFactory from '../Factories/factoryRecipe.js';
import searchButtonClick from '../Utils/displayTag.js';
import { displayNone, displayMessage } from '../Utils/displayMessage.js';


// Recherche Principale qui affiche les recettes 
const searchNavInputRecipe = (inputTextValue, allRecipes) => {

	let arrayResultSearch = [];
	if (inputTextValue.length < 3) {
		arrayResultSearch = allRecipes;
	}

	// Recherche active à partir de 3 caractères dans la barre de recherche principale
	if (inputTextValue.length >= 3) {
		arrayResultSearch = [];

		allRecipes.forEach((recipe) => {
			if (formatText(recipe.name).toLowerCase().includes(inputTextValue.toLowerCase()) || formatText(recipe.description).toLowerCase().includes(inputTextValue.toLowerCase())) {
				arrayResultSearch.push(recipe);
			} else {
				recipe.ingredients.forEach((element) => {
					if (formatText(element.ingredient).toLowerCase().includes(inputTextValue.toLowerCase())) {
						// Retourne le resultat de la saisie 
						arrayResultSearch.push(recipe);
					}
				});
			}
		});

		// Message "aucune recette";
		arrayResultSearch.length === 0 ? displayMessage() : displayNone();
	}

	return arrayResultSearch;
};


// Recherche de la saisie des Filtres (retourne un tableau des résultats de la saisie)
const searchButtonsInput = (inputValue, array) => {
	let arrayResult = [];

	inputValue.length >= 0 && array.forEach(element => {
		element.toLowerCase().includes(inputValue.toLowerCase()) && arrayResult.push(element);
	});

	return arrayResult;
};


// Recherche des recettes au click des filtres 
const filterTag = (recipes) => {
	let listbyingredient = [];
	let listbydevice = [];
	let listbyustensil = [];
	let listTagIngredient = [];
	let listTagDevices = [];
	let listTagUtensils = [];
	const tags = document.querySelectorAll('.selection__choice');

	if (tags.length != 0) {

		tags.forEach(tag => {
			tag.className.includes('ingredient') && listTagIngredient.push(tag.textContent.toLowerCase());
			tag.className.includes('device') && listTagDevices.push(tag.textContent.toLowerCase());
			tag.className.includes('utensil') && listTagUtensils.push(tag.textContent.toLowerCase());
		});

		recipes.forEach((recipe) => {
			/*   filtre par ingredient    */
			let exist = 0;
			recipe.ingredients.forEach((element) => {
				listTagIngredient.includes(element.ingredient.toLowerCase()) && exist++;
			});
			exist === listTagIngredient.length && listbyingredient.push(recipe);

			/*   filtre par device   */
			listTagDevices.length === 0 ? listbydevice = recipes : listTagDevices.push(recipe);

			/*   filtre par ustensile   */
			let existUst = 0;
			recipe.ustensils.forEach((ust) => {
				listTagUtensils.includes(ust.toLowerCase()) && existUst++;
			});
			existUst === listTagUtensils.length && listbyustensil.push(recipe);
		});
	}

	let result = [];

	recipes.forEach((recipe) => {
		listbydevice.includes(recipe) && listbyustensil.includes(recipe) && listbyingredient.includes(recipe) && result.push(recipe);
	});

	// Si tableau vide on affiche toutes les recettes
	if (result.length === 0) {
		result = recipes;
	}

	const lists = listsFactory(result);

	const sectionRecipes = document.querySelector('.recipes');
	const listIng = document.querySelector(
		'.selection__button__list__ingredients'
	);
	const listDev = document.querySelector('.selection__button__list__devices');
	const listUten = document.querySelector('.selection__button__list__utensils');

	// Recupère les lists des recettes qui correspond à la saisie
	const listOfIngredients = lists.listIngredients;
	const listOfDevices = lists.listDevices;
	const listOfUtensils = lists.listUtensils;

	// Affichage des listes lors de la saisie
	listIng.innerHTML = '';
	displayListIngredients(listOfIngredients);

	listDev.innerHTML = '';
	displayListDevices(listOfDevices);

	listUten.innerHTML = '';
	displayListUtensils(listOfUtensils);
	sectionRecipes.innerHTML = '';

	result.forEach(recipe => {
		sectionRecipes.appendChild(recipeFactory(recipe));
	});

	searchButtonClick();
};


export { searchNavInputRecipe, searchButtonsInput, filterTag };





