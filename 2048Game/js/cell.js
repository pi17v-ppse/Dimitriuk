
/**
 * ������ �������� ����
 *
 * ����� ��������� ������
 * � �������� ����������������.
 *
 * @author Dmitrii Dimitriuk
 * @version 0.0.5
 * @copyright GNU Public License
 * @todo ����������� ��� ������
 */
class Cell {

    /**
    * �������� ��������� ������, 
    * ����������� ������� ������ 
    * �� ������
    *
    * @param any $fieldElement 
    * ������� �������� ����
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
    * ��������� �������� 
    * �������� ������
    *
    * @param any $_value
    * ������� �������� ����
    */
    get value() {
        return this._value || 0;
    }

    /**
    * ��������� ���������
    * �������� ������
    *
    * @param any $_value
    * ������� �������� ����
    */
    set value(value) {
        this._value = value;
        this.element.innerHTML = value;
    }

    /**
    * ������� ��������
    * �� ������
    *
    * @param any $value
    * ������� �������� ����
    */
    clear() {
        this.value = '';
    }

    /**
    * ����������� �������� ������ 
    * � 2 ����, ���� ��� �� ������
    *
    * @param any $_value
    * ������� �������� ����
    */
    merge() {
        this.value *= 2;
    }
}