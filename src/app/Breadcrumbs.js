window.addEventListener('hashchange', breadCrumbsAllElements);
breadCrumbsAllElements();


function breadCrumbs(wrapper) {
    let i = wrapper.children.length;
    while (i--) {
        wrapper.children[i].remove();
    }
    let mainCrumb = document.createElement('div');
    let mainRef = document.createElement('a');
    mainRef.href = '#';
    mainCrumb.className = 'main__crumb';
    mainCrumb.innerText = 'Головна';
    mainRef.appendChild(mainCrumb);
    wrapper.appendChild(mainRef);
    let currentHash = window.location.hash;
    let refference = document.createElement('a');
    let element = document.createElement('div');
    let nextElement = document.createElement('div');
    switch (currentHash) {
        case '#html': {
            element.className = 'main__crumb main__crumb_current';
            element.innerText = 'HTML';
            wrapper.appendChild(element);
            break;
        }
        case '#css': {
            element.className = 'main__crumb main__crumb_current';
            element.innerText = 'CSS';
            wrapper.appendChild(element);
            break;
        }
        case '#js': {
            element.className = 'main__crumb main__crumb_current';
            element.innerText = 'JS';
            wrapper.appendChild(element);
            break;
        }
        case '#contacts': {
            element.className = 'main__crumb main__crumb_current';
            element.innerText = 'Контакти';
            wrapper.appendChild(element);
            break;
        }
        case '#profile': {
            element.className = 'main__crumb main__crumb_current';
            element.innerText = 'Профіль';
            wrapper.appendChild(element);
            break;
        }
        case '#html/easy/':{
            element.className = 'main__crumb';
            refference.innerText = 'HTML';
            refference.href = '#html';
            nextElement.className = 'main__crumb main__crumb_current';
            nextElement.innerText = 'Перевірка знань';
            element.appendChild(refference);
            wrapper.appendChild(element);
            wrapper.appendChild(nextElement);
            break;
        }
        case '#html/hard/':{
            element.className = 'main__crumb';
            refference.innerText = 'HTML';
            refference.href = '#html';
            nextElement.className = 'main__crumb main__crumb_current';
            nextElement.innerText = 'Ускладнена перевірка знань';
            element.appendChild(refference);
            wrapper.appendChild(element);
            wrapper.appendChild(nextElement);
            break;
        }
        case '#html/tags/':{
            element.className = 'main__crumb';
            refference.innerText = 'HTML';
            nextElement.className = 'main__crumb main__crumb_current';
            nextElement.innerText = 'Основні теги тести';
            refference.href = '#html';
            element.appendChild(refference);
            wrapper.appendChild(element);
            wrapper.appendChild(nextElement);
            break;
        }
        case '#css/easy/':{
            element.className = 'main__crumb';
            refference.innerText = 'CSS';
            nextElement.className = 'main__crumb main__crumb_current';
            nextElement.innerText = 'Перевірка знань';
            refference.href = '#css';
            element.appendChild(refference);
            wrapper.appendChild(element);
            wrapper.appendChild(nextElement);
            break;
        }
        case '#css/hard/':{
            element.className = 'main__crumb';
            refference.innerText = 'CSS';
            nextElement.className = 'main__crumb main__crumb_current';
            nextElement.innerText = 'Ускладнена перевірка знань';
            refference.href = '#css';
            element.appendChild(refference);
            wrapper.appendChild(element);
            wrapper.appendChild(nextElement);
            break;
        }
        case '#css/parameter/':{
            element.className = 'main__crumb';
            refference.innerText = 'CSS';
            nextElement.className = 'main__crumb main__crumb_current';
            nextElement.innerText = 'Тести на параметри';
            refference.href = '#css';
            element.appendChild(refference);
            wrapper.appendChild(element);
            wrapper.appendChild(nextElement);
            break;
        }
        case '#css/flexbox/':{
            element.className = 'main__crumb';
            refference.innerText = 'CSS';
            nextElement.className = 'main__crumb main__crumb_current';
            nextElement.innerText = 'Flexbox';
            refference.href = '#css';
            element.appendChild(refference);
            wrapper.appendChild(element);
            wrapper.appendChild(nextElement);
            break;
        }
        case '#css/grid/':{
            element.className = 'main__crumb';
            refference.innerText = 'CSS';
            nextElement.className = 'main__crumb main__crumb_current';
            nextElement.innerText = 'Grid';
            refference.href = '#css';
            element.appendChild(refference);
            wrapper.appendChild(element);
            wrapper.appendChild(nextElement);
            break;
        }
        case '#js/easy/':{
            element.className = 'main__crumb';
            refference.innerText = 'JS';
            nextElement.className = 'main__crumb main__crumb_current';
            nextElement.innerText = 'Перевірка знань';
            refference.href = '#js';
            element.appendChild(refference);
            wrapper.appendChild(element);
            wrapper.appendChild(nextElement);
            break;
        }
        case '#js/hard/':{
            element.className = 'main__crumb';
            refference.innerText = 'JS';
            nextElement.className = 'main__crumb main__crumb_current';
            nextElement.innerText = 'Ускладнена перевірка знань';
            refference.href = '#js';
            element.appendChild(refference);
            wrapper.appendChild(element);
            wrapper.appendChild(nextElement);
            break;
        }
        case '#js/dom/':{
            element.className = 'main__crumb';
            refference.innerText = 'JS';
            nextElement.className = 'main__crumb main__crumb_current';
            nextElement.innerText = 'Тести на знання DOM';
            refference.href = '#js';
            element.appendChild(refference);
            wrapper.appendChild(element);
            wrapper.appendChild(nextElement);
            break;
        }
    }
}

function breadCrumbsAllElements() {
    let collection = document.getElementsByClassName('main__breadcrumbs');
    Array.prototype.forEach.call(collection, function (item) {
        breadCrumbs(item);
    })
}