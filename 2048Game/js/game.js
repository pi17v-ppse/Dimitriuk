let createAndAppend = function ({className, parrentElement, value }, tag = 'div') {
    let element = document.createElement(tag);
    element.className = className;
    if (value) {
        element.innerHTML = value;
    }
    parrentElement.appendChild(element);

    return element;
}

class Game {
    constructor(parrentElement, size = 4) {
        let gameFieldElement = createAndAppend({
            className: 'game',
            parrentElement
        });

        let headerElement = createAndAppend({
            className: 'header',
            parrentElement: gameFieldElement
        });

        this.rating = 0;

        headerElement.innerHTML = 'Rating: ' + this.rating;

        let fieldElement = createAndAppend({
            className: 'field',
            parrentElement: gameFieldElement
        });

        for (let i = 0; i < size; i++) {
            for (let k = 0; k < size; k++) {
                let cellElement = createAndAppend({
                    className: 'cell',
                    parrentElement: fieldElement
                });  

                if (Math.random() > 0.8) {
                    cellElement.innerHTML = Math.random() > 0.5 ? 4 : 2;
                }
            }
        }
    }
}