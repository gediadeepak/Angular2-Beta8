var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var core_2 = require('angular2/core');
var Tabs = (function () {
    function Tabs(locationObj) {
        this.locationObj = locationObj;
        this.tabs = [];
        this.location = locationObj;
    }
    Tabs.prototype.selectTab = function (tab) {
        _deactivateAllTabs(this.tabs);
        tab.active = true;
        function _deactivateAllTabs(tabs) {
            tabs.forEach(function (tab) { return tab.active = false; });
        }
    };
    Tabs.prototype.addTab = function (tab) {
        if (this.tabs.length === 0) {
            tab.active = true;
        }
        this.tabs.push(tab);
    };
    Tabs.prototype.getCurrentLocation = function () {
        return this.location.path();
    };
    Tabs = __decorate([
        core_1.Component({
            selector: 'tabs',
            templateUrl: './components/tabs/Tabs.html'
        }),
        __param(0, core_2.Inject(router_1.Location))
    ], Tabs);
    return Tabs;
})();
exports.Tabs = Tabs;
//# sourceMappingURL=tabs.js.map