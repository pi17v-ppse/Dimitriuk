
/**
 * Игровое поле
 *
 * Класс описывает игровое поле
 * с базовыми характеристиками.
 *
 * @author Dmitrii Dimitriuk
 * @version 0.0.5
 * @copyright GNU Public License
 * @todo Реализовать все методы
 */
class Game {

    /**
    * помогает создать поля игры
    *
    * @param any $parentElement
    * родительский элемент
    * @param HTMLElement $gameFieldElement
    * элемент игрового поля
    * @param HTMLElement $headerElement
    * элемент игрового поля
    */
    constructor(parentElement, size = 4) {
        let gameFieldElement = createAndAppend({
            className: 'game',
            parentElement
        });

        let headerElement = createAndAppend({
            className: 'header',
            parentElement: gameFieldElement
        });

        this.rating = 0;

        headerElement.innerHTML = 'Rating: ' + this.rating;

        let fieldElement = createAndAppend({
            className: 'field',
            parentElement: gameFieldElement
        });

        for (let i = 0; i < size; i++) {
            for (let k = 0; k < size; k++) {
                new Cell(fieldElement);

            }
        }
    }
}