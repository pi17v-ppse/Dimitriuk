class Game {
    constructor(parrentElement, size = 4) {
        let gameFieldElement = document.createElement('div', { class: 'game' });
        parrentElement.appendChild(gameFieldElement);

        let headerElement = document.createElement('div', { class: 'header' });
        gameFieldElement.appendChild(headerElement);

        this.rating = 0;

        headerElement.innerHTML = 'Rating: ' + this.rating;

        let fieldElement = document.createElement('div', { class: 'field' });
        gameFieldElement.appendChild(fieldElement);

        for (let i = 0; i < size; i++) {
            for (let k = 0; k < size; k++) {
                let cellElement = document.createElement('div', { class: 'field' });

                if (Math.random() > 0.8) {
                    cellElement.innerHTML = Math.random() > 0.5 ? 4 : 2;
                }

                fieldElement.appendChild(cellElement);
            }
        }
    }
}