
/**
 * ячейка игрового пол€
 *
 *  ласс описывает €чейку
 * с базовыми характеристиками.
 *
 * @author Dmitrii Dimitriuk
 * @version 0.0.5
 * @copyright GNU Public License
 * @todo –еализовать все методы
 */
class Cell {

    /**
    * помогает заполнить €чейку, 
    * обрабатыает событие щелчка 
    * по €чейке
    *
    * @param any $fieldElement 
    * элемент игрового пол€
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
    * позвол€ет получить 
    * значение €чейки
    *
    * @param any $_value
    * элемент игрового пол€
    */
    get value() {
        return this._value || 0;
    }

    /**
    * позвол€ет присвоить
    * значение €чейке
    *
    * @param any $_value
    * элемент игрового пол€
    */
    set value(value) {
        this._value = value;
        this.element.innerHTML = value;
    }

    /**
    * убирает значение
    * из €чейки
    *
    * @param any $value
    * элемент игрового пол€
    */
    clear() {
        this.value = '';
    }

    /**
    * увеличивает значение €чейки 
    * в 2 раза, если она не пуста€
    *
    * @param any $_value
    * элемент игрового пол€
    */
    merge() {
        this.value *= 2;
    }
}