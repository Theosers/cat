import {fillBoard} from './fillContent.js'
// ---- SELECT ON_CHANGE FETCH ----

export const handleRaceChange = (selectedRace, RACES) => {
    const choix = selectedRace.target.value;

    const race = RACES.find((r) => r.id === choix);

    if (race) {
        fillBoard(race);

        fetch(`https://api.thecatapi.com/v1/images/search?limit=5&breed_ids=${choix}`, {
            method: 'GET',
            headers: headers,
        })
            .then((response) => response.json())
            .then((data) => {
                const images = data;

                const previousCheckboxes = document.querySelectorAll('input[type="radio"]');
                previousCheckboxes.forEach((checkbox) => checkbox.remove());

                fillCheckboxes(images);
            })
            .catch((err) => console.log('Une erreur est survenue dans le fetch de l\'image'));
    }
};
