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
var auth_service_1 = require("./auth.service");
var router_1 = require("@angular/router");
var teacher_1 = require("../models/teacher");
var forms_1 = require("@angular/forms");
require('rxjs/add/operator/filter');
var validation_service_1 = require("../services/validation.service");
var SigninComponent = (function () {
    function SigninComponent(authService, formBuilder, router) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.teacher = new teacher_1.Teacher();
        this.setMessage();
        this.createForm();
    }
    SigninComponent.prototype.setMessage = function () {
        this.message = 'Logged ' + (this.authService.isLoggedIn() ? 'in' : 'out');
    };
    SigninComponent.prototype.createForm = function () {
        this.userForm = this.formBuilder.group({
            'email': ['', [forms_1.Validators.required, validation_service_1.ValidationService.emailValidator]],
            'password': ['', [forms_1.Validators.required]]
        });
    };
    SigninComponent.prototype.reset = function () {
        this.createForm();
    };
    SigninComponent.prototype.signin = function (teacher) {
        var _this = this;
        this.message = 'Trying to log in ...';
        this.teacher = new teacher_1.Teacher(teacher.email, teacher.password);
        this.authService.signin(this.teacher)
            .subscribe(function (data) {
            if (data.status == 'success' && data.data.role == 'teacher') {
                _this.authService.setToken(data.data.token, 'teacher');
                _this.router.navigate(['./teach']);
            }
            else if (data.status = 'failed') {
                _this.errorMessage = 'username or password not match!';
            }
            else {
                _this.errorMessage = data.errormessage;
            }
        }, function (error) {
            _this.errorMessage = 'Please Activate Your Account. Before you can login, you must active your account with the code sent to your email address.';
        });
    };
    SigninComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-signin',
            templateUrl: 'signin.component.html',
            styleUrls: ['signin.component.css'],
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, forms_1.FormBuilder, router_1.Router])
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRoL3NpZ25pbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyw2QkFBMEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUMzQyx1QkFBc0MsaUJBQWlCLENBQUMsQ0FBQTtBQUN4RCx3QkFBc0IsbUJBQW1CLENBQUMsQ0FBQTtBQUMxQyxzQkFBaUQsZ0JBQWdCLENBQUMsQ0FBQTtBQUNsRSxRQUFPLDBCQUEwQixDQUFDLENBQUE7QUFDbEMsbUNBQWdDLGdDQUFnQyxDQUFDLENBQUE7QUFRakU7SUFPRSx5QkFBb0IsV0FBd0IsRUFBVSxXQUF3QixFQUFVLE1BQWM7UUFBbEYsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFGdEcsWUFBTyxHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFDO1FBR3RCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFHcEIsQ0FBQztJQUVELG9DQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCxvQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNyQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsRUFBRSxzQ0FBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUN0RSxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3hDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCwrQkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxnQ0FBTSxHQUFOLFVBQU8sT0FBZ0I7UUFBdkIsaUJBcUJDO1FBcEJDLElBQUksQ0FBQyxPQUFPLEdBQUcsc0JBQXNCLENBQUM7UUFDdEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUM5QixTQUFTLENBQ04sVUFBQyxJQUFTO1lBRVIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksU0FBUyxDQUFDLENBQUEsQ0FBQztnQkFDMUQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQ3RELEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNwQyxDQUFDO1lBQUEsSUFBSSxDQUFFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLENBQUEsQ0FBQztnQkFDaEMsS0FBSSxDQUFDLFlBQVksR0FBRyxpQ0FBaUMsQ0FBQztZQUN4RCxDQUFDO1lBQUEsSUFBSSxDQUFDLENBQUM7Z0JBQ0wsS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ3hDLENBQUM7UUFDSCxDQUFDLEVBQ0QsVUFBQyxLQUFLO1lBQ0osS0FBSSxDQUFDLFlBQVksR0FBRyw0SEFBNEgsQ0FBQTtRQUVsSixDQUFDLENBQ0osQ0FBQztJQUNWLENBQUM7SUF4REg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDcEMsQ0FBQzs7dUJBQUE7SUFxREYsc0JBQUM7QUFBRCxDQXBEQSxBQW9EQyxJQUFBO0FBcERZLHVCQUFlLGtCQW9EM0IsQ0FBQSIsImZpbGUiOiJhcHAvYXV0aC9zaWduaW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7Um91dGVyLCBOYXZpZ2F0aW9uU3RhcnR9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7VGVhY2hlcn0gZnJvbSBcIi4uL21vZGVscy90ZWFjaGVyXCI7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBWYWxpZGF0b3IsIFZhbGlkYXRvcnN9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9maWx0ZXInO1xuaW1wb3J0IHtWYWxpZGF0aW9uU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL3ZhbGlkYXRpb24uc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtc2lnbmluJyxcbiAgdGVtcGxhdGVVcmw6ICdzaWduaW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2lnbmluLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU2lnbmluQ29tcG9uZW50IHtcblxuICBtZXNzYWdlOiBzdHJpbmc7XG4gIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuICB1c2VyRm9ybTogYW55O1xuICB0ZWFjaGVyID0gbmV3IFRlYWNoZXIoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICB0aGlzLnNldE1lc3NhZ2UoKTtcbiAgICB0aGlzLmNyZWF0ZUZvcm0oKTtcblxuICAgIC8vIHJvdXRlci5ldmVudHMuc3Vic2NyaWJlKHZhbHVlID0+IGNvbnNvbGUubG9nKHZhbHVlKSk7XG4gIH1cblxuICBzZXRNZXNzYWdlKCkge1xuICAgIHRoaXMubWVzc2FnZSA9ICdMb2dnZWQgJyArICh0aGlzLmF1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKSA/ICdpbicgOiAnb3V0Jyk7XG4gIH1cblxuICBjcmVhdGVGb3JtKCl7XG4gICAgdGhpcy51c2VyRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgJ2VtYWlsJzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdGlvblNlcnZpY2UuZW1haWxWYWxpZGF0b3JdXSxcbiAgICAgICdwYXNzd29yZCc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXVxuICAgIH0pO1xuICB9XG5cbiAgcmVzZXQoKXtcbiAgICB0aGlzLmNyZWF0ZUZvcm0oKTtcbiAgfVxuXG4gIHNpZ25pbih0ZWFjaGVyOiBUZWFjaGVyKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gJ1RyeWluZyB0byBsb2cgaW4gLi4uJztcbiAgICB0aGlzLnRlYWNoZXIgPSBuZXcgVGVhY2hlcih0ZWFjaGVyLmVtYWlsLCB0ZWFjaGVyLnBhc3N3b3JkKTtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLnNpZ25pbih0aGlzLnRlYWNoZXIpXG4gICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgaWYoZGF0YS5zdGF0dXMgPT0gJ3N1Y2Nlc3MnICYmIGRhdGEuZGF0YS5yb2xlID09ICd0ZWFjaGVyJyl7XG4gICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLnNldFRva2VuKGRhdGEuZGF0YS50b2tlbiwgJ3RlYWNoZXInKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLi90ZWFjaCddKTtcbiAgICAgICAgICAgICAgICB9ZWxzZSAgaWYoZGF0YS5zdGF0dXMgPSAnZmFpbGVkJyl7XG4gICAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICd1c2VybmFtZSBvciBwYXNzd29yZCBub3QgbWF0Y2ghJztcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IGRhdGEuZXJyb3JtZXNzYWdlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnUGxlYXNlIEFjdGl2YXRlIFlvdXIgQWNjb3VudC4gQmVmb3JlIHlvdSBjYW4gbG9naW4sIHlvdSBtdXN0IGFjdGl2ZSB5b3VyIGFjY291bnQgd2l0aCB0aGUgY29kZSBzZW50IHRvIHlvdXIgZW1haWwgYWRkcmVzcy4nXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICB9XG5cbn1cbiJdfQ==
