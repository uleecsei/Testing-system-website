const button = document.getElementsByClassName('hide-menu__button')[0];
let menu = document.getElementsByClassName('header__list')[0];
let labelImg = document.querySelector('.hide-menu img');
let header = document.getElementsByTagName('header')[0];


button.onclick = function () {
    menu.classList.toggle('shown');
    header.classList.toggle('shown');
    const shown = menu.classList.contains('shown');
    if (shown) {
        labelImg.src = './src/app/indexPage/images/arrow-up.png';
    } else {
        labelImg.src = './src/app/indexPage/images/arrow-down.png';
    }
}