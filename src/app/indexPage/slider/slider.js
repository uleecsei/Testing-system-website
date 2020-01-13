function sliderMain() {
    let mainElement = document.querySelector('.slider');
    let sliderWrapper = mainElement.querySelector('.slider__wrapper');
    let sliderItems = mainElement.querySelectorAll('.slider__item');
    let sliderControls = mainElement.querySelectorAll('.slider__control');
    let sliderControlLeft = mainElement.querySelector('.slider__control_left');
    let sliderControlRight = mainElement.querySelector('.slider__control_right');
    let wrapperWidth = parseInt(getComputedStyle(sliderWrapper).width);
    let itemWidth = parseInt(getComputedStyle(sliderItems[0]).width);
    let positionLeftItem = 0;
    let transform = 0;
    let step = itemWidth / wrapperWidth * 100;
    let items = [];

    sliderItems.forEach((item, index) => {
        items.push({
            item: item,
            position: index,
            transform: 0
        });
    });

    let position = {
        getMin: 0,
        getMax: items.length - 1
    }

    function transformItem(direction) {
        if (direction == 'right') {
            if ((positionLeftItem + wrapperWidth / itemWidth - 1) >= position.getMax) {
                return;
            }
            if (!sliderControlLeft.classList.contains('slider__control_show')) {
                sliderControlLeft.classList.add('slider__control_show');
            }
            if (sliderControlRight.classList.contains('slider__control_show') && (positionLeftItem + wrapperWidth / itemWidth) >= position.getMax) {
                sliderControlRight.classList.remove('slider__control_show');
            }
            positionLeftItem++;
            transform -= step;
        }
        if (direction == 'left') {
            if (positionLeftItem <= position.getMin) {
                return;
            }
            if (!sliderControlRight.classList.contains('slider__control_show')) {
                sliderControlRight.classList.add('slider__control_show');
            }
            if (sliderControlLeft.classList.contains('slider__control_show') && positionLeftItem - 1 <= position.getMin) {
                sliderControlLeft.classList.remove('slider__control_show');
            }
            positionLeftItem--;
            transform += step;
        }
        sliderWrapper.style.transform = 'translateX(' + transform + '%)';
    }

    function controlClick(event) {
        if (event.target.classList.contains('slider__control')) {
            event.preventDefault();
            let direction = event.target.classList.contains('slider__control_right') ? 'right' : 'left';
            transformItem(direction);
        }
    }

    function setUpListeners() {
        sliderControls.forEach((item) => {
            item.addEventListener('click', controlClick);
        });
    }

    setUpListeners();
}

function hideSlider() {
    let button = document.querySelector('.hide-slider__button');
    let slider = document.getElementsByClassName('slider')[0];
    let labelImg = document.querySelector('.hide-slider__label').firstChild;

    button.addEventListener('click', function(){
        slider.classList.toggle('shown');
        const shown = slider.classList.contains('shown');
        if(shown) {
            labelImg.src = './src/app/indexPage/images/arrow-up.png';
        }
        else {
            labelImg.src = './src/app/indexPage/images/arrow-down.png';
        }
    });
}

hideSlider();
sliderMain();