window.addEventListener('hashchange', breadCrumbsAllElements);
breadCrumbsAllElements();


function breadCrumbs(wrapper) {
    let i = wrapper.children.length;
    while (i--) {
        wrapper.children[i].remove();
    }
    let mainCrumb = document.createElement('div');
    mainCrumb.className = 'main__crumb';
    mainCrumb.innerText = 'Головна';
    wrapper.appendChild(mainCrumb);
    let currentHash = window.location.hash;
    let element = document.createElement('div');
    let nextElement = document.createElement('div');
    switch (currentHash) {
        case '': {
            mainCrumb.className = 'main__crumb';
            break;
        }
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
            element.innerText = 'HTML';
            nextElement.className = 'main__crumb main__crumb_current';
            nextElement.innerText = 'Перевірка знань';
            wrapper.appendChild(element);
            wrapper.appendChild(nextElement);
            break;
        }
        case '#html/hard/':{
            element.className = 'main__crumb';
            element.innerText = 'HTML';
            nextElement.className = 'main__crumb main__crumb_current';
            nextElement.innerText = 'Ускладнена перевірка знань';
            wrapper.appendChild(element);
            wrapper.appendChild(nextElement);
            break;
        }
        case '#html/tags/':{
            element.className = 'main__crumb';
            element.innerText = 'HTML';
            nextElement.className = 'main__crumb main__crumb_current';
            nextElement.innerText = 'Основні теги тести';
            wrapper.appendChild(element);
            wrapper.appendChild(nextElement);
            break;
        }
        case '#css/easy/':{
            element.className = 'main__crumb';
            element.innerText = 'CSS';
            nextElement.className = 'main__crumb main__crumb_current';
            nextElement.innerText = 'Перевірка знань';
            wrapper.appendChild(element);
            wrapper.appendChild(nextElement);
            break;
        }
        case '#css/hard/':{
            element.className = 'main__crumb';
            element.innerText = 'CSS';
            nextElement.className = 'main__crumb main__crumb_current';
            nextElement.innerText = 'Ускладнена перевірка знань';
            wrapper.appendChild(element);
            wrapper.appendChild(nextElement);
            break;
        }
        case '#css/parameter/':{
            element.className = 'main__crumb';
            element.innerText = 'CSS';
            nextElement.className = 'main__crumb main__crumb_current';
            nextElement.innerText = 'Тести на параметри';
            wrapper.appendChild(element);
            wrapper.appendChild(nextElement);
            break;
        }
        case '#css/flexbox/':{
            element.className = 'main__crumb';
            element.innerText = 'CSS';
            nextElement.className = 'main__crumb main__crumb_current';
            nextElement.innerText = 'Flexbox';
            wrapper.appendChild(element);
            wrapper.appendChild(nextElement);
            break;
        }
        case '#css/grid/':{
            element.className = 'main__crumb';
            element.innerText = 'CSS';
            nextElement.className = 'main__crumb main__crumb_current';
            nextElement.innerText = 'Grid';
            wrapper.appendChild(element);
            wrapper.appendChild(nextElement);
            break;
        }
        case '#js/easy/':{
            element.className = 'main__crumb';
            element.innerText = 'JS';
            nextElement.className = 'main__crumb main__crumb_current';
            nextElement.innerText = 'Перевірка знань';
            wrapper.appendChild(element);
            wrapper.appendChild(nextElement);
            break;
        }
        case '#js/hard/':{
            element.className = 'main__crumb';
            element.innerText = 'JS';
            nextElement.className = 'main__crumb main__crumb_current';
            nextElement.innerText = 'Ускладнена перевірка знань';
            wrapper.appendChild(element);
            wrapper.appendChild(nextElement);
            break;
        }
        case '#js/dom/':{
            element.className = 'main__crumb';
            element.innerText = 'JS';
            nextElement.className = 'main__crumb main__crumb_current';
            nextElement.innerText = 'Тести на знання DOM';
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