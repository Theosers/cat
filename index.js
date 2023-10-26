import {getblabla} from './catBoard.js'

const headers = {
    'x-api-key': 'live_jcDjJ6ZZaDVRHsoqINGrojyN50prTA2d6U9Vi5a2noxSPuN6pWkQThT0fsj6FE9t'
}

let RACES = [];

const fillSelectOptions = (races) => {
    races
    .filter(race => race.image) // Filtrer les races avec une image
    .map((race, i) => {
        let option = document.createElement('option');
        option.value = race.id;
        option.innerHTML = `${race.name}`;
        return option;
    }) // Map chaque race de races avec les options
    .forEach(option => {document.getElementById('race_select').appendChild(option);});

}
const fillBoard= (race) => {
    //fill image
    const divImage = document.getElementById('divImage');
    const image = document.getElementById('image');
    image.src = race.image.url;
    image.alt = `chat de la race ${race.name}`;
    console.log(race.image.width / race.image.height);
    let imageRatio = race.image.width / race.image.height;
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

    description.innerText = race.description;
    origin.innerText = `Origin : ${race.origin}`;
    name.innerText = `Breed : ${race.name}`;
    life_span.innerText = `Life span : ${race.life_span}`;
    temperament.innerText = `${race.temperament}`;

    //fill infos left

    const affection_level = document.getElementById('affection_level');
    const child_friendly = document.getElementById('child_friendly');
    const dog_friendly = document.getElementById('dog_friendly');
    affection_level.innerText = `Affection level : ${race.affection_level}` ;
    child_friendly.innerText = `Child Friendly : ${race.child_friendly}` ;
    dog_friendly.innerText = `Dog Friendly : ${race.dog_friendly}` ;

    //fill infos right
    const energy_level = document.getElementById('energy_level');
    const intelligence = document.getElementById('intelligence');
    const rare = document.getElementById('rare');
    energy_level.innerText = `Energy : ${race.energy_level}` ;
    intelligence.innerText = `Intelligence : ${race.intelligence}` ;
    rare.innerText = `Rarity : ${race.rare}`;
}

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
   return new Promise(resolve => {
    setTimeout(() => {
        console.log('Waited 3 seconds');
        resolve(data);
    }, 1000);
    });
    
    })
    .then(data => {
        fillSelectOptions(data); // On remplit notre barre déroulante
        fillBoard(data[0]); // On affiche les données du 1er chat par défaut
        RACES = data;
        
    })
    .catch(err => console.log('Une erreur est survenue dans le fetch initial'));


// ---- SELECT ON_CHANGE FETCH ----
const choixRace = document.getElementById('race_select');
choixRace.addEventListener('change', (selectedRace) => {
    
    let choix = selectedRace.target.value;

    const race = RACES.filter(race => race.id === choix);
        console.log('race :', race[0]);
        fillBoard(race[0]); 


    fetch(`https://api.thecatapi.com/v1/images/search?limit=5&breed_ids=${choix}`,
    {
        method: 'GET',
        headers: headers
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
         
        // recup le nombre d'images
        // on créer un bouton pour chaque image
        let images = data;
        console.log(images);
        // Créer un élément input de type "checkbox"
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "option1";
        checkbox.value = "option1";

        // Ajouter l'élément checkbox à l'élément label
        const divImage = document.getElementById('divImage');
        divImage.appendChild(checkbox);
        divImage.appendChild(checkbox2);


    })
    .catch(err => console.log('Une erreur est survenue dans le fetch de l\'image'));
});