
// Crée la structure HTML de la page

export const createCatBoard = () => {

    // Crée le div principal & titre attaché au body
const body = document.querySelector('body');
const catBoard = document.createElement('div');
catBoard.setAttribute('id', 'catBoard');
const titre = document.createElement('h1');
titre.setAttribute('id', 'titre');
titre.textContent = 'Catastrophe';
const titleContainer = document.createElement('div');
titleContainer.setAttribute('id', 'titleContainer');
const titleImageDiv = document.createElement('div');
titleImageDiv.setAttribute('id', 'titleImageDiv');
const titleImageDivDeux = document.createElement('div');
titleImageDivDeux.setAttribute('id', 'titleImageDivDeux');
// Crée l'élément <select> pour choisir la race de chat
const choixRaceSelect = document.createElement('select');
choixRaceSelect.setAttribute('name', 'race_select');
choixRaceSelect.setAttribute('id', 'race_select');


// crée le div picture = infosLeft + image + infosRight
const divPicture = document.createElement('div');
divPicture.setAttribute('id', 'divPicture');

//Crée l'élément div pour afficher l'image du chat
const divImage = document.createElement('div');
divImage.setAttribute('id', 'divImage');

const image = document.createElement('img');
image.setAttribute('alt', 'chat');
image.setAttribute('id', 'image');
divImage.appendChild(image);


//Crée l'élément div pour afficher les infos(css) du chat 
//GAUCHE => Amour

const divInfosLeft = document.createElement('div');
divInfosLeft.setAttribute('id', 'divInfosLeft');

const affection_level = document.createElement('p'); // coeur
affection_level.setAttribute('id', 'affection_level');
const child_friendly = document.createElement('p'); // enfant + coeur
child_friendly.setAttribute('id', 'child_friendly');
const dog_friendly = document.createElement('p'); // chien + coeur
dog_friendly.setAttribute('id', 'dog_friendly');

divInfosLeft.appendChild(affection_level);
divInfosLeft.appendChild(child_friendly);
divInfosLeft.appendChild(dog_friendly);
//Crée l'élément div pour afficher les infos(css) du chat 
//DROITE => Valeurs

const divInfosRight = document.createElement('div');
divInfosRight.setAttribute('id', 'divInfosRight');

const energy_level = document.createElement('p'); // eclair
energy_level.setAttribute('id', 'energy_level');
const intelligence = document.createElement('p'); // cerveau
intelligence.setAttribute('id', 'intelligence');
const rare = document.createElement('p'); // diamant
rare.setAttribute('id', 'rare');

divInfosRight.appendChild(energy_level);
divInfosRight.appendChild(intelligence);
divInfosRight.appendChild(rare);

divPicture.appendChild(divInfosLeft);
divPicture.appendChild(divImage);
divPicture.appendChild(divInfosRight);

//Crée l'élément div pour afficher la description du chat

const divDescription = document.createElement('div');
divDescription.setAttribute('id', 'divDescription');

const description = document.createElement('p');
description.setAttribute('id', 'description');

const origin = document.createElement('p');
origin.setAttribute('id', 'origin');

const name = document.createElement('p');
name.setAttribute('id', 'name');

const life_span = document.createElement('p');
life_span.setAttribute('id', 'life_span');

const temperament = document.createElement('p');
temperament.setAttribute('id', 'temperament');

const divDescriptionEntete = document.createElement('div');
divDescriptionEntete.setAttribute('id', 'divDescriptionEntete');

const divDescriptionBody = document.createElement('div');
divDescriptionBody.setAttribute('id', 'divDescriptionBody');

divDescriptionEntete.appendChild(name);
divDescriptionEntete.appendChild(origin);
divDescriptionEntete.appendChild(life_span);

divDescriptionBody.appendChild(temperament);
divDescriptionBody.appendChild(description);

divDescription.appendChild(divDescriptionEntete);
divDescription.appendChild(divDescriptionBody);


//Footer

const footer = document.createElement('footer');
footer.setAttribute('id', 'footer');
const footerText = document.createElement('p');
footerText.setAttribute('id', 'footerText');
footerText.innerHTML = `<h2>Made with love by Théophile SERS </h2>
                        <p>Adresse : 123 Rue des Merveilles, Ville</p>
                        <p>Téléphone : +33 1 23 45 67 89</p>
                        <p>Email : theophile.sers@gmail.com </p>`;

const footerImage = document.createElement('img');
footerImage.setAttribute('id', 'footerImage');
footer.appendChild(footerText);
footer.appendChild(footerImage);

// Ajoute le sélecteur au corps de la page
titleContainer.appendChild(titleImageDiv);
titleContainer.appendChild(titre);
titleContainer.appendChild(titleImageDivDeux);
body.appendChild(titleContainer);
body.appendChild(catBoard);

catBoard.appendChild(choixRaceSelect);
catBoard.appendChild(divPicture);

catBoard.appendChild(divDescription);

catBoard.appendChild(footer);
}