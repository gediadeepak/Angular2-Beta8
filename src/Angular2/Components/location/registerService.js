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
var http_1 = require('angular2/http');
var RegisterService = (function () {
    function RegisterService(http) {
        this.http = http;
    }
    RegisterService.prototype.saveRegistrationDetails = function (registerObj) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var path = '/angular2-beta/Api/Registration/SaveRegistrationDetails';
        return this.http.post(path, JSON.stringify(registerObj), { headers: headers });
    };
    RegisterService.prototype.getRegistrationDetails = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var path = '/angular2-beta/Api/registration/GetRegistrationDetails';
        return this.http.get(path);
    };
    RegisterService.prototype.logError = function (err) {
        console.log(err);
    };
    RegisterService.prototype.setReturnedResult = function (retResult) {
        this.returnedResult = retResult;
    };
    RegisterService.prototype.getReturnedResult = function () { return this.returnedResult; };
    RegisterService = __decorate([
        __param(0, core_1.Inject(http_1.Http))
    ], RegisterService);
    return RegisterService;
})();
exports.RegisterService = RegisterService;
//# sourceMappingURL=registerService.js.map