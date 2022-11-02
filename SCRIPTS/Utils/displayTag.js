import { filterTag } from "../Algorithm/Search.js";
import recipes from "../Data/recettes.js";

//  Tag HTML
const tagDom = (text,color) => {
    const sectionTag = document.querySelector('.selection__tag');
    const selectionChoice = document.createElement('div')
    selectionChoice.style.display = "flex";
    selectionChoice.style.background = color;
    selectionChoice.style.margin = "0.5%"
    if (color == '#3282F7') {
        selectionChoice.setAttribute('class','selection__choice ingredient')
    } else if (color == "#68D9A4") {
        selectionChoice.setAttribute('class','selection__choice device')
    } else if (color == "#ED6454") {
        selectionChoice.setAttribute('class','selection__choice utensil')
    }
    sectionTag.appendChild(selectionChoice)
    const tag = document.createElement('p');
    tag.textContent = text
    const closeTag = document.createElement('img');
    closeTag.setAttribute('src', 'ASSETS/logo-close.svg')
    selectionChoice.append(tag, closeTag);
    closeTag.addEventListener('click', () => {
        selectionChoice.remove();
        filterTag(recipes)
    })
};


    // Filtre les recettes en fonction du tag
    const searchButtonClick = () => {
    const sectionListIngredients = document.querySelectorAll('.ingredients__list')
    const sectionListDevices = document.querySelectorAll('.devices__list')
    const sectionListUtensils = document.querySelectorAll('.utensils__list')
  
    
    for (let ingredient of sectionListIngredients) {
      ingredient.addEventListener('click', () => {
        tagDom(ingredient.textContent, '#3282F7')
        filterTag(recipes)
      })
    }
  
    for (let device of sectionListDevices) {
      device.addEventListener('click', () => {
        tagDom(device.textContent, '#68D9A4')
        filterTag(recipes)
      })
    }
  
    for (let utensil of sectionListUtensils) {
      utensil.addEventListener('click', () => {
        tagDom(utensil.textContent, '#ED6454')
        filterTag(recipes)
      })
    }
  }
  

export default searchButtonClick;