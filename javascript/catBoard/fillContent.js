// Récupère les données de l'API et les affiche dans le DOM

export const fillSelectOptions = (races) => {
    races
    .filter(race => race.image) // Filtrer les races avec une image
    .map((race, i) => {
        let option = document.createElement('option');
        option.value = race.id;
        option.innerHTML = `${race.name}`;
        return option;
    }) // Map chaque race de races avec les options
    .forEach(option => {document.getElementById('race_select').appendChild(option);});

};
export const fillBoard= ({ //Destructuring de races
    image,
    description,
    origin,
    name,
    life_span,
    temperament,
    affection_level,
    child_friendly,
    dog_friendly,
    energy_level,
    intelligence,
    rare
}) => {
    //fill image
    const divImage = document.getElementById('divImage');
    const imageHTML = document.getElementById('image');
    imageHTML.src = image.url;
    imageHTML.alt = `chat de la race ${name}`;
    

    //fill description
    const descriptionHTML = document.getElementById('description');
    const originHTML = document.getElementById('origin');
    const nameHTML= document.getElementById('name');
    const life_spanHTML = document.getElementById('life_span');
    const temperamentHTML = document.getElementById('temperament');

    descriptionHTML.innerText = description;
    originHTML.innerText = `Origin : ${origin}`;
    nameHTML.innerText = `Breed : ${name}`;
    life_spanHTML.innerText = `Life span : ${life_span}`;
    temperamentHTML.innerText = `${temperament}`;

    //fill infos left

    const affection_levelHTML = document.getElementById('affection_level');
    const child_friendlyHTML = document.getElementById('child_friendly');
    const dog_friendlyHTML = document.getElementById('dog_friendly');
    affection_levelHTML.innerHTML = `Affection level : <span>${"❤️ ".repeat(affection_level)}</span>` ;
    child_friendlyHTML.innerHTML = `Child Friendly : <span>${"👶 ".repeat(child_friendly)}</span>` ;
    dog_friendlyHTML.innerHTML = `Dog Friendly : <span>${"🐕 ".repeat(dog_friendly)}</span>` ;

    //fill infos right
    const energy_levelHTML = document.getElementById('energy_level');
    const intelligenceHTML = document.getElementById('intelligence');
    const rareHTML = document.getElementById('rare');
    energy_levelHTML.innerHTML =  `Energy : <span>${"⚡ ".repeat(energy_level)}</span>` ;
    intelligenceHTML.innerHTML = `Intelligence : <span>${"🧠 ".repeat(intelligence)}</span>` ;
    rareHTML.innerHTML = `Rarity : <span>${"💎 ".repeat(rare)}</span>`;
    
    
}
export const fillBoxesImages = (image) => {

    const divImage = document.getElementById('divImage');
    const imageHTML = document.getElementById('image');
    imageHTML.src = image.url;
    imageHTML.alt = `chat de la race ${image.name}`;

}
export const fillCheckboxes = (images) => {

    const checkboxes = images.map((image) => {
    const checkbox = document.createElement("input");
    checkbox.type = "radio";
    checkbox.name = image.breeds[0].name;
    checkbox.value = image.id;
    checkbox.addEventListener('change', (imageSelected) => {
        if (imageSelected.target.checked) fillBoxesImages(image);         
    });
    return checkbox;
});
checkboxes.forEach(checkbox => divImage.appendChild(checkbox));

}