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
    //fill image
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

    //fill description
    const description = document.getElementById('description');
    const origin = document.getElementById('origin');
    const name = document.getElementById('name');
    const life_span = document.getElementById('life_span');
    const temperament = document.getElementById('temperament');

    description.innerText = races[0].description;
    origin.innerText = `Origin : ${races[0].origin}`;
    name.innerText = `Breed : ${races[0].name}`;
    life_span.innerText = `Life span : ${races[0].life_span}`;
    temperament.innerText = `${races[0].temperament}`;

    //fill infos left

    const affection_level = document.getElementById('affection_level');
    const child_friendly = document.getElementById('child_friendly');
    const dog_friendly = document.getElementById('dog_friendly');
    affection_level.innerText = `Affection level : ${races[0].affection_level}` ;
    child_friendly.innerText = `Child Friendly : ${races[0].child_friendly}` ;
    dog_friendly.innerText = `Dog Friendly : ${races[0].dog_friendly}` ;

    //fill infos right
    const energy_level = document.getElementById('energy_level');
    const intelligence = document.getElementById('intelligence');
    const rare = document.getElementById('rare');
    energy_level.innerText = `Energy : ${races[0].energy_level}` ;
    intelligence.innerText = `Intelligence : ${races[0].intelligence}` ;
    rare.innerText = `Rarity : ${races[0].rare}`;
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