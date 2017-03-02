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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRoL2ZvcmdvdHBhc3N3b3JkLXN0dWRlbnQvZm9yZ290cGFzc3dvcmRzdHVkZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHVCQUFzQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3hELHNCQUFpRCxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ2xFLFFBQU8sMEJBQTBCLENBQUMsQ0FBQTtBQUNsQyw2QkFBMEIsaUJBQWlCLENBQUMsQ0FBQTtBQVM1QztJQU1FLGlDQUFvQixXQUF3QixFQUFVLFdBQXdCLEVBQVUsTUFBYztRQUFsRixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUZ0RyxjQUFTLEdBQVksS0FBSyxDQUFDO1FBR3pCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsNENBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDckMsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsa0JBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNyQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsdUNBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsc0NBQUksR0FBSixVQUFLLEtBQVU7UUFBZixpQkFxQkM7UUFuQkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFFdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDO2FBQy9CLFNBQVMsQ0FDTixVQUFDLElBQVM7WUFDUixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxDQUFBLENBQUM7Z0JBQzNCLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztnQkFDeEMsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFFekIsQ0FBQztZQUFBLElBQUksQ0FBQyxDQUFDO2dCQUVMLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDdEMsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDekIsQ0FBQztRQUNILENBQUMsRUFDRCxVQUFDLEtBQVM7WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FDSixDQUFDO0lBQ1YsQ0FBQztJQS9DSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixXQUFXLEVBQUUsK0JBQStCO1lBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO1NBQzVDLENBQUM7OytCQUFBO0lBNENGLDhCQUFDO0FBQUQsQ0EzQ0EsQUEyQ0MsSUFBQTtBQTNDWSwrQkFBdUIsMEJBMkNuQyxDQUFBIiwiZmlsZSI6ImFwcC9hdXRoL2ZvcmdvdHBhc3N3b3JkLXN0dWRlbnQvZm9yZ290cGFzc3dvcmRzdHVkZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXIsIE5hdmlnYXRpb25TdGFydH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgVmFsaWRhdG9yLCBWYWxpZGF0b3JzfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZmlsdGVyJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7VmFsaWRhdGlvblNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy92YWxpZGF0aW9uLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLWZvcmdvdHBhc3N3b3JkJyxcbiAgdGVtcGxhdGVVcmw6ICdmb3Jnb3RwYXNzd29yZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydmb3Jnb3RwYXNzd29yZC5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEZvcmdvdFBhc3N3b3JkQ29tcG9uZW50IHtcblxuICBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgdXNlckZvcm06IGFueTtcbiAgaXNTZW5kaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgdGhpcy5jcmVhdGVGb3JtKCk7XG4gIH1cblxuICBjcmVhdGVGb3JtKCl7XG4gICAgdGhpcy51c2VyRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgJ2VtYWlsJzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dXG4gICAgfSk7XG4gIH1cblxuICByZXNldCgpe1xuICAgIHRoaXMuY3JlYXRlRm9ybSgpO1xuICB9XG5cbiAgc2VuZChlbWFpbDogYW55KSB7XG5cbiAgICB0aGlzLmlzU2VuZGluZyA9IHRydWU7XG5cbiAgICB0aGlzLmF1dGhTZXJ2aWNlLmZvcmdvdFBhc3N3b3JkKGVtYWlsKVxuICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgIChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZihkYXRhLnN0YXR1cyA9PSAnc3VjY2Vzcycpe1xuICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycuL2F1dGgvc2lnbmluJ10pO1xuICAgICAgICAgICAgICAgICAgdGhpcy5pc1NlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gZGF0YS5lcnJvcm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICB0aGlzLmlzU2VuZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgKGVycm9yOmFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gIH1cblxufVxuIl19
