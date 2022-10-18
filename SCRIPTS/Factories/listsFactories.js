import { recipes } from '../Data/recettes.js';

//  Listes (ingrédients, appareils, Ustensils)
function listsFactories() {
    
    //  Tableaux (ingredients, appareils, ustensiles)
    let listOfIngredients = new Array
    let listOfDevices = new Array
    let listOfUtensils = new Array

        for (let recipe of recipes) {
            const { ingredients, appliance, ustensils } = recipe

            // On ajoute les appareils et ustensils au tableaux 
            listOfDevices.push(appliance)
            listOfUtensils.push(ustensils)

            // On ajoute les ingredients au tableau
            for (let element of ingredients) {
                listOfIngredients == listOfIngredients.push(element.ingredient);
            }

    }

    // Aplatir le tableau multidimensionnel des ustensils
    listOfUtensils = listOfUtensils.reduce(function (prev, curr) {
        return prev.concat(curr)
    })

    return { listOfIngredients, listOfDevices, listOfUtensils}
}



// Méthode pour filtrer les données double de chaque tableau
function filterArray(array) {
    const arrayList = array.filter(function (element, position) {
        return array.indexOf(element) == position;
    })

    return arrayList
}


// Supression des elements double pour chaque tableau

 let listOfIngredients = listsFactories().listOfIngredients;
 let listOfDevices = listsFactories().listOfDevices;
 let listOfUtensils = listsFactories().listOfUtensils;


 listOfIngredients = filterArray(listOfIngredients)
 listOfDevices = filterArray(listOfDevices)
 listOfUtensils = filterArray(listOfUtensils)

 export {listOfIngredients, listOfDevices, listOfUtensils }