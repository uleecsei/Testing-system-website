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
window.addEventListener('load', function() {
    Router.nav(window.location.hash);
});
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