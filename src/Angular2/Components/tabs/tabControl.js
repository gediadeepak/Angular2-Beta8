var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//our root app component
var core_1 = require('angular2/core');
var tabs_1 = require('./tabs');
var tab_1 = require('./tab');
var TabControl = (function () {
    function TabControl() {
    }
    TabControl = __decorate([
        core_1.Component({
            selector: 'tab-control',
            templateUrl: './components/tabs/tabExample.html',
            directives: [tabs_1.Tabs, tab_1.Tab]
        })
    ], TabControl);
    return TabControl;
})();
exports.TabControl = TabControl;
//# sourceMappingURL=tabControl.js.map