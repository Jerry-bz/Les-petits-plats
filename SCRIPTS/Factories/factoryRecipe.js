import { ingredientRecipe } from "./factoryIngredient.js";

// Fonction d'usine qui retourne l'affichage de la recette
function recipeFactory(data) {
  const { name, ingredients, time, description } = data;

  const article = document.createElement("article");
  article.classList.add("recipes-article");

  const articleBlock1 = document.createElement("div");
  articleBlock1.classList.add("recipes-article__block1");
  const articleBlock2 = document.createElement("div");
  articleBlock2.classList.add("recipes-article__block2");

  article.append(articleBlock1, articleBlock2);

  const sectionTitre = document.createElement("div");
  sectionTitre.classList.add("recipes-article__block2__titre");
  const sectionInformations = document.createElement("div");
  sectionInformations.classList.add("recipes-article__block2__informations");
  const titre = document.createElement("p");
  titre.textContent = name;
  const logotime = document.createElement("p");
  logotime.innerHTML = `<img src="ASSETS/logo-time.svg"/><span> ${time} min <span/>`;

  articleBlock2.append(sectionTitre);
  sectionTitre.append(titre, logotime);
  articleBlock2.append(sectionInformations);

  const ingredientsRecipe = document.createElement("p");
  ingredientsRecipe.classList.add(
    "recipes-article__block2__informations__ingredients"
  );
  const descriptionRecipe = document.createElement("p");
  descriptionRecipe.classList.add(
    "recipes-article__block2__informations__description"
  );

  sectionInformations.append(ingredientsRecipe, descriptionRecipe);

  let ingredient0 = document.createElement("div");
  let ingredient1 = document.createElement("div");
  let ingredient2 = document.createElement("div");
  let ingredient3 = document.createElement("div");
  let ingredient4 = document.createElement("div");
  let ingredient5 = document.createElement("div");

  ingredient0 = ingredientRecipe(ingredient0, ingredients, 0);
  ingredient1 = ingredientRecipe(ingredient1, ingredients, 1);
  ingredient2 = ingredientRecipe(ingredient2, ingredients, 2);
  ingredient3 = ingredientRecipe(ingredient3, ingredients, 3);
  ingredient4 = ingredientRecipe(ingredient4, ingredients, 4);
  ingredient5 = ingredientRecipe(ingredient5, ingredients, 5);

  ingredientsRecipe.append(
    ingredient0,
    ingredient1,
    ingredient2,
    ingredient3,
    ingredient4,
    ingredient5
  );

  const textDescription = description;
  descriptionRecipe.append(textDescription);

  return article;
}

export default recipeFactory;
