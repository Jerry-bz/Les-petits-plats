// Affichage des ingrédients sur la page d'acceuil lors du click sur le bouton
function displayListIngredients(listOfIngredients) {
    for (let element of listOfIngredients) {
        const ingredient = document.createElement("li");
        ingredient.classList.add("ingredients__list");
        ingredient.textContent = element;
        const listIngredients = document.querySelector(
            ".selection__button__list__ingredients"
        );
        listIngredients.append(ingredient);
    }

    const buttonIngredients = document.querySelector(
        ".selection__button--ingredients"
    );
    const containerListIngredients = document.querySelector(
        ".selection__options__button__ingredients"
    );
    const closeButton = document.querySelector(".selection__button__ingredients")
        .children[1];
    buttonIngredients.addEventListener("click", () => {
        buttonIngredients.style.display = "none";
        containerListIngredients.style.display = "block";
    });
    closeButton.addEventListener("click", () => {
        const containerListIngredients = document.querySelector(
            ".selection__options__button__ingredients"
        );
        buttonIngredients.style.display = "block";
        buttonIngredients.style.display = "flex";
        containerListIngredients.style.display = "none";
    });

    return listOfIngredients;
}

// Affichage des appareils sur la page d'acceuil lors du click du bouton
function displayListDevices(listOfDevices) {
    for (let element of listOfDevices) {
        const listDevices = document.querySelector(
            ".selection__button__list__devices"
        );
        const device = document.createElement("li");
        device.classList.add("devices__list");
        device.textContent = element;
        listDevices.appendChild(device);
    }

    const buttonDevices = document.querySelector(".selection__button--devices");
    const containerListDevices = document.querySelector(
        ".selection__options__button__devices"
    );
    const closeButton = document.querySelector(".selection__button__devices")
        .children[1];
    buttonDevices.addEventListener("click", () => {
        buttonDevices.style.display = "none";
        containerListDevices.style.display = "block";
        containerListDevices.style.marginLeft = "5%";
    });
    closeButton.addEventListener("click", () => {
        buttonDevices.style.display = "flex";
        containerListDevices.style.display = "none";
    });

    return listOfDevices;
}

//  Affichage des ustensils lors du click du bouton
function displayListUtensils(listOfUtensils) {
    for (let element of listOfUtensils) {
        const listUtensils = document.querySelector(
            ".selection__button__list__utensils"
        );
        const utensil = document.createElement("li");
        utensil.classList.add("utensils__list");
        utensil.textContent = element;
        listUtensils.appendChild(utensil);
    }

    const buttonUtensils = document.querySelector(".selection__button--utensils");
    const containerListUtensils = document.querySelector(
        ".selection__options__button__utensils"
    );
    const closeButton = document.querySelector(".selection__button__utensils")
        .children[1];
    buttonUtensils.addEventListener("click", () => {
        buttonUtensils.style.display = "none";
        containerListUtensils.style.display = "block";
        containerListUtensils.style.marginLeft = "5%";
    });
    closeButton.addEventListener("click", () => {
        buttonUtensils.style.display = "flex";
        containerListUtensils.style.display = "none";
    });

    return listOfUtensils;
}

export { displayListIngredients, displayListDevices, displayListUtensils };
