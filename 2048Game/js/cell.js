
/**
 * Ячейка игрового поля
 *
 * Класс описывает ячейку
 * с базовыми характеристиками.
 *
 * @author Dmitrii Dimitriuk
 * @version 0.0.5
 * @copyright GNU Public License
 * @todo Реализовать все методы
 */
class Cell {

    /**
    * помогает заполнить ячейку, 
    * обрабатыает событие щелчка 
    * по ячейке
    *
    * @param any $fieldElement 
    * элемент игрового поля
    */
    constructor(fieldElement) {
        this.element = createAndAppend({
            className: 'cell',
            parentElement: fieldElement
        });

        if (Math.random() > 0.8) {
            this.value = Math.random() > 0.5 ? 4 : 2;
        }

        this.element.onclick = this.merge.bind(this);
    }

    /**
    * позволяет получить 
    * значение ячейки
    *
    * @param any $_value
    * элемент игрового поля
    */
    get value() {
        return this._value || 0;
    }

    /**
    * позволяет присвоить
    * значение ячейке
    *
    * @param any $_value
    * элемент игрового поля
    */
    set value(value) {
        this._value = value;
        this.element.innerHTML = value;
    }

    /**
    * убирает значение
    * из ячейки
    *
    * @param any $value
    * элемент игрового поля
    */
    clear() {
        this.value = '';
    }

    /**
    * увеличивает значение ячейки 
    * в 2 раза, если она не пустая
    *
    * @param any $_value
    * элемент игрового поля
    */
    merge() {
        this.value *= 2;
    }
}