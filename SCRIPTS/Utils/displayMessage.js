// Affichage message "Aucune recette"
const displayMessage = () => {
    const message = document.querySelector('.selection__message');
    message.innerHTML = "<p> « Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc. </p>";
}

// Aucun message
const displayNone = () => {
    const message = document.querySelector('.selection__message');
    message.innerHTML = "";
}

export  { displayMessage, displayNone };