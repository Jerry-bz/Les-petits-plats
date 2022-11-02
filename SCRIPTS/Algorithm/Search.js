import listsFactory from "../Factories/factoryLists.js";
import { displayListIngredients, displayListDevices, displayListUtensils } from "../Utils/displayLists.js";
import recipeFactory from "../Factories/factoryRecipe.js";
import searchButtonClick from "../Utils/displayTag.js"
import { displayNone, displayMessage } from "../Utils/displayMessage.js"

// Recherche Principale qui affiche les recettes 
const searchNavInputRecipe = (inputTextValue, allRecipes) => {
  let arrayResultSearch = [];
  if (inputTextValue.length < 3) {
    arrayResultSearch = allRecipes;
  }
  // Recherche active à partir de 3 caractères dans la barre de recherche principale
  if (inputTextValue.length >= 3) {
    arrayResultSearch = [];

    for (let recipe of allRecipes) {
      // Tableau qui récupère la saise du nom et de la decription en lien avec les données
      if (
        recipe.name.toLowerCase().includes(inputTextValue.toLowerCase()) ||
        recipe.description.toLowerCase().includes(inputTextValue.toLowerCase())
      ) {
        arrayResultSearch.push(recipe);
      } else {
        // Tableau qui récupère la saise des ingrédients en lien avec les données
        for (let element of recipe.ingredients) {
          if (
            element.ingredient
              .toLowerCase()
              .includes(inputTextValue.toLowerCase())
          ) {
            // Retourne le resultat de la saisie 
            arrayResultSearch.push(recipe);
          }
        }
      }
    }
     // Message "aucune recette";
     arrayResultSearch.length === 0 ? displayMessage() : displayNone();
  }

  return arrayResultSearch;
};


// Recherche de la saisie des Filtres (retourne un tableau des résultats de la saisie)
const searchButtonsInput = (inputValue, array) => {
  let arrayResult = [];
  if (inputValue.length >= 0) {
    for (let element of array) {
      if (element.toLowerCase().includes(inputValue.toLowerCase())) {
        arrayResult.push(element)
      }
    }
    return arrayResult
  }
}


// Recherche des recettes au click des filtres 
const filterTag = (recipes) => {
  let listbyingredient = [];
  let listbydevice = [];
  let listbyustensil = [];
  let listTagIngredient = [];
  let listTagDevices = [];
  let listTagUtensils = [];
  const tags = document.querySelectorAll(".selection__choice");

  if (tags.length != 0) {
    console.log(tags.length, 'longueur tableau');

    for (let tag of tags) {
      tag.className.includes("ingredient") && listTagIngredient.push(tag.textContent.toLowerCase())
      tag.className.includes("device") && listTagDevices.push(tag.textContent.toLowerCase())
      tag.className.includes("utensil") && listTagUtensils.push(tag.textContent.toLowerCase())
    }

    for (let recipe of recipes) {
      /*   filtre par ingredient    */
      let exist = 0;
      for (let ingredient of recipe.ingredients) {
        listTagIngredient.includes(ingredient.ingredient.toLowerCase()) && exist++
      }
      exist === listTagIngredient.length && listbyingredient.push(recipe);

      /*   filtre par device   */
      if (listTagDevices.length === 0) {
        listbydevice = recipes;
      } else {
        listTagDevices.includes(recipe.appliance.toLowerCase()) &&
          listbydevice.push(recipe);
      }

      /*   filtre par ustensile   */
      let existUst = 0;
      for (let ust of recipe.ustensils) {
        listTagUtensils.includes(ust.toLowerCase()) && existUst++;
      }
      existUst === listTagUtensils.length && listbyustensil.push(recipe);
    }

  }
  let result = [];
  for (let recipe of recipes) {
    if (
      listbydevice.includes(recipe) &&
      listbyustensil.includes(recipe) &&
      listbyingredient.includes(recipe)
    ) {
      result.push(recipe);
    }
  }

  console.log("resultat=", result);

  if (result.length === 0) {
    result = recipes;
  }

  const lists = listsFactory(result);

  const sectionRecipes = document.querySelector(".recipes");
  const listIng = document.querySelector(
    ".selection__button__list__ingredients"
  );
  const listDev = document.querySelector(".selection__button__list__devices");
  const listUten = document.querySelector(".selection__button__list__utensils");

  // Recupère les lists des recettes qui correspond à la saisie
  const listOfIngredients = lists.listIngredients;
  const listOfDevices = lists.listDevices;
  const listOfUtensils = lists.listUtensils;

  // Affichage des listes lors de la saisie
  listIng.innerHTML = "";
  displayListIngredients(listOfIngredients);

  listDev.innerHTML = "";
  displayListDevices(listOfDevices);

  listUten.innerHTML = "";
  displayListUtensils(listOfUtensils);
  sectionRecipes.innerHTML = "";

  for (let recipe of result) {
    sectionRecipes.appendChild(recipeFactory(recipe));
  }

  searchButtonClick();
}


export { searchNavInputRecipe, searchButtonsInput, filterTag };





