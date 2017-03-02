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
var ForgotPasswordStudentComponent = (function () {
    function ForgotPasswordStudentComponent(authService, formBuilder, router) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.isSending = false;
        this.createForm();
    }
    ForgotPasswordStudentComponent.prototype.createForm = function () {
        this.userForm = this.formBuilder.group({
            'email': ['', [forms_1.Validators.required]]
        });
    };
    ForgotPasswordStudentComponent.prototype.reset = function () {
        this.createForm();
    };
    ForgotPasswordStudentComponent.prototype.send = function (email) {
        var _this = this;
        this.isSending = true;
        this.authService.forgotPasswordStudent(email)
            .subscribe(function (data) {
            if (data.status == 'success') {
                _this.router.navigate(['./student']);
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
    ForgotPasswordStudentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-forgotpasswordstudent',
            templateUrl: 'forgotpasswordstudent.component.html',
            styleUrls: ['forgotpasswordstudent.component.css'],
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, forms_1.FormBuilder, router_1.Router])
    ], ForgotPasswordStudentComponent);
    return ForgotPasswordStudentComponent;
}());
exports.ForgotPasswordStudentComponent = ForgotPasswordStudentComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRoL2ZvcmdvdHBhc3N3b3Jkc3R1ZGVudC9mb3Jnb3RwYXNzd29yZHN0dWRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsdUJBQXNDLGlCQUFpQixDQUFDLENBQUE7QUFDeEQsc0JBQWlELGdCQUFnQixDQUFDLENBQUE7QUFDbEUsUUFBTywwQkFBMEIsQ0FBQyxDQUFBO0FBQ2xDLDZCQUEwQixpQkFBaUIsQ0FBQyxDQUFBO0FBUzVDO0lBTUUsd0NBQW9CLFdBQXdCLEVBQVUsV0FBd0IsRUFBVSxNQUFjO1FBQWxGLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRnRHLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFHekIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxtREFBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNyQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3JDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCw4Q0FBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCw2Q0FBSSxHQUFKLFVBQUssS0FBVTtRQUFmLGlCQXFCQztRQW5CQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUV0QixJQUFJLENBQUMsV0FBVyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQzthQUN0QyxTQUFTLENBQ04sVUFBQyxJQUFTO1lBQ1IsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxTQUFTLENBQUMsQ0FBQSxDQUFDO2dCQUMzQixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BDLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBRXpCLENBQUM7WUFBQSxJQUFJLENBQUMsQ0FBQztnQkFFTCxLQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ3RDLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLENBQUM7UUFDSCxDQUFDLEVBQ0QsVUFBQyxLQUFTO1lBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQ0osQ0FBQztJQUNWLENBQUM7SUEvQ0g7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSwyQkFBMkI7WUFDckMsV0FBVyxFQUFFLHNDQUFzQztZQUNuRCxTQUFTLEVBQUUsQ0FBQyxxQ0FBcUMsQ0FBQztTQUNuRCxDQUFDOztzQ0FBQTtJQTRDRixxQ0FBQztBQUFELENBM0NBLEFBMkNDLElBQUE7QUEzQ1ksc0NBQThCLGlDQTJDMUMsQ0FBQSIsImZpbGUiOiJhcHAvYXV0aC9mb3Jnb3RwYXNzd29yZHN0dWRlbnQvZm9yZ290cGFzc3dvcmRzdHVkZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXIsIE5hdmlnYXRpb25TdGFydH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgVmFsaWRhdG9yLCBWYWxpZGF0b3JzfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZmlsdGVyJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7VmFsaWRhdGlvblNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy92YWxpZGF0aW9uLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLWZvcmdvdHBhc3N3b3Jkc3R1ZGVudCcsXG4gIHRlbXBsYXRlVXJsOiAnZm9yZ290cGFzc3dvcmRzdHVkZW50LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2ZvcmdvdHBhc3N3b3Jkc3R1ZGVudC5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEZvcmdvdFBhc3N3b3JkU3R1ZGVudENvbXBvbmVudCB7XG5cbiAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG4gIHVzZXJGb3JtOiBhbnk7XG4gIGlzU2VuZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgIHRoaXMuY3JlYXRlRm9ybSgpO1xuICB9XG5cbiAgY3JlYXRlRm9ybSgpe1xuICAgIHRoaXMudXNlckZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICdlbWFpbCc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXVxuICAgIH0pO1xuICB9XG5cbiAgcmVzZXQoKXtcbiAgICB0aGlzLmNyZWF0ZUZvcm0oKTtcbiAgfVxuXG4gIHNlbmQoZW1haWw6IGFueSkge1xuXG4gICAgdGhpcy5pc1NlbmRpbmcgPSB0cnVlO1xuXG4gICAgdGhpcy5hdXRoU2VydmljZS5mb3Jnb3RQYXNzd29yZFN0dWRlbnQoZW1haWwpXG4gICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGRhdGEuc3RhdHVzID09ICdzdWNjZXNzJyl7XG4gICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4vc3R1ZGVudCddKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMuaXNTZW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IGRhdGEuZXJyb3JtZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgdGhpcy5pc1NlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIChlcnJvcjphbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICB9XG5cbn1cbiJdfQ==
