import {g_cat, createCatHTML, loading, addCatHeadImg} from './catHTML.js'



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

    createCatHTML();
    const cssLink = document.getElementById('css-link');
    

    return new Promise((resolve, reject) => {





        

        cssLink.href = '../../css/cat.css';
        addCatHeadImg();
        loading();
        g_cat();
        catAnimation();
        
        setTimeout(() => {
            console.log('Attente de 3 secondes terminée');


            
            
            







 
            cssLink.href = '../../css/index.css';
            resolve(data); // Résoudre la promesse avec les données
        }, 1000000);
        

        
    });
};