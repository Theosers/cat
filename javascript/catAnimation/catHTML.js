


// Create HTML for cat animation & his bar (div)
export const createCatHTML = () => {
const imageContainer = document.createElement('div');
imageContainer.classList.add('image-container');

for (let i = 1; i <= 12; i++) {
    const image = document.createElement('div');
    image.classList.add('image', `image${i}`);
    imageContainer.appendChild(image);
}
document.body.appendChild(imageContainer);
}



// Ajout du texte Loading... dans le DOM
export const loading = () => {
    const loading = document.createElement('div');
    loading.id = 'loading';
    loading.innerHTML = 'Loading<span class="dot">.</span><span class="dot">.</span><span class="dot">.</span>';

    document.body.appendChild(loading);
}



// Ajout de l'image qui gratte le G de 'loading'
export const g_cat = () => {
    const catHeadDiv = document.createElement('div');
    catHeadDiv.id = 'catHeadDiv';
    document.body.appendChild(catHeadDiv);

    catHeadDiv.addEventListener('click', () => {
        catHeadDiv.classList.add('animate');
        catHeadDiv.addEventListener('animationend', () => {
            catHeadDiv.classList.remove('animate');
        }, { once: true });
    });
    
}
//  Ajout de l'image de la têteDeChat
export const addCatHeadImg = () => {
    const catFace = document.createElement('div');
    catFace.id = 'catFace';
    document.body.appendChild(catFace);
}
