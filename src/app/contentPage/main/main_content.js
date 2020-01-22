import firebase from 'firebase';

let currentPage = null;

window.addEventListener('load', function () {
    currentPage = document.getElementsByClassName('show-page')[0];
});

window.addEventListener('hashchange', function () {
    currentPage = document.getElementsByClassName('show-page')[0];

});


const dbRefObject = firebase.database().ref().child('object');

//adding elements to index page
window.addEventListener('load', function(){
    dbRefObject.on('value', snap => {
        addContentIndex(snap.val());
    });
})

function addContentIndex(data) {
    let mainWrapper = currentPage.getElementsByClassName('main')[0].getElementsByClassName('main__wrapper')[0];
    let htmltest1 = data.Tests.htmltest1;
    let node = createNode(htmltest1, "html");
    node.addEventListener('click', function(event) {
        event.preventDefault();
        let testArea = document.getElementById('current-test');
        currentPage.className = 'page';
        testArea.className = 'page show-page'
        window.location.hash = "current-test";
        createTest(htmltest1, mainWrapper);
    });
    mainWrapper.appendChild(node);



    // document.write(data.Tests.htmltest1.quiz.q6.options[0]);
}

function addContentHTML() {

}

function addContentCSS() {

}

function addContentJS() {

}

function createNode(obj, type){
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

    ref.href = "#";
    ref.innerText = obj.name;

    caption.appendChild(ref);
    imgWrapper.appendChild(image);

    item.appendChild(imgWrapper);
    item.appendChild(caption);
    return item;
}

function createTest(obj) {
    let h1 = document.createElement('h1');
    h1.setAttribute('class', 'test-name');
    let mainWrapper = document.getElementById('current-test').getElementsByClassName('main__wrapper')[0];
    let currentChild = 0;
    while(mainWrapper.children.length){
        mainWrapper.children.removeChild(currentChild);
        currentChild++;
    }
    let answers = [];

    h1.innerText = obj.name;
    mainWrapper.appendChild(h1);
    let formArray = [];
    let idCounter = 0;
    
    for(let i in obj.quiz){
        let currentForm = {
            id : idCounter++,
            form: drawForm(obj.quiz[i]),
            answer: obj.quiz[i].answer
        };
        formArray.push(currentForm); 
    }

    for(let i = 0; i < formArray.length;i++){
        formArray[i].form.addEventListener('submit' ,function(event){
            event.preventDefault();
            let inputs = formArray[i].form.getElementsByClassName('test-form__button');
            Array.prototype.forEach.call(inputs, (item) => {
                if(item.checked){
                    answers.push(formArray[i].answer == Number(item.value));
                    if(i + 1 == formArray.length){
                        mainWrapper.appendChild(resultsCount(answers));
                    }
                    appendForm(formArray[i].id + 1);
                }
            })
        });
    }

    appendForm(formArray[0].id);

    function appendForm(id){
        for(let i = 0; i < formArray.length; i++) {
            if(formArray[i].id == id){
                formArray[i].form.style.display = "block";
            }
            else {
                formArray[i].form.style.display = "none";
            }
            mainWrapper.appendChild(formArray[i].form);
        }
    }
   
}

function drawForm(obj){
    let form = document.createElement('form');
    let h2 = document.createElement('h2');
    let submit = document.createElement('input');

    form.setAttribute('class', 'test-form');
    h2.setAttribute('class', 'test-form__question');
    submit.setAttribute('class', 'test-form__submit');

    h2.innerText = obj.question;
    submit.type = "submit";
    submit.value = "Далі";
    form.appendChild(h2);


    for(let i = 0; i < obj.options.length; i++){
        let label = document.createElement('label');
        let input = document.createElement('input');
        let p = document.createElement('p');

        label.setAttribute('class', 'test-form__label');
        input.setAttribute('class', 'test-form__button');
        p.setAttribute('class', 'test-form__description');

        input.type = obj.type;
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

function resultsCount(answers){
    let counter = 0;
    for(let i = 0; i < answers.length; i++){
        if(answers[i]){
            counter++;
        }
    }
    let result = Math.round(counter/answers.length * 100);
    let p = document.createElement("p");
    p.innerText = "Ваш результат: " + result + "%";
    return p;
}