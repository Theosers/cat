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
const fillBoardByDefault = (races) => {
    const divImage = document.getElementById('divImage');
    const image = document.getElementById('image');
    image.src = races[0].image.url;
    image.alt = `chat de la race ${races[0].name}`;
    console.log(races[0].image.width / races[0].image.height);
    let imageRatio = races[0].image.width / races[0].image.height;

    divImage.style.width = `${imageRatio*300}px`;
    divImage.style.height = `${imageRatio*300}px`;
    image.style.width = `${imageRatio*300}px`;
    image.style.height = `${imageRatio*300}px`;
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
   fillBoardByDefault(races);
    
    })
    .catch(err => console.log('Une erreur est survenue'));


// yoo