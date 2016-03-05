var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
require('rxjs/operator/map');
require('rxjs/operator/mergeMap');
require('rxjs/observable/interval');
var http_1 = require('angular2/http');
var core_1 = require('angular2/core');
var browser_1 = require('angular2/platform/browser');
var router_1 = require('angular2/router');
var demo_page_1 = require('./components/demo-page/demo-page');
var home_1 = require('./components/home/home');
var http_2 = require('./components/httpSample/http');
var register_1 = require('./components/location/register');
var confirm_1 = require('./components/location/confirm');
var thankyou_1 = require('./components/location/thankyou');
var tabControl_1 = require('./components/tabs/tabControl');
var core_2 = require('angular2/core');
var dynamicLoading_1 = require('./components/lazyLoading/dynamicLoading');
var MyDemoApp = (function () {
    function MyDemoApp(locationObj, routerObj) {
        this.locationObj = locationObj;
        this.routerObj = routerObj;
        this.location = locationObj;
        this.router = routerObj;
    }
    MyDemoApp.prototype.getLinkStyle = function (path) {
        if (path === this.location.path()) {
            return true;
        }
        else if (path.length > 0) {
            return this.location.path().indexOf(path) > -1;
        }
    };
    MyDemoApp.prototype.gotoConfirm = function () {
        this.location.go('/Confirm');
    };
    MyDemoApp = __decorate([
        core_1.Component({
            selector: 'demo-app',
            templateUrl: './app.html',
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            new router_1.Route({ path: '/', component: home_1.Home, name: 'Home' }),
            new router_1.Route({ path: '/demo/...', component: demo_page_1.DemoPage, name: 'Demo' }),
            new router_1.Route({ path: '/http', component: http_2.httpSample, name: 'Http' }),
            new router_1.Route({ path: '/Register/..', component: register_1.Register, name: 'Register' }),
            new router_1.Route({ path: '/Register/Confirm', component: confirm_1.Confirm, name: 'Confirm' }),
            new router_1.Route({ path: '/Register/ThankYou', component: thankyou_1.ThankYou, name: 'ThankYou' }),
            new router_1.Route({ path: '/Tab', component: tabControl_1.TabControl, name: 'Tab' }),
            new router_1.Route({ path: '/DynamicLoad', component: dynamicLoading_1.DynamicLoading, name: 'DynamicLoad' })
        ]),
        __param(0, core_2.Inject(router_1.Location)),
        __param(1, core_2.Inject(router_1.Router))
    ], MyDemoApp);
    return MyDemoApp;
})();
var ComponentHelper = (function () {
    function ComponentHelper() {
    }
    ComponentHelper.LoadComponentAsync = function (name, path) {
        return System.import(path).then(function (c) { return c[name]; });
    };
    return ComponentHelper;
})();
browser_1.bootstrap(MyDemoApp, [router_1.ROUTER_BINDINGS, http_1.HTTP_PROVIDERS,
    core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })]);
//# sourceMappingURL=app.js.map