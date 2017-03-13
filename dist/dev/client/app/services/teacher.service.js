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
var xhr_headers_1 = require("./xhr-headers");
var auth_service_1 = require("../auth/auth.service");
var config_1 = require('./config');
var TeacherService = (function () {
    function TeacherService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.teacherUrl = config_1.apiUrl + "teacher";
        this.registrationUrl = config_1.apiUrl + "user/registration";
    }
    TeacherService.prototype.getTeacher = function () {
        return this.http.get(this.teacherUrl + "?token=" + this.authService.token)
            .map(function (res) { return res.json().data.teacher_profile[0]; })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    TeacherService.prototype.addTeacher = function (teacher) {
        var body = JSON.stringify(teacher);
        return this.http.post("" + this.registrationUrl, body, xhr_headers_1.xhrHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
    TeacherService.prototype.editTeacherProfile = function (teacher) {
        var body = JSON.stringify(teacher);
        return this.http.put(this.teacherUrl + "/edit/profile?token=" + this.authService.token, body, xhr_headers_1.xhrHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    TeacherService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, auth_service_1.AuthService])
    ], TeacherService);
    return TeacherService;
}());
exports.TeacherService = TeacherService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy90ZWFjaGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUErQixlQUFlLENBQUMsQ0FBQTtBQUMvQyxxQkFBNkQsZUFBZSxDQUFDLENBQUE7QUFFN0UsbUJBQXlCLFNBQVMsQ0FBQyxDQUFBO0FBQ25DLFFBQU8sdUJBQXVCLENBQUMsQ0FBQTtBQUMvQixRQUFPLHlCQUF5QixDQUFDLENBQUE7QUFFakMsNEJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLDZCQUEwQixzQkFBc0IsQ0FBQyxDQUFBO0FBRWpELHVCQUFxQixVQUFVLENBQUMsQ0FBQTtBQUdoQztJQU9JLHdCQUFxQixJQUFVLEVBQVUsV0FBd0I7UUFBNUMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBSHpELGVBQVUsR0FBTSxlQUFNLFlBQVMsQ0FBQztRQUNoQyxvQkFBZSxHQUFNLGVBQU0sc0JBQW1CLENBQUM7SUFFYSxDQUFDO0lBRXJFLG1DQUFVLEdBQVY7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLFVBQVUsZUFBVSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQU8sQ0FBQzthQUNyRSxHQUFHLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBbEMsQ0FBa0MsQ0FBQzthQUNoRCxLQUFLLENBQUMsVUFBQyxLQUFTLElBQUssT0FBQSxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLElBQUksY0FBYyxDQUFDLEVBQXRELENBQXNELENBQUMsQ0FBQztJQUN0RixDQUFDO0lBSUQsbUNBQVUsR0FBVixVQUFXLE9BQWdCO1FBQ3ZCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUcsSUFBSSxDQUFDLGVBQWlCLEVBQUUsSUFBSSxFQUFFLHdCQUFVLEVBQUUsQ0FBQzthQUMvRCxHQUFHLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3pCLEtBQUssQ0FBQyxVQUFDLEtBQVMsSUFBSyxPQUFBLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQTlCLENBQThCLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsMkNBQWtCLEdBQWxCLFVBQW1CLE9BQWdCO1FBQ2pDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxVQUFVLDRCQUF1QixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQU8sRUFBRSxJQUFJLEVBQUUsd0JBQVUsRUFBRSxDQUFDO2FBQ3hHLEdBQUcsQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDeEIsS0FBSyxDQUFDLFVBQUMsS0FBUyxJQUFLLE9BQUEsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxJQUFJLGNBQWMsQ0FBQyxFQUF0RCxDQUFzRCxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQTlCTDtRQUFDLGlCQUFVLEVBQUU7O3NCQUFBO0lBaUNiLHFCQUFDO0FBQUQsQ0FoQ0EsQUFnQ0MsSUFBQTtBQWhDWSxzQkFBYyxpQkFnQzFCLENBQUEiLCJmaWxlIjoiYXBwL3NlcnZpY2VzL3RlYWNoZXIuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHAsIFJlc3BvbnNlLCBSZXF1ZXN0T3B0aW9ucywgSGVhZGVycywgSnNvbnB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XG5pbXBvcnQge1RlYWNoZXJ9IGZyb20gXCIuLi9tb2RlbHMvdGVhY2hlclwiO1xuaW1wb3J0IHt4aHJIZWFkZXJzfSBmcm9tIFwiLi94aHItaGVhZGVyc1wiO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uL2F1dGgvYXV0aC5zZXJ2aWNlXCI7XG5cbmltcG9ydCB7YXBpVXJsfSBmcm9tICcuL2NvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUZWFjaGVyU2VydmljZSB7XG5cbiAgICB0ZWFjaGVyOiBUZWFjaGVyO1xuXG4gICAgcHJpdmF0ZSB0ZWFjaGVyVXJsID0gYCR7YXBpVXJsfXRlYWNoZXJgO1xuICAgIHByaXZhdGUgcmVnaXN0cmF0aW9uVXJsID0gYCR7YXBpVXJsfXVzZXIvcmVnaXN0cmF0aW9uYDtcblxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIGh0dHA6IEh0dHAsIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7fVxuXG4gICAgZ2V0VGVhY2hlciAoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy50ZWFjaGVyVXJsfT90b2tlbj0ke3RoaXMuYXV0aFNlcnZpY2UudG9rZW59YClcbiAgICAgICAgICAgIC5tYXAoKHJlcykgPT4gcmVzLmpzb24oKS5kYXRhLnRlYWNoZXJfcHJvZmlsZVswXSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6YW55KSA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKS5lcnJvciB8fCAnU2VydmVyIGVycm9yJykpO1xuICAgIH1cblxuXG5cbiAgICBhZGRUZWFjaGVyKHRlYWNoZXI6IFRlYWNoZXIpOiBPYnNlcnZhYmxlPFRlYWNoZXI+e1xuICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KHRlYWNoZXIpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy5yZWdpc3RyYXRpb25Vcmx9YCwgYm9keSwgeGhySGVhZGVycygpKVxuICAgICAgICAgICAgLm1hcCgocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAuY2F0Y2goKGVycm9yOmFueSkgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcbiAgICB9XG5cbiAgICBlZGl0VGVhY2hlclByb2ZpbGUodGVhY2hlcjogVGVhY2hlcik6IE9ic2VydmFibGU8VGVhY2hlcj57XG4gICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KHRlYWNoZXIpO1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoYCR7dGhpcy50ZWFjaGVyVXJsfS9lZGl0L3Byb2ZpbGU/dG9rZW49JHt0aGlzLmF1dGhTZXJ2aWNlLnRva2VufWAsIGJvZHksIHhockhlYWRlcnMoKSlcbiAgICAgICAgLm1hcCgocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAuY2F0Y2goKGVycm9yOmFueSkgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkuZXJyb3IgfHwgJ1NlcnZlciBlcnJvcicpKTtcbiAgICB9XG5cblxufVxuIl19
