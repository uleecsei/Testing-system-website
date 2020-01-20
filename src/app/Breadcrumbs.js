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
    switch (currentHash) {
        case '': {
            mainCrumb.className = 'main_crumb main__crumb_current';
            break;
        }
        case '#html': {
            element.className = 'main_crumb main__crumb_current';
            element.innerText = 'HTML';
            wrapper.appendChild(element);
            break;
        }
        case '#css': {
            element.className = 'main_crumb main__crumb_current';
            element.innerText = 'CSS';
            wrapper.appendChild(element);
            break;
        }
        case '#js': {
            element.className = 'main_crumb main__crumb_current';
            element.innerText = 'JS';
            wrapper.appendChild(element);
            break;
        }
        case '#contacts': {
            element.className = 'main_crumb main__crumb_current';
            element.innerText = 'Контакти';
            wrapper.appendChild(element);
            break;
        }
        case '#profile': {
            element.className = 'main_crumb main__crumb_current';
            element.innerText = 'Профіль';
            wrapper.appendChild(element);
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