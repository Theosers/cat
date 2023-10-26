import {createCatBoard} from './javascript/catBoard/catBoardHTML.js'
import {fillSelectOptions, fillBoard, fillBoxesImages, fillCheckboxes} from './javascript/catBoard/fillContent.js'
import {handleRaceChange} from './javascript/catBoard/fonctions.js'

import {animationPromess} from './javascript/catAnimation/cat.js'

const headers = {
    'x-api-key': 'live_jcDjJ6ZZaDVRHsoqINGrojyN50prTA2d6U9Vi5a2noxSPuN6pWkQThT0fsj6FE9t'
}
let RACES = [];
let choixRace = null;

// ---- DEFAULT FETCH ----
fetch('https://api.thecatapi.com/v1/breeds', 
    {
        method: 'GET',
        headers: headers
    })
    .then(response => response.json())
    .then(data => {
        console.log(data[0]);
   //filtre SEULEMENT data qui contient un objet 'image
   data = data.filter(img=> img.image?.url!=null)
   console.log(data);
   let races = data;

   
   return animationPromess(races);
    })
    .then(data => {
        createCatBoard();
        fillSelectOptions(data); // On remplit notre barre déroulante
        fillBoard(data[0]); // On affiche les données du 1er chat par défaut
        RACES = data;
        choixRace = document.getElementById('race_select');
        choixRace.addEventListener('change', (event) => handleRaceChange(event, RACES));


    })
    .catch(err => console.log('Une erreur est survenue dans le fetch initial'));

