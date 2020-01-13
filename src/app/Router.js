let Router = {
    routes: {
        "#": "indexPage",
        "html": "htmlPage",
        "css": "cssPage",
        "js": "jsPage",
        "contacts": "contactsPage",
        "profile": "profilePage"
    },
    pages: document.querySelectorAll('.page'),
    init: function () {
        this._routes = [];
        for (let route in this.routes) {
            var methodName = this.routes[route];
            this._routes.push({
                pattern: new RegExp(route + '$'),
                callback: this[methodName],
                route
            });
        }
    },
    nav: function (path) {
        var i = this._routes.length;
        while (i--) {
            var args = path.match(this._routes[i].pattern);
            if (args) {
                this._routes[i].callback.call(this, this._routes[i].route);
                return;
            }
        }
    },
    drawPage: function (route) {
        Array.prototype.forEach.call(this.pages, function (item) {
            if (item.id == "app-" + route) {
                item.className = 'show-page page';
            } else {
                item.className = 'page';
            }
        })
    },
    indexPage: function (route) {
        window.location.hash = "";
        this.drawPage();
        document.getElementById('app-index').className = 'show-page page';
    },
    htmlPage: function (route) {
        window.location.hash = "html";
        this.drawPage(route);
    },
    cssPage: function (route) {
        window.location.hash = "css";
        this.drawPage(route);
    },
    jsPage: function (route) {
        window.location.hash = "js";
        this.drawPage(route);
    },
    contactsPage: function (route) {
        window.location.hash = "contacts";
        this.drawPage(route);
    },
    profilePage: function (route) {
        window.location.hash = "profile";
        this.drawPage(route);
    }
}
Router.init();
let triggers = document.querySelectorAll('.route');
Array.prototype.forEach.call(triggers, function (item) {
    item.parentNode.addEventListener('click', function (event) {
        event.preventDefault();
        Router.nav(event.currentTarget.firstChild.href);
    });
});
window.addEventListener('hashchange', function () {
    Router.nav(window.location.hash);
});

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