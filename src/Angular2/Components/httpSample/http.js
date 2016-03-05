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
var core_2 = require('angular2/core');
var httpService_1 = require('./httpService');
var tabs_1 = require('../tabs/tabs');
var tab_1 = require('../tabs/tab');
var httpSample = (function () {
    function httpSample(serviceObj) {
        this.serviceObj = serviceObj;
        this.showLoading = false;
        this.result = new HomeContent();
        this.service = serviceObj;
    }
    httpSample.prototype.getData = function () {
        this.showLoading = true;
        var self = this;
        this.service.getAllAchievements().map(function (res) { return res.json(); }).subscribe(function (res) {
            self.showLoading = false;
            self.result = res.data;
            console.log(self.result);
        });
    };
    httpSample = __decorate([
        core_1.Component({
            selector: 'httpSample',
            providers: [httpService_1.Service],
            directives: [tabs_1.Tabs, tab_1.Tab],
            templateUrl: "./components/httpSample/httpSample.html"
        }),
        __param(0, core_2.Inject(httpService_1.Service))
    ], httpSample);
    return httpSample;
})();
exports.httpSample = httpSample;
var HomeContent = (function () {
    function HomeContent() {
        this.Title = '';
        this.Description = '';
    }
    return HomeContent;
})();
//# sourceMappingURL=http.js.map