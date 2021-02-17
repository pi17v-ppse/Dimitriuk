

class Cell {
    constructor(fieldElement) {
        let cellElement = createAndAppend({
            className: 'cell',
            this.element: fieldElement
        });

        if (Math.random() > 0.8) {
            this.element.innerHTML = Math.random() > 0.5 ? 4 : 2;
        }
    }
}