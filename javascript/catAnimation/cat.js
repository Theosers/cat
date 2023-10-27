import {g_cat, createCatHTML, loading, addCatHeadImg, deleteHTML} from './catHTML.js'



const catAnimation = () => {
    const images = [];

    for (let i = 1; i <= 12; i++) {
    images.push(document.querySelector(`.image${i}`));
    }

    let currentIndex = 0;

    setInterval(() => {
    images[currentIndex].style.opacity = "0";
    currentIndex = (currentIndex + 1) % 12;
    images[currentIndex].style.opacity = "1";
    }, 40);

}


export const animationPromess = (data) => {

   
    

    return new Promise((resolve, reject) => {

        
        const cssLink = document.getElementById('css-link');      
        cssLink.href = '../../css/cat.css';
        createCatHTML();
        addCatHeadImg();
        loading();
        g_cat();
        catAnimation();
        
        setTimeout(() => {

            deleteHTML();         

            cssLink.href = '../../css/index.css';
            resolve(data); // Résoudre la promesse avec les données
        }, 10000);
        

        
    });
};