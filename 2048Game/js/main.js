
/**
    * помогает создать и прикрепить 
    * элемент веб приложения
    *
    * @param any $parentElement
    * родительский элемент
    * @param any $className
    * имя класса
    * @param any $value
    * значение элемента
    * @param string $tag
    * значение элемента
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
    * создает экземпляр 
    * класса Game
    * 
    * @param HTMLElement $body
    * тело документа
    */
new Game(document.body, 4);