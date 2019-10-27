var setEvent = (elem, event, value) => {
    elem.addEventListener(event, value);
}

var createNode = (node, textNode='') => {
    var markup = document.createElement(node),
        textMarkup = document.createTextNode(textNode);

    markup.appendChild(textMarkup);
    return markup;
}

var deleteNode = (node, address=document.body) => {
    address.removeChild(node);
}

var appendNode = (node, address=document.body) => {
    address.appendChild(node);
}

var click = (elem, func) => {
    elem.addEventListener('click', func);
}

var startPage = (func) => {
    window.addEventListener('load', () => {
        func();
    })
}

var setClass = (elem, classe) => {
    elem.className = classe;
}

var att = (elem, attribute, value) => {
    elem.setAttribute(attribute, value);
}

var DOM_CL = (func) => {
    document.addEventListener('DOMContentLoaded', () => {
        func();
    });
};

var selectNode = (node) => {
    var selNode = document.querySelector(node);
    return selNode;
}

startPage(() => {
    console.log('This page has been loaded successfully');
});