let Router = {
    routes: {
        "#": "drawPage",
        "html": "drawPage",
        "css": "drawPage",
        "js": "drawPage",
        "contacts": "drawPage",
        "profile": "drawPage",
        "html/:tag/": "drawInnerPage",
        "css/:tag/": "drawInnerPage",
        "js/:tag/": "drawInnerPage",
    },
    pages: document.querySelectorAll('.page'),
    init: function () {
        this._routes = [];
        for (let route in this.routes) {
            let methodName = this.routes[route];
            this._routes.push({
                pattern: new RegExp(route.replace(/:\w+/, '(\\w+)') + '$'),
                callback: this[methodName],
                path: route
            });
        };
    },
    nav: function (path) {
        var i = this._routes.length;
        while (i--) {
            var args = path.match(this._routes[i].pattern);
            if (args) {
                this._routes[i].callback.call(this, this._routes[i]);
                return;
            }
        }
    },
    drawPage: function (route) {
        Array.prototype.forEach.call(this.pages, function (item) {
            if (item.id == 'app-' + route.path) {
                item.className = 'show-page page';
                window.location.hash = route.path;
            } else {
                item.className = 'page';
            }
            if (route.path == "" || route.path == "#") {
                let index = document.getElementById('app-index');
                index.className = 'show-page page';
                window.location.hash = "";
            }
        })
    },
    drawInnerPage: function (route) {

    }
}
Router.init();
window.addEventListener('load', function () {
    Router.nav(window.location.hash);
});
let triggers = document.querySelectorAll('.route');
Array.prototype.forEach.call(triggers, function (item) {
    if (item.localName == 'li') {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            Router.nav(event.currentTarget.firstChild.href);
        });
    } else if (item.localName == 'a') {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            Router.nav(event.currentTarget.href);
        });
    }
});
window.addEventListener('hashchange', function () {
    Router.nav(window.location.hash);
});