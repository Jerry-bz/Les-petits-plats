import { recipes } from '../DATA/recettes.js';
import { ingredientInnerHtml,textIngredient } from './functions.js'


// Affichage de la recette

function recipeDom(name,time,ingredients,description) {
  
    const article = document.createElement('article');
    article.classList.add('recipes-article');

    const articleBlock1 = document.createElement('div');
    articleBlock1.classList.add('recipes-article__block1');
    const articleBlock2 = document.createElement('div');
    articleBlock2.classList.add('recipes-article__block2');

    article.append(articleBlock1, articleBlock2);


    const sectionTitre = document.createElement('div');
    sectionTitre.classList.add('recipes-article__block2__titre');
    const sectionInformations = document.createElement('div');
    sectionInformations.classList.add('recipes-article__block2__informations');
    const titre = document.createElement('p');
    titre.textContent = name
    const logotime = document.createElement('p');
    logotime.innerHTML = `<img src="ASSETS/logo-time.svg"/><span> ${time} min <span/>`


    articleBlock2.append(sectionTitre)
    sectionTitre.append(titre, logotime)
    articleBlock2.append(sectionInformations)

    const ingredientsRecipe = document.createElement('p');
    ingredientsRecipe.classList.add('recipes-article__block2__informations__ingredients')
    const descriptionRecipe = document.createElement('p');
    descriptionRecipe.classList.add('recipes-article__block2__informations__description')

    sectionInformations.append(ingredientsRecipe, descriptionRecipe)


    const ingredient0 = document.createElement('div');
    const ingredient1 = document.createElement('div');
    const ingredient2 = document.createElement('div');
    const ingredient3 = document.createElement('div');
    const ingredient4 = document.createElement('div');
    const ingredient5 = document.createElement('div');

    const ingredientInnerHtml0 =  ingredientInnerHtml(ingredient0, ingredients, 0)
    const ingredientInnerHtml1 =  ingredientInnerHtml(ingredient1, ingredients, 1)
    const ingredientInnerHtml2 =  ingredientInnerHtml(ingredient2, ingredients, 2)
    const ingredientInnerHtml3 =  ingredientInnerHtml(ingredient3, ingredients, 3)
    const ingredientInnerHtml4 =  ingredientInnerHtml(ingredient4, ingredients, 4)
    const ingredientInnerHtml5 =  ingredientInnerHtml(ingredient5, ingredients, 5)


    ingredientsRecipe.append(ingredientInnerHtml0,ingredientInnerHtml1,ingredientInnerHtml2,ingredientInnerHtml3,ingredientInnerHtml4,ingredientInnerHtml5);
    

    const textDescription = description
    descriptionRecipe.append(textDescription)

    return article


}

// Affichage de toutes les recettes 

function recipesDom() {
for (let recipe of recipes) {
    const sectionDom = document.querySelector('.recipes')
    const { name, ingredients, time, description } = recipe

    let definedObject = new Object();
    definedObject = {
        ingredient: "",
        quantity: "",
        unit: "",
    }

    if (ingredients[3] == undefined) {
        recipe.ingredients[3] = definedObject;
    }

    if (ingredients[4] == undefined) {
        recipe.ingredients[4] = definedObject;
    }

    if (ingredients[5] == undefined) {
        recipe.ingredients[5] = definedObject;
    }

    textIngredient(ingredients, 0)
    textIngredient(ingredients, 1)
    textIngredient(ingredients, 2)
    textIngredient(ingredients, 3)
    textIngredient(ingredients, 4)
    textIngredient(ingredients, 5)  

    sectionDom.append(recipeDom(name,time,ingredients,description))

}
}

recipesDom()








