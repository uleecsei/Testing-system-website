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
                this._routes[i].callback.call(this, this._routes[i], path);
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
        });
    },
    drawInnerPage: function (route, currentPath) {
        window.location.hash = currentPath.match(route.pattern)[0];
        Array.prototype.forEach.call(this.pages, function (item) {
            let exp = currentPath.match(/\#\w+(?=\/)/)[0].slice(1);
            if (item.id == 'app-' + exp) {
                item.className = 'show-page page';
            } else {
                item.className = 'page';
            }
        });
    }
}
Router.init();
window.addEventListener('load', function () {
    Router.nav(window.location.hash);
});
let routeSection = document.querySelectorAll('.route_section');

Array.prototype.forEach.call(routeSection, function (item) {
    if (item.localName == 'li') {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            if (event.target.className == "route") {
                Router.nav(event.target.href);
            } else {
                Router.nav(event.currentTarget.firstChild.href);
            }
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
let routesTriggers = document.querySelectorAll('.route');
Array.prototype.forEach.call(routesTriggers, function (item) {
    if (item.localName == 'div') {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            Router.nav(event.currentTarget.querySelector('.main__caption a').href);
        });
    } else if (item.localName == 'a') {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            Router.nav(event.currentTarget.href);
        });
    }
});