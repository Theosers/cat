// Crée le div principal attaché au body
const body = document.querySelector('body');
const catBoard = document.createElement('div');
catBoard.setAttribute('id', 'catBoard');

// Crée l'élément <select> pour choisir la race de chat
const choixRaceSelect = document.createElement('select');
choixRaceSelect.setAttribute('name', 'race_select');
choixRaceSelect.setAttribute('id', 'race_select');
choixRaceSelect.onchange = function () {
    console.log('fonction sur le onchange');
    // showBreedImage(this.value);
};

//Crée l'élément div pour afficher l'image du chat
const divImage = document.createElement('div');
divImage.setAttribute('id', 'divImage');

const image = document.createElement('img');
image.setAttribute('alt', 'chat');
image.setAttribute('id', 'image');
divImage.appendChild(image);


//Crée l'élément div pour afficher la description du chat

//Crée l'élément div pour afficher les infos(css) du chat

// Ajoute le sélecteur au corps de la page
catBoard.appendChild(choixRaceSelect);
catBoard.appendChild(divImage);


body.appendChild(catBoard);

export const getblabla = () => {
    



}