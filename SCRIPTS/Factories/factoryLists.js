function formatText(text) {
	// Convertie la première lettre en majuscule
	text = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

	// normalize('NFD').replace(/[\u0300-\u036f]/g, '') : nettoyer les accents,
	return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

}

//  Listes (ingrédients, appareils, Ustensils)
function listsFactory(recipes) {
	//  Tableaux (ingredients, appareils, ustensiles)
	let listOfIngredients = new Array();
	let listOfDevices = new Array();
	let listOfUtensils = new Array();

	for (let recipe of recipes) {
		const { ingredients, appliance, ustensils } = recipe;

		// On ajoute les appareils 
		listOfDevices.push(formatText(appliance));

		// On ajoute les ustensiles
		for (let utensil of ustensils) {
			listOfUtensils.push(formatText(utensil));
		}

		// On ajoute les ingredients
		for (let element of ingredients) {
			listOfIngredients.push(formatText(element.ingredient));
		}
	}


	// Dédoublonner et trier par ordre alphabétique les tableaux
	let listIngredients = [...new Set(listOfIngredients)].sort();
	let listDevices = [...new Set(listOfDevices)].sort();
	let listUtensils = [...new Set(listOfUtensils)].sort();

	return { listIngredients, listDevices, listUtensils };
}

export { formatText, listsFactory };