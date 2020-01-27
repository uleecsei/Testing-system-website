import firebase from 'firebase';

let currentPage = null;

window.addEventListener('load', function () {
    currentPage = document.getElementsByClassName('show-page')[0];
});

window.addEventListener('hashchange', function (event) {
    currentPage = document.getElementsByClassName('show-page')[0];
    // drawDefaultPages(event.newURL);
});

const dbRefObject = firebase.database().ref().child('object');

window.addEventListener('load', function () {
    dbRefObject.on('value', snap => {
        addContentIndex(snap.val());
        addContentInner(snap.val());
    });
})

function addContentIndex(data) {
    let htmlTests = {
        type: "html",
        data: []
    };
    let cssTests = {
        type: "css",
        data: []
    };
    let jsTests = {
        type: "js",
        data: []
    };
    for (let i = 1; i <= 7; i++) {
        if (i < 6) {
            htmlTests.data.push(data.Tests["htmltest" + i]);
            jsTests.data.push(data.Tests["jstest" + i]);
        }
        cssTests.data.push(data.Tests["csstest" + i]);
    }
    let mainWrapper = currentPage.getElementsByClassName('main')[0].getElementsByClassName('main__wrapper')[0];

    appendTestNodes(htmlTests, mainWrapper);
    appendTestNodes(cssTests, mainWrapper);
    appendTestNodes(jsTests, mainWrapper);

}

function addContentInner(data) {
    const routeItemsHeader = document.getElementsByClassName("header__list")[0].getElementsByClassName("route");
    const routeItemsHTML = document.getElementById("app-html").getElementsByClassName("route");
    const routeItemsCSS = document.getElementById("app-css").getElementsByClassName("route");
    const routeItemsJS = document.getElementById("app-js").getElementsByClassName("route");
    const mainWrapperHTML = document.getElementById("app-html").getElementsByClassName('main__wrapper')[0];
    const mainWrapperCSS = document.getElementById("app-css").getElementsByClassName('main__wrapper')[0];
    const mainWrapperJS = document.getElementById("app-js").getElementsByClassName('main__wrapper')[0];


    let htmlTests = {
        type: "html",
        data: []
    };
    let cssTests = {
        type: "css",
        data: []
    };
    let jsTests = {
        type: "js",
        data: []
    };
    for (let i = 1; i <= 7; i++) {
        if (i < 6) {
            htmlTests.data.push(data.Tests["htmltest" + i]);
            jsTests.data.push(data.Tests["jstest" + i]);
        }
        cssTests.data.push(data.Tests["csstest" + i]);
    }
    let htmlArr = appendTestNodesInner(htmlTests);
    let cssArr = appendTestNodesInner(cssTests);
    let jsArr = appendTestNodesInner(jsTests);


    let indexContent = [...htmlArr, ...cssArr, ...jsArr];

    //Header references to the section
    routeItemsHeader[0].addEventListener('click', function (event) {
        event.preventDefault();
        buildMain(mainWrapperHTML, indexContent[0], indexContent[1]);
    });

    routeItemsHeader[1].addEventListener('click', function (event) {
        event.preventDefault();
        buildMain(mainWrapperHTML, indexContent[2], indexContent[3]);
    });

    routeItemsHeader[2].addEventListener('click', function (event) {
        event.preventDefault();
        buildMain(mainWrapperHTML, indexContent[4]);
    });

    routeItemsHeader[3].addEventListener('click', function (event) {
        event.preventDefault();
        buildMain(mainWrapperCSS, indexContent[5], indexContent[6]);
    });

    routeItemsHeader[4].addEventListener('click', function (event) {
        event.preventDefault();
        buildMain(mainWrapperCSS, indexContent[7], indexContent[8]);
    });

    routeItemsHeader[5].addEventListener('click', function (event) {
        event.preventDefault();
        buildMain(mainWrapperCSS, indexContent[9]);
    });

    routeItemsHeader[6].addEventListener('click', function (event) {
        event.preventDefault();
        buildMain(mainWrapperCSS, indexContent[10]);
    });

    routeItemsHeader[7].addEventListener('click', function (event) {
        event.preventDefault();
        buildMain(mainWrapperCSS, indexContent[11]);
    });

    routeItemsHeader[8].addEventListener('click', function (event) {
        event.preventDefault();
        buildMain(mainWrapperJS, indexContent[12], indexContent[13]);
    });

    routeItemsHeader[9].addEventListener('click', function (event) {
        event.preventDefault();
        buildMain(mainWrapperJS, indexContent[14], indexContent[15]);
    });

    routeItemsHeader[10].addEventListener('click', function (event) {
        event.preventDefault();
        buildMain(mainWrapperJS, indexContent[16]);
    });

    //HTML page references to the section
    routeItemsHTML[0].addEventListener('click', function (event) {
        buildMain(mainWrapperHTML, indexContent[0], indexContent[1]);
    });

    routeItemsHTML[1].addEventListener('click', function (event) {
        buildMain(mainWrapperHTML, indexContent[2], indexContent[3]);
    });

    routeItemsHTML[2].addEventListener('click', function (event) {
        buildMain(mainWrapperHTML, indexContent[4]);
    });

    //CSS page references to the section
    routeItemsCSS[0].addEventListener('click', function (event) {
        buildMain(mainWrapperCSS, indexContent[5], indexContent[6]);
    });

    routeItemsCSS[1].addEventListener('click', function (event) {
        buildMain(mainWrapperCSS, indexContent[7], indexContent[8]);
    });

    routeItemsCSS[2].addEventListener('click', function (event) {
        buildMain(mainWrapperCSS, indexContent[9]);
    });

    routeItemsCSS[3].addEventListener('click', function (event) {
        buildMain(mainWrapperCSS, indexContent[10]);
    });

    routeItemsCSS[4].addEventListener('click', function (event) {
        buildMain(mainWrapperCSS, indexContent[11]);
    });

    //JS page references to the section
    routeItemsJS[0].addEventListener('click', function (event) {
        buildMain(mainWrapperJS, indexContent[12], indexContent[13]);
    });

    routeItemsJS[1].addEventListener('click', function (event) {
        buildMain(mainWrapperJS, indexContent[14], indexContent[15]);
    });

    routeItemsJS[2].addEventListener('click', function (event) {
        buildMain(mainWrapperJS, indexContent[16]);
    });

    function buildMain(main, ...elements) {
        clearElements(main);
        for (let i = 0; i < elements.length; i++) {
            main.appendChild(elements[i]);
        }
    }
}

function appendTestNodesInner(testsObject) {
    let nodeArr = [];
    for (let i = 0; i < testsObject.data.length; i++) {
        let node = createNode(testsObject.data[i], testsObject.type);
        node.addEventListener('click', function (event) {
            event.preventDefault();
            let testArea = document.getElementById('current-test');
            currentPage.className = 'page';
            testArea.className = 'page show-page'
            window.location.hash = "current-test";
            createTest(testsObject.data[i]);
        });
        nodeArr.push(node);
    }
    return nodeArr;
}

function createNode(obj, type) {
    let item = document.createElement("div");
    let imgWrapper = document.createElement("div");
    let image = document.createElement("img");
    let caption = document.createElement("div");
    let ref = document.createElement("a");

    item.setAttribute("class", "main__item");
    imgWrapper.setAttribute("class", "main__img");
    caption.setAttribute("class", "main__caption");

    image.alt = obj.url;
    image.src = "./src/app/indexPage/images/" + type + ".png";

    ref.href = obj.url;
    ref.innerText = obj.name;

    caption.appendChild(ref);
    imgWrapper.appendChild(image);

    item.appendChild(imgWrapper);
    item.appendChild(caption);
    return item;
}

function createTest(obj) {
    let mainWrapper = document.getElementById('current-test').getElementsByClassName('main__wrapper')[0];
    clearElements(mainWrapper);
    let answers = [];
    let h1 = document.createElement('h1');

    h1.setAttribute('class', 'test-name');
    h1.innerText = obj.name;
    mainWrapper.appendChild(h1);

    setTimer(mainWrapper, answers);

    let formArray = [];
    let idCounter = 0;

    for (let i in obj.quiz) {
        let currentForm = {
            id: idCounter++,
            form: drawForm(obj.quiz[i]),
            answer: obj.quiz[i].answer
        };
        formArray.push(currentForm);
    }

    for (let i = 0; i < formArray.length; i++) {
        formArray[i].form.addEventListener('submit', function (event) {
            event.preventDefault();
            let inputs = formArray[i].form.getElementsByClassName('test-form__button');
            Array.prototype.forEach.call(inputs, (item) => {
                if (item.checked) {
                    answers.push(formArray[i].answer == Number(item.value));
                    if (i + 1 == formArray.length) {
                        clearElements(mainWrapper);
                        mainWrapper.appendChild(resultsCount(answers));
                    }
                    appendForm(formArray[i].id + 1);
                }
            })
        });
    }

    appendForm(formArray[0].id);

    function appendForm(id) {
        for (let i = 0; i < formArray.length; i++) {
            if (formArray[i].id == id) {
                formArray[i].form.style.display = "block";
            } else {
                formArray[i].form.style.display = "none";
            }
            mainWrapper.appendChild(formArray[i].form);
        }
    }

}

//drawing form which contains 1 question with answers
function drawForm(obj) {
    let form = document.createElement('form');
    let h2 = document.createElement('h2');
    let submit = document.createElement('input');

    form.setAttribute('class', 'test-form');
    h2.setAttribute('class', 'test-form__question');
    submit.setAttribute('class', 'test-form__submit');

    submit.type = "submit";
    submit.value = "Далі";

    h2.innerText = obj.question;

    form.appendChild(h2);
    if (obj.code) {
        let code = document.createElement('code');
        code.setAttribute('class', 'test-form__code');
        let editedCode = obj.code.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\\n/g, "<br>");
        code.innerHTML = editedCode;
        form.appendChild(code);
    }

    for (let i = 0; i < obj.options.length; i++) {
        let label = document.createElement('label');
        let input = document.createElement('input');
        let p = document.createElement('p');

        label.setAttribute('class', 'test-form__label');
        input.setAttribute('class', 'test-form__button');
        p.setAttribute('class', 'test-form__description');

        input.type = "radio";
        input.name = "test";
        input.value = i;
        p.innerText = obj.options[i];

        label.appendChild(input);
        label.appendChild(p);
        form.appendChild(label);
    }
    form.appendChild(submit);
    return form;
}

//counting the results of the test
function resultsCount(answers) {
    let counter = 0;
    for (let i = 0; i < answers.length; i++) {
        if (answers[i]) {
            counter++;
        }
    }
    let result = answers.length ? Math.round(counter / answers.length * 100) : 0;
    let p = document.createElement("p");
    p.setAttribute('class', 'main__test-answer')
    p.innerHTML = "Ваш результат: " + result + "%" + "<br>" + counter + "/" + answers.length + " тестів відмічено вірно.";
    return p;
}

//appending already made tests to main
function appendTestNodes(testsObject, wrapper) {
    for (let i = 0; i < testsObject.data.length; i++) {
        let node = createNode(testsObject.data[i], testsObject.type);

        node.addEventListener('click', function (event) {
            event.preventDefault();
            let testArea = document.getElementById('current-test');
            currentPage.className = 'page';
            testArea.className = 'page show-page'
            window.location.hash = "current-test";
            createTest(testsObject.data[i]);
        });
        wrapper.appendChild(node);
    }
}

function setTimer(mainWrapper, answers) {
    let minutes = 5;
    let seconds = 0;
    let timer = document.createElement('p');

    let x = setInterval(function () {
        timer.innerText = "";
        timer.innerText = "Час який залишився: ";
        timer.innerHTML += minutes + " : " + ((seconds < 10) ? "0" : "") + seconds;


        if (seconds == 0 && minutes == 0) {
            clearInterval(x);
            clearElements(mainWrapper);
            mainWrapper.appendChild(resultsCount(answers));
        }

        if (seconds == 0) {
            minutes--;
            seconds = 60;
        }

        if (minutes == 0 && seconds < 31) {
            timer.style.color = "red";
        }

        seconds--;
    }, 1000);
    mainWrapper.appendChild(timer);
}

function clearElements(parent) {
    let currentChild = parent.children.length - 1;
    while (parent.children.length) {
        parent.children[currentChild].remove();
        currentChild--;
    }
}