var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var about_1 = require('../about/about');
var contactus_1 = require('../contactus/contactus');
var todoList_1 = require('../todo-list/todoList');
var DemoPage = (function () {
    function DemoPage() {
    }
    DemoPage = __decorate([
        core_1.Component({
            selector: 'demo-page',
            directives: [router_1.ROUTER_DIRECTIVES, about_1.About, contactus_1.ContactUs, todoList_1.ToDoList],
            templateUrl: './components/demo-page/demo-page.html'
        }),
        router_1.RouteConfig([
            new router_1.Route({ path: '/about', component: about_1.About, name: 'About' }),
            new router_1.Route({ path: '/contactus', component: contactus_1.ContactUs, name: 'ContactUs' }),
            new router_1.Route({ path: '/todo', component: todoList_1.ToDoList, name: 'ToDoList' }),
        ])
    ], DemoPage);
    return DemoPage;
})();
exports.DemoPage = DemoPage;
//# sourceMappingURL=demo-page.js.map