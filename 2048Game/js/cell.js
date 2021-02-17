

class Cell {
    constructor(fieldElement) {
        let cellElement = createAndAppend({
            className: 'cell',
            this.element: fieldElement
        });

        if (Math.random() > 0.8) {
            this.value = Math.random() > 0.5 ? 4 : 2;
        }

        this.element.onclick = function (e) {
            this.merge;
        }.bind(this);
    }

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
        this.element.innerHTML = value;
    }

    clear() {
        this.value = '';
    }

    merge() {
        this.value *= 2;
    }
}