

export const createCatHTML = () => {
// Créer le conteneur d'images
const imageContainer = document.createElement('div');
imageContainer.classList.add('image-container');

// Créer 12 images et les ajouter au conteneur
for (let i = 1; i <= 12; i++) {
    const image = document.createElement('div');
    image.classList.add('image', `image${i}`);
    imageContainer.appendChild(image);
}

// Ajouter le conteneur au corps du document
document.body.appendChild(imageContainer);
}