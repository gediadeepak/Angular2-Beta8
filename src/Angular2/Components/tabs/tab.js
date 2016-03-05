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
var tabs_1 = require('./tabs');
var core_2 = require('angular2/core');
var Tab = (function () {
    function Tab(tabs) {
        this.tabs = tabs;
        this.active = this.active || false;
        tabs.addTab(this);
    }
    Tab = __decorate([
        core_1.Component({
            selector: 'tab',
            inputs: ['title:tabTitle', 'active'],
            styles: ['.pane{padding: 1em; }'],
            templateUrl: './components/tabs/tab.html'
        }),
        __param(0, core_2.Inject(tabs_1.Tabs))
    ], Tab);
    return Tab;
})();
exports.Tab = Tab;
//# sourceMappingURL=tab.js.map