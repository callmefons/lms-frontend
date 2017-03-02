"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var xhr_headers_1 = require("../services/xhr-headers");
var router_1 = require("@angular/router");
var config_1 = require('../services/config');
var AuthService = (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.token = localStorage.getItem('token');
        this.id = localStorage.getItem('id');
    }
    AuthService.prototype.signin = function (teacher) {
        var body = JSON.stringify(teacher);
        return this.http.post(config_1.apiUrl + "user/signin", body, xhr_headers_1.xhrHeaders())
            .map(function (res) { return res.json(); })
            .cache();
    };
    AuthService.prototype.studentSignin = function (student) {
        var body = JSON.stringify(student);
        return this.http.post(config_1.apiUrl + "user/signin/student", body, xhr_headers_1.xhrHeaders())
            .map(function (res) { return res.json(); })
            .cache();
    };
    AuthService.prototype.forgotPassword = function (email) {
        var body = JSON.stringify(email);
        return this.http.post(config_1.apiUrl + "password/email", body, xhr_headers_1.xhrHeaders())
            .map(function (res) { return res.json(); })
            .cache();
    };
    AuthService.prototype.forgotPasswordStudent = function (email) {
        var body = JSON.stringify(email);
        return this.http.post(config_1.apiUrl + "password/email/student", body, xhr_headers_1.xhrHeaders())
            .map(function (res) { return res.json(); })
            .cache();
    };
    AuthService.prototype.resetPassword = function (password) {
        var body = JSON.stringify(password);
        return this.http.post(config_1.apiUrl + "password/reset", body, xhr_headers_1.xhrHeaders())
            .map(function (res) { return res.json(); })
            .cache();
    };
    AuthService.prototype.signout = function () {
        this.token = undefined;
        this.id = undefined;
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        localStorage.removeItem('id');
        return Rx_1.Observable.of(true);
    };
    AuthService.prototype.isLoggedIn = function () {
        return !!localStorage.getItem('token');
    };
    AuthService.prototype.setToken = function (token, role, id, status) {
        this.token = token;
        this.id = id;
        localStorage.setItem('token', this.token);
        localStorage.setItem('role', role);
        localStorage.setItem('id', id);
        localStorage.setItem('status', status);
        return Rx_1.Observable.of('token');
    };
    AuthService.prototype.checkRole = function () {
        if (localStorage.getItem('role') == 'teacher') {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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LFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksU0FBUyxDQUFDLENBQUEsQ0FBQztZQUMxQyxNQUFNLENBQUMsSUFBSSxDQUFBO1FBQ2YsQ0FBQztRQUFBLElBQUksQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLEtBQUssQ0FBQTtRQUNoQixDQUFDO0lBQ0wsQ0FBQztJQWhGTDtRQUFDLGlCQUFVLEVBQUU7O21CQUFBO0lBb0ZiLGtCQUFDO0FBQUQsQ0FuRkEsQUFtRkMsSUFBQTtBQW5GWSxtQkFBVyxjQW1GdkIsQ0FBQSIsImZpbGUiOiJhcHAvYXV0aC9hdXRoLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwLCBSZXNwb25zZSwgUmVxdWVzdE9wdGlvbnMsIEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XG5pbXBvcnQge1RlYWNoZXJ9IGZyb20gXCIuLi9tb2RlbHMvdGVhY2hlclwiO1xuaW1wb3J0IHt4aHJIZWFkZXJzfSBmcm9tIFwiLi4vc2VydmljZXMveGhyLWhlYWRlcnNcIjtcbmltcG9ydCB7U3R1ZGVudH0gZnJvbSBcIi4uL21vZGVscy9zdHVkZW50XCI7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHthcGlVcmx9IGZyb20gJy4uL3NlcnZpY2VzL2NvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG5cbiAgICBhY3RpdmF0ZTogYW55O1xuICAgIHRva2VuOiBzdHJpbmc7XG4gICAgaWQ6IGFueTtcbiAgICByZWRpcmVjdFVybDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSAgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgdGhpcy50b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuICAgICAgICB0aGlzLmlkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkJyk7XG4gICAgfVxuXG4gICAgc2lnbmluICh0ZWFjaGVyOiBUZWFjaGVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh0ZWFjaGVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke2FwaVVybH11c2VyL3NpZ25pbmAsIGJvZHksIHhockhlYWRlcnMoKSlcbiAgICAgICAgICAgIC5tYXAoKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC5jYWNoZSgpO1xuICAgIH1cblxuICAgIHN0dWRlbnRTaWduaW4oc3R1ZGVudDogU3R1ZGVudCkgOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KHN0dWRlbnQpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7YXBpVXJsfXVzZXIvc2lnbmluL3N0dWRlbnRgLCBib2R5LCB4aHJIZWFkZXJzKCkpXG4gICAgICAgICAgICAubWFwKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAuY2FjaGUoKTtcbiAgICB9XG5cbiAgICBmb3Jnb3RQYXNzd29yZCAoZW1haWw6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KGVtYWlsKTtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHthcGlVcmx9cGFzc3dvcmQvZW1haWxgLCBib2R5LCB4aHJIZWFkZXJzKCkpXG4gICAgICAgIC5tYXAoKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLmNhY2hlKCk7XG4gICAgfVxuXG4gICAgZm9yZ290UGFzc3dvcmRTdHVkZW50IChlbWFpbDogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoZW1haWwpO1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke2FwaVVybH1wYXNzd29yZC9lbWFpbC9zdHVkZW50YCwgYm9keSwgeGhySGVhZGVycygpKVxuICAgICAgICAubWFwKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC5jYWNoZSgpO1xuICAgIH1cblxuXG5cbiAgICByZXNldFBhc3N3b3JkIChwYXNzd29yZDogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkocGFzc3dvcmQpO1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke2FwaVVybH1wYXNzd29yZC9yZXNldGAsIGJvZHksIHhockhlYWRlcnMoKSlcbiAgICAgICAgLm1hcCgocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAuY2FjaGUoKTtcbiAgICB9XG5cbiAgICBzaWdub3V0KCkge1xuICAgICAgICB0aGlzLnRva2VuID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmlkID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncm9sZScpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnaWQnKTtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUub2YodHJ1ZSk7XG4gICAgfVxuXG4gICAgaXNMb2dnZWRJbigpe1xuICAgICAgICByZXR1cm4gISFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcbiAgICB9XG5cbiAgICBzZXRUb2tlbih0b2tlbjogYW55LCByb2xlOiBzdHJpbmcsIGlkPzogYW55LCBzdGF0dXM/OiBhbnkpe1xuICAgICAgICB0aGlzLnRva2VuID0gdG9rZW47XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdGhpcy50b2tlbik7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdyb2xlJywgcm9sZSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpZCcsIGlkKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0YXR1cycsIHN0YXR1cyk7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLm9mKCd0b2tlbicpO1xuICAgIH1cblxuICAgIGNoZWNrUm9sZSgpe1xuICAgICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncm9sZScpID09ICd0ZWFjaGVyJyl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbiJdfQ==
