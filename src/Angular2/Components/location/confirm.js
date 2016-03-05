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
var router_1 = require('angular2/router');
var registerService_1 = require('./registerService');
var registrationObject_1 = require('./registrationObject');
var Confirm = (function () {
    function Confirm(locationObj, router, regService) {
        this.locationObj = locationObj;
        this.router = router;
        this.regService = regService;
        this.result = new registrationObject_1.Registration();
        this.showLoading = false;
        this.location = locationObj;
        this.registerService = regService;
        this.getRegistrationDetails();
    }
    Confirm.prototype.getRegistrationDetails = function () {
        var _this = this;
        var self = this;
        self.showLoading = true;
        this.registerService.getRegistrationDetails().map(function (res) { return res.json(); }).subscribe(function (res) { return _this.mapResult(res); });
    };
    Confirm.prototype.mapResult = function (data) {
        this.result = data.registrationDetails;
        console.log(this.result);
        this.showLoading = false;
    };
    Confirm.prototype.gotoThankYou = function () {
        this.router.navigateByUrl('/Register/ThankYou');
    };
    Confirm.prototype.gotoRegister = function () {
        this.router.navigateByUrl('/Register/..');
    };
    Confirm = __decorate([
        core_1.Component({
            selector: 'confirm',
            directives: [router_1.ROUTER_DIRECTIVES],
            templateUrl: './components/location/confirm.html',
            providers: [registerService_1.RegisterService]
        }),
        __param(0, core_2.Inject(router_1.Location)),
        __param(1, core_2.Inject(router_1.Router)),
        __param(2, core_2.Inject(registerService_1.RegisterService))
    ], Confirm);
    return Confirm;
})();
exports.Confirm = Confirm;
//# sourceMappingURL=confirm.js.map