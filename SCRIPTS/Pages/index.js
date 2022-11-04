import recipes from '../Data/recettes.js';
import displayRecipes from '../Utils/displayRecipes.js';
import { displayListIngredients, displayListDevices, displayListUtensils } from '../Utils/displayLists.js';
import { searchNavInputRecipe, searchButtonsInput } from '../Algorithm/Search.js';
import recipeFactory from '../Factories/factoryRecipe.js';
import listsFactory from '../Factories/factoryLists.js';
import searchButtonClick from '../Utils/displayTag.js';


// Affichage de toutes les recettes
displayRecipes();

// Affichage de la liste au click du bouton
displayListIngredients(listsFactory(recipes).listIngredients);
displayListDevices(listsFactory(recipes).listDevices);
displayListUtensils(listsFactory(recipes).listUtensils);

// Recherche principale 
function searchInputMain() {
	let inputText = document.querySelector('.header__input');
	const listIngredients = document.querySelector(
		'.selection__button__list__ingredients'
	);
	const listDevices = document.querySelector(
		'.selection__button__list__devices'
	);
	const listUtensils = document.querySelector(
		'.selection__button__list__utensils'
	);



	// Event input 
	inputText.addEventListener('input', (e) => {
    
		const sectionRecipes = document.querySelector('.recipes');

		// Recupere les recettes qui correspond a la saisie
		const recipeInput = searchNavInputRecipe(e.target.value, recipes);
		const lists = listsFactory(recipeInput);

		// Recupère les lists des recettes qui correspond à la saisie 
		const listOfIngredients = lists.listIngredients;
		const listOfDevices = lists.listDevices;
		const listOfUtensils = lists.listUtensils;

		// Affichage des listes lors de la saisie 
		listIngredients.innerHTML = '';
		displayListIngredients(listOfIngredients);

		listDevices.innerHTML = '';
		displayListDevices(listOfDevices);

		listUtensils.innerHTML = '';
		displayListUtensils(listOfUtensils);
		sectionRecipes.innerHTML = '';

		for (let recipe of recipeInput) {
			sectionRecipes.appendChild(recipeFactory(recipe));
		}

		searchButtonClick();
    
	});

}

searchInputMain();


// Recherche saisie bouttons 
const searchButtonInput = () => {
	const inputSearchIngredient = document.querySelector('.selection__button__ingredients__input');
	const inputSearchDevices = document.querySelector('.selection__button__devices__input');
	const inputSearchUtensils = document.querySelector('.selection__button__utensils__input');

	const listIngredient = document.querySelector('.selection__button__list__ingredients');
	const listDevices = document.querySelector('.selection__button__list__devices');
	const listUtensils = document.querySelector('.selection__button__list__utensils');

	// Input recherche boutton Ingrédient 
	inputSearchIngredient.addEventListener('input', (e) => {
		e.preventDefault();
		listIngredient.innerHTML = '';
		// Affichage de la liste ingredients en rapport à la saisie 
		displayListIngredients(
			searchButtonsInput(e.target.value, listsFactory(recipes).listIngredients)
		);
		searchButtonClick();
	});


	// Boutton Appareils
	inputSearchDevices.addEventListener('input', (e) => {
		e.preventDefault();
		listDevices.innerHTML = '';
		// Affichage de la liste appareils en rapport à la saisie 
		displayListDevices(
			searchButtonsInput(e.target.value, listsFactory(recipes).listDevices)
		);
		searchButtonClick();
	});


	// Boutton Ustensiles 
	inputSearchUtensils.addEventListener('input', (e) => {
		e.preventDefault();
		listUtensils.innerHTML = '';
		// Affichage de la liste ustensiles en rapport à la saisie 
		displayListUtensils(
			searchButtonsInput(e.target.value, listsFactory(recipes).listUtensils)
		);
		searchButtonClick();
	});

};

searchButtonInput();

// Affichage des recettes en fonction du Tag
searchButtonClick();
















