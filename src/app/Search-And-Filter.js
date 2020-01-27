let sortItem = document.getElementsByClassName('main__sort')[0];
let filterItem = document.getElementsByClassName('main__filter')[0];
let searchButton = document.getElementsByClassName('search__submit')[0].parentElement;
let mainWrapper = document.getElementById('app-index').getElementsByClassName('main__wrapper')[0];
let sortArr = [];


sortItem.addEventListener('change', function () {
    if (event.currentTarget.value == "0") {
        location.reload();
    } else {
        let elements = mainWrapper.querySelectorAll('.main__item');
        for (let i = 0; i < elements.length; i++) {
            sortArr.push(mainWrapper.removeChild(elements[i]));
        }
        if (event.currentTarget.value == "sort1") {
            sortArr.sort(sort1).forEach((item) => mainWrapper.appendChild(item));
        }
        if (event.currentTarget.value == "sort2") {
            sortArr.sort(sort2).forEach((item) => mainWrapper.appendChild(item));
        }
    }

    function sort1(elem1, elem2) {
        let a = elem1.lastChild.firstChild.innerHTML;
        let b = elem2.lastChild.firstChild.innerHTML;
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
        return 0;
    }

    function sort2(elem1, elem2) {
        let a = elem1.lastChild.firstChild.innerHTML;
        let b = elem2.lastChild.firstChild.innerHTML;
        if (a < b) {
            return 1;
        }
        if (a > b) {
            return -1;
        }
        return 0;
    }
});

filterItem.addEventListener('change', function (event) {
    let elements = mainWrapper.querySelectorAll('.main__item');
    if (event.currentTarget.value == "0") {
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = 'block';
        }
    } else {
        let exp = new RegExp("#" + event.currentTarget.value);
        for (let i = 0; i < elements.length; i++) {
            if(exp.test(elements[i].lastChild.firstChild.href)){
                elements[i].style.display = 'block';
            }
            else {
                elements[i].style.display = 'none';
            }
        }
    }
});

searchButton.addEventListener('click', function() {
    let currentWrapper = document.getElementsByClassName('show-page')[0];
    let text = document.getElementsByClassName('search__input')[0];
    if(text.value == ""){
        let elements = currentWrapper.getElementsByClassName('main__item');
        for(let i = 0; i < elements.length; i++){
            elements[i].style.display = "block";
        }
        return;
    }
    let exp = new RegExp(text.value,"gi");
    let elements = currentWrapper.getElementsByClassName('main__item');
    for(let i = 0; i < elements.length; i++){
        let text = elements[i].lastChild.firstChild.innerText;
        if(exp.test(text)){
            elements[i].style.display = "block";
        }
        else {
            elements[i].style.display = "none";
        }
    }
});