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
var registrationObject_1 = require('./registrationObject');
var registerService_1 = require('./registerService');
var common_1 = require('angular2/common');
var tabs_1 = require('../tabs/tabs');
var tab_1 = require('../tabs/tab');
var Register = (function () {
    function Register(locationObj, router, regService, fb) {
        this.locationObj = locationObj;
        this.router = router;
        this.regService = regService;
        this.fb = fb;
        this.payload = null;
        this.showLoading = false;
        this.fname = '';
        this.lname = '';
        this.type = 'home';
        this.address = '';
        this.location = locationObj;
        this.registrationService = regService;
        this.formBuilder = fb;
        this.getRegistrationDetails();
        this.form = this.formBuilder.group({
            "fname": [this.fname, common_1.Validators.required],
            "lname": [this.lname, common_1.Validators.required],
            "type": [this.type],
            "address": [this.address, common_1.Validators.required]
        });
    }
    Register.prototype.gotoConfirm = function () {
        var self = this;
        self.showLoading = true;
        this.payload = JSON.stringify(this.form.value);
        var registration = new registrationObject_1.Registration(this.form.controls.fname.value, this.form.controls.lname.value, this.form.controls.type.value, this.form.controls.address.value);
        this.registrationService.saveRegistrationDetails(registration).map(function (res) { return res.json(); }).subscribe(function (res) {
            self.showLoading = false;
            self.result = res;
            console.log(self.result);
            if (self.result.RegDetails.DataSaved == true) {
                self.registrationService.setReturnedResult(self.result);
                self.router.navigateByUrl('/Register/Confirm');
            }
        });
    };
    Register.prototype.getRegistrationDetails = function () {
        var _this = this;
        var self = this;
        self.showLoading = true;
        this.registrationService.getRegistrationDetails().map(function (res) { return res.json(); }).subscribe(function (res) { return _this.mapResult(res); });
    };
    Register.prototype.mapResult = function (data) {
        this.regdata = data.registrationDetails;
        console.log(this.regdata);
        if (this.regdata != null) {
            this.fname = this.regdata.FirstName;
            this.lname = this.regdata.LastName;
            this.type = this.regdata.Type;
            this.address = this.regdata.Address;
        }
        this.showLoading = false;
    };
    Register = __decorate([
        core_1.Component({
            selector: 'register',
            directives: [router_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES, common_1.CORE_DIRECTIVES, tabs_1.Tabs, tab_1.Tab],
            templateUrl: './components/location/register.html',
            providers: [registerService_1.RegisterService]
        }),
        __param(0, core_2.Inject(router_1.Location)),
        __param(1, core_2.Inject(router_1.Router)),
        __param(2, core_2.Inject(registerService_1.RegisterService)),
        __param(3, core_2.Inject(common_1.FormBuilder))
    ], Register);
    return Register;
})();
exports.Register = Register;
//# sourceMappingURL=register.js.map