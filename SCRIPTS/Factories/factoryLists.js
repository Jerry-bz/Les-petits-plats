//  Listes (ingrédients, appareils, Ustensils)
function listsFactory(recipes) {
	//  Tableaux (ingredients, appareils, ustensiles)
	let listOfIngredients = new Array();
	let listOfDevices = new Array();
	let listOfUtensils = new Array();

	for (let recipe of recipes) {
		const { ingredients, appliance, ustensils } = recipe;

		// On ajoute les appareils et ustensils au tableaux
		listOfDevices.push(appliance);
		listOfUtensils.push(ustensils);

		// On ajoute les ingredients au tableau
		for (let element of ingredients) {
			listOfIngredients == listOfIngredients.push(element.ingredient);
		}
	}

	// Aplatir le tableau multidimensionnel des ustensils
	listOfUtensils = listOfUtensils.flat();

	// Dédoublonner les tableaux
	let listIngredients = [...new Set(listOfIngredients)];
	let listDevices = [...new Set(listOfDevices)];
	let listUtensils = [...new Set(listOfUtensils)];

	return { listIngredients, listDevices, listUtensils };
}

export default listsFactory;
