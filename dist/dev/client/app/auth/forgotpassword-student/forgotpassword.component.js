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
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
require('rxjs/add/operator/filter');
var auth_service_1 = require("../auth.service");
var ForgotPasswordComponent = (function () {
    function ForgotPasswordComponent(authService, formBuilder, router) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.isSending = false;
        this.createForm();
    }
    ForgotPasswordComponent.prototype.createForm = function () {
        this.userForm = this.formBuilder.group({
            'email': ['', [forms_1.Validators.required]]
        });
    };
    ForgotPasswordComponent.prototype.reset = function () {
        this.createForm();
    };
    ForgotPasswordComponent.prototype.send = function (email) {
        var _this = this;
        this.isSending = true;
        this.authService.forgotPassword(email)
            .subscribe(function (data) {
            if (data.status == 'success') {
                _this.router.navigate(['./auth/signin']);
                _this.isSending = false;
            }
            else {
                _this.errorMessage = data.errormessage;
                _this.isSending = false;
            }
        }, function (error) {
            console.log(error);
        });
    };
    ForgotPasswordComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-forgotpassword',
            templateUrl: 'forgotpassword.component.html',
            styleUrls: ['forgotpassword.component.css'],
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, forms_1.FormBuilder, router_1.Router])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());
exports.ForgotPasswordComponent = ForgotPasswordComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRoL2ZvcmdvdHBhc3N3b3JkLXN0dWRlbnQvZm9yZ290cGFzc3dvcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsdUJBQXNDLGlCQUFpQixDQUFDLENBQUE7QUFDeEQsc0JBQWlELGdCQUFnQixDQUFDLENBQUE7QUFDbEUsUUFBTywwQkFBMEIsQ0FBQyxDQUFBO0FBQ2xDLDZCQUEwQixpQkFBaUIsQ0FBQyxDQUFBO0FBUzVDO0lBTUUsaUNBQW9CLFdBQXdCLEVBQVUsV0FBd0IsRUFBVSxNQUFjO1FBQWxGLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRnRHLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFHekIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCw0Q0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNyQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3JDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCx1Q0FBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxzQ0FBSSxHQUFKLFVBQUssS0FBVTtRQUFmLGlCQXFCQztRQW5CQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUV0QixJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7YUFDL0IsU0FBUyxDQUNOLFVBQUMsSUFBUztZQUNSLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksU0FBUyxDQUFDLENBQUEsQ0FBQztnQkFDM0IsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO2dCQUN4QyxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUV6QixDQUFDO1lBQUEsSUFBSSxDQUFDLENBQUM7Z0JBRUwsS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUN0QyxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN6QixDQUFDO1FBQ0gsQ0FBQyxFQUNELFVBQUMsS0FBUztZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUNKLENBQUM7SUFDVixDQUFDO0lBL0NIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFdBQVcsRUFBRSwrQkFBK0I7WUFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7U0FDNUMsQ0FBQzs7K0JBQUE7SUE0Q0YsOEJBQUM7QUFBRCxDQTNDQSxBQTJDQyxJQUFBO0FBM0NZLCtCQUF1QiwwQkEyQ25DLENBQUEiLCJmaWxlIjoiYXBwL2F1dGgvZm9yZ290cGFzc3dvcmQtc3R1ZGVudC9mb3Jnb3RwYXNzd29yZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Um91dGVyLCBOYXZpZ2F0aW9uU3RhcnR9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIFZhbGlkYXRvciwgVmFsaWRhdG9yc30gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2ZpbHRlcic7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi4vYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQge1ZhbGlkYXRpb25TZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdmFsaWRhdGlvbi5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1mb3Jnb3RwYXNzd29yZCcsXG4gIHRlbXBsYXRlVXJsOiAnZm9yZ290cGFzc3dvcmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZm9yZ290cGFzc3dvcmQuY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBGb3Jnb3RQYXNzd29yZENvbXBvbmVudCB7XG5cbiAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG4gIHVzZXJGb3JtOiBhbnk7XG4gIGlzU2VuZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgIHRoaXMuY3JlYXRlRm9ybSgpO1xuICB9XG5cbiAgY3JlYXRlRm9ybSgpe1xuICAgIHRoaXMudXNlckZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICdlbWFpbCc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXVxuICAgIH0pO1xuICB9XG5cbiAgcmVzZXQoKXtcbiAgICB0aGlzLmNyZWF0ZUZvcm0oKTtcbiAgfVxuXG4gIHNlbmQoZW1haWw6IGFueSkge1xuXG4gICAgdGhpcy5pc1NlbmRpbmcgPSB0cnVlO1xuXG4gICAgdGhpcy5hdXRoU2VydmljZS5mb3Jnb3RQYXNzd29yZChlbWFpbClcbiAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoZGF0YS5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKXtcbiAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLi9hdXRoL3NpZ25pbiddKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMuaXNTZW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IGRhdGEuZXJyb3JtZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgdGhpcy5pc1NlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIChlcnJvcjphbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICB9XG5cbn1cbiJdfQ==
