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
var validation_service_1 = require("../../services/validation.service");
var ResetPasswordComponent = (function () {
    function ResetPasswordComponent(authService, formBuilder, router, activatedRoute) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.createForm();
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.token = params['token'];
            _this.email = params['email'];
        });
    };
    ResetPasswordComponent.prototype.createForm = function () {
        this.userForm = this.formBuilder.group({
            'password': ['', [forms_1.Validators.required, validation_service_1.ValidationService.passwordValidator]]
        });
    };
    ResetPasswordComponent.prototype.send = function (value) {
        var _this = this;
        var newValue = new Object({
            email: this.email,
            password: value.password,
            password_confirmation: value.password,
            token: this.token
        });
        this.authService.resetPassword(newValue)
            .subscribe(function (data) {
            if (data.status == 'error') {
                _this.errorMessage = 'Access token is invalid.';
            }
            else {
                _this.userForm.password = '';
                _this.successMessage = 'Your password has been reset successfully.';
            }
        }, function (error) {
            console.log(error);
        });
    };
    ResetPasswordComponent.prototype.goBack = function () {
        this.router.navigate(['/auth/signin']);
    };
    ResetPasswordComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-resetpassword',
            templateUrl: 'resetpassword.component.html',
            styleUrls: ['resetpassword.component.css'],
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, forms_1.FormBuilder, router_1.Router, router_1.ActivatedRoute])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());
exports.ResetPasswordComponent = ResetPasswordComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRoL3Jlc2V0cGFzc3dvcmQvcmVzZXRwYXNzd29yZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCx1QkFBNkMsaUJBQWlCLENBQUMsQ0FBQTtBQUMvRCxzQkFBaUQsZ0JBQWdCLENBQUMsQ0FBQTtBQUNsRSxRQUFPLDBCQUEwQixDQUFDLENBQUE7QUFDbEMsNkJBQTBCLGlCQUFpQixDQUFDLENBQUE7QUFDNUMsbUNBQWdDLG1DQUFtQyxDQUFDLENBQUE7QUFRcEU7SUFRRSxnQ0FBb0IsV0FBd0IsRUFDeEIsV0FBd0IsRUFDeEIsTUFBYyxFQUNkLGNBQThCO1FBSDlCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDaEQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCx5Q0FBUSxHQUFSO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFjO1lBQ3ZELEtBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzdCLEtBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRy9CLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDJDQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBRXJDLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLGtCQUFVLENBQUMsUUFBUSxFQUFFLHNDQUFpQixDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDN0UsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHFDQUFJLEdBQUosVUFBSyxLQUFVO1FBQWYsaUJBa0NDO1FBOUJDLElBQU0sUUFBUSxHQUFHLElBQUksTUFBTSxDQUFDO1lBQzFCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7WUFDeEIscUJBQXFCLEVBQUUsS0FBSyxDQUFDLFFBQVE7WUFDckMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1NBQ2xCLENBQUMsQ0FBQztRQUlILElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQzthQUNyQyxTQUFTLENBQ1IsVUFBQyxJQUFTO1lBTVIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsQ0FBQSxDQUFDO2dCQUN6QixLQUFJLENBQUMsWUFBWSxHQUFHLDBCQUEwQixDQUFDO1lBQ2pELENBQUM7WUFBQSxJQUFJLENBQUMsQ0FBQztnQkFDTCxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxjQUFjLEdBQUcsNENBQTRDLENBQUM7WUFFckUsQ0FBQztRQUVILENBQUMsRUFDRCxVQUFDLEtBQVM7WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FDRixDQUFDO0lBQ04sQ0FBQztJQUVELHVDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQTNFSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixXQUFXLEVBQUUsOEJBQThCO1lBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO1NBQzNDLENBQUM7OzhCQUFBO0lBd0VGLDZCQUFDO0FBQUQsQ0F2RUEsQUF1RUMsSUFBQTtBQXZFWSw4QkFBc0IseUJBdUVsQyxDQUFBIiwiZmlsZSI6ImFwcC9hdXRoL3Jlc2V0cGFzc3dvcmQvcmVzZXRwYXNzd29yZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Um91dGVyLCBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBWYWxpZGF0b3IsIFZhbGlkYXRvcnN9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9maWx0ZXInO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHtWYWxpZGF0aW9uU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3ZhbGlkYXRpb24uc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtcmVzZXRwYXNzd29yZCcsXG4gIHRlbXBsYXRlVXJsOiAncmVzZXRwYXNzd29yZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydyZXNldHBhc3N3b3JkLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUmVzZXRQYXNzd29yZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblxuICBzdWNjZXNzTWVzc2FnZTpzdHJpbmc7XG4gIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuICB1c2VyRm9ybTogYW55O1xuICB0b2tlbjogYW55O1xuICBlbWFpbDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUpe1xuICAgIHRoaXMuY3JlYXRlRm9ybSgpO1xuICB9XG5cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZSgocGFyYW1zOiBQYXJhbXMpID0+IHtcbiAgICAgIHRoaXMudG9rZW4gPSBwYXJhbXNbJ3Rva2VuJ107XG4gICAgICB0aGlzLmVtYWlsID0gcGFyYW1zWydlbWFpbCddO1xuICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnRva2VuKTtcbiAgICAgIC8vY29uc29sZS5sb2codGhpcy5lbWFpbCk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVGb3JtKCl7XG4gICAgdGhpcy51c2VyRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgLy8gJ2VtYWlsJzogW3RoaXMuZW1haWwsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0aW9uU2VydmljZS5lbWFpbFZhbGlkYXRvcl1dLFxuICAgICAgJ3Bhc3N3b3JkJzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdGlvblNlcnZpY2UucGFzc3dvcmRWYWxpZGF0b3JdXVxuICAgIH0pO1xuICB9XG5cbiAgc2VuZCh2YWx1ZTogYW55KSB7XG5cbiAgICAvL2NvbnNvbGUubG9nKHZhbHVlKTtcblxuICAgIGNvbnN0IG5ld1ZhbHVlID0gbmV3IE9iamVjdCh7XG4gICAgICBlbWFpbDogdGhpcy5lbWFpbCxcbiAgICAgIHBhc3N3b3JkOiB2YWx1ZS5wYXNzd29yZCxcbiAgICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbjogdmFsdWUucGFzc3dvcmQsXG4gICAgICB0b2tlbjogdGhpcy50b2tlblxuICAgIH0pO1xuXG4gICAgLy9jb25zb2xlLmxvZyhuZXdWYWx1ZSk7XG5cbiAgICB0aGlzLmF1dGhTZXJ2aWNlLnJlc2V0UGFzc3dvcmQobmV3VmFsdWUpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgLy90aGlzLmNyZWF0ZUZvcm0oKTtcbiAgICAgICAgICAvL3RoaXMucm91dGVyLm5hdmlnYXRlKFsnL3NpZ25pbiddKTtcbiAgICAgICAgICAvLyB0aGlzLmVycm9yTWVzc2FnZSA9IGRhdGEuZXJyb3JtZXNzYWdlO1xuICAgICAgICAgIC8vY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAgICAgICBpZihkYXRhLnN0YXR1cyA9PSAnZXJyb3InKXtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJ0FjY2VzcyB0b2tlbiBpcyBpbnZhbGlkLic7XG4gICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgdGhpcy51c2VyRm9ybS5wYXNzd29yZCA9ICcnO1xuICAgICAgICAgICAgdGhpcy5zdWNjZXNzTWVzc2FnZSA9ICdZb3VyIHBhc3N3b3JkIGhhcyBiZWVuIHJlc2V0IHN1Y2Nlc3NmdWxseS4nO1xuICAgICAgICAgICAgLy90aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hdXRoL3NpZ25pbiddKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yOmFueSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgfVxuXG4gIGdvQmFjaygpe1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2F1dGgvc2lnbmluJ10pO1xuICB9XG5cbn1cbiJdfQ==
