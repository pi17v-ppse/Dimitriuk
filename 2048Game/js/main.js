
/**
    * �������� ������� � ���������� 
    * ������� ��� ����������
    *
    * @param any $parentElement
    * ������������ �������
    * @param any $className
    * ��� ������
    * @param any $value
    * �������� ��������
    * @param string $tag
    * �������� ��������
    */
let createAndAppend = function ({ className, parentElement, value, tag } = { className, parentElement, value, tag: 'div' }) {
    let element = document.createElement(tag);
    element.className = className;
    if (value) {
        element.innerHTML = value;
    }
    parentElement.appendChild(element);

    return element;
}

/**
    * ������� ��������� 
    * ������ Game
    * 
    * @param HTMLElement $body
    * ���� ���������
    */
new Game(document.body, 4);