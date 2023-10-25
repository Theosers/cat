import {getblabla} from './catBoard.js'

const headers = {
    'x-api-key': 'live_jcDjJ6ZZaDVRHsoqINGrojyN50prTA2d6U9Vi5a2noxSPuN6pWkQThT0fsj6FE9t'
}


const fillSelectOptions = (races) => {
    races
    .filter(race => race.image) // Filtrer les races avec une image
    .map((race, i) => {
        let option = document.createElement('option');
        option.value = i;
        option.innerHTML = `${race.name}`;
        return option;
    }) // Map chaque race de races avec les options
    .forEach(option => {document.getElementById('race_select').appendChild(option);});

}



fetch('https://api.thecatapi.com/v1/breeds',
    {
        method: 'GET',
        headers: headers
    })
    .then(response => response.json())
    .then(data => {

   //filtre SEULEMENT data qui contient un objet 'image
   data = data.filter(img=> img.image?.url!=null)
   console.log(data);
   let races = data;
   fillSelectOptions(races);
    
    })
    .catch(err => console.log('Une erreur est survenue'));


// yoo