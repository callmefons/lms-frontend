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
        this.password = '';
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
            'password': [this.password, [forms_1.Validators.required, validation_service_1.ValidationService.passwordValidator]]
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
                _this.password = '';
                _this.createForm();
                _this.errorMessage = 'Access token is invalid.';
            }
            else {
                _this.password = '';
                _this.createForm();
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRoL3Jlc2V0cGFzc3dvcmQvcmVzZXRwYXNzd29yZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCx1QkFBNkMsaUJBQWlCLENBQUMsQ0FBQTtBQUMvRCxzQkFBaUQsZ0JBQWdCLENBQUMsQ0FBQTtBQUNsRSxRQUFPLDBCQUEwQixDQUFDLENBQUE7QUFDbEMsNkJBQTBCLGlCQUFpQixDQUFDLENBQUE7QUFDNUMsbUNBQWdDLG1DQUFtQyxDQUFDLENBQUE7QUFRcEU7SUFTRSxnQ0FBb0IsV0FBd0IsRUFDeEIsV0FBd0IsRUFDeEIsTUFBYyxFQUNkLGNBQThCO1FBSDlCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFMbEQsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQU1wQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELHlDQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQWM7WUFDdkQsS0FBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDN0IsS0FBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFHL0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsMkNBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFFckMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLGtCQUFVLENBQUMsUUFBUSxFQUFFLHNDQUFpQixDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDeEYsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHFDQUFJLEdBQUosVUFBSyxLQUFVO1FBQWYsaUJBcUNDO1FBakNDLElBQU0sUUFBUSxHQUFHLElBQUksTUFBTSxDQUFDO1lBQzFCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7WUFDeEIscUJBQXFCLEVBQUUsS0FBSyxDQUFDLFFBQVE7WUFDckMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1NBQ2xCLENBQUMsQ0FBQztRQUlILElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQzthQUNyQyxTQUFTLENBQ1IsVUFBQyxJQUFTO1lBTVIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsQ0FBQSxDQUFDO2dCQUN6QixLQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztnQkFDbkIsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNsQixLQUFJLENBQUMsWUFBWSxHQUFHLDBCQUEwQixDQUFDO1lBQ2pELENBQUM7WUFBQSxJQUFJLENBQUMsQ0FBQztnQkFDTCxLQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztnQkFDbkIsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNsQixLQUFJLENBQUMsY0FBYyxHQUFHLDRDQUE0QyxDQUFDO1lBRXJFLENBQUM7UUFFSCxDQUFDLEVBQ0QsVUFBQyxLQUFTO1lBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQ0YsQ0FBQztJQUNOLENBQUM7SUFFRCx1Q0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUEvRUg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsV0FBVyxFQUFFLDhCQUE4QjtZQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztTQUMzQyxDQUFDOzs4QkFBQTtJQTRFRiw2QkFBQztBQUFELENBM0VBLEFBMkVDLElBQUE7QUEzRVksOEJBQXNCLHlCQTJFbEMsQ0FBQSIsImZpbGUiOiJhcHAvYXV0aC9yZXNldHBhc3N3b3JkL3Jlc2V0cGFzc3dvcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlciwgQWN0aXZhdGVkUm91dGUsIFBhcmFtc30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgVmFsaWRhdG9yLCBWYWxpZGF0b3JzfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZmlsdGVyJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7VmFsaWRhdGlvblNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy92YWxpZGF0aW9uLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLXJlc2V0cGFzc3dvcmQnLFxuICB0ZW1wbGF0ZVVybDogJ3Jlc2V0cGFzc3dvcmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsncmVzZXRwYXNzd29yZC5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cbiAgc3VjY2Vzc01lc3NhZ2U6c3RyaW5nO1xuICBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgdXNlckZvcm06IGFueTtcbiAgdG9rZW46IGFueTtcbiAgZW1haWw6IGFueTtcbiAgcGFzc3dvcmQ6IHN0cmluZyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUpe1xuICAgIHRoaXMuY3JlYXRlRm9ybSgpO1xuICB9XG5cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZSgocGFyYW1zOiBQYXJhbXMpID0+IHtcbiAgICAgIHRoaXMudG9rZW4gPSBwYXJhbXNbJ3Rva2VuJ107XG4gICAgICB0aGlzLmVtYWlsID0gcGFyYW1zWydlbWFpbCddO1xuICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnRva2VuKTtcbiAgICAgIC8vY29uc29sZS5sb2codGhpcy5lbWFpbCk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVGb3JtKCl7XG4gICAgdGhpcy51c2VyRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgLy8gJ2VtYWlsJzogW3RoaXMuZW1haWwsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0aW9uU2VydmljZS5lbWFpbFZhbGlkYXRvcl1dLFxuICAgICAgJ3Bhc3N3b3JkJzogW3RoaXMucGFzc3dvcmQsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0aW9uU2VydmljZS5wYXNzd29yZFZhbGlkYXRvcl1dXG4gICAgfSk7XG4gIH1cblxuICBzZW5kKHZhbHVlOiBhbnkpIHtcblxuICAgIC8vY29uc29sZS5sb2codmFsdWUpO1xuXG4gICAgY29uc3QgbmV3VmFsdWUgPSBuZXcgT2JqZWN0KHtcbiAgICAgIGVtYWlsOiB0aGlzLmVtYWlsLFxuICAgICAgcGFzc3dvcmQ6IHZhbHVlLnBhc3N3b3JkLFxuICAgICAgcGFzc3dvcmRfY29uZmlybWF0aW9uOiB2YWx1ZS5wYXNzd29yZCxcbiAgICAgIHRva2VuOiB0aGlzLnRva2VuXG4gICAgfSk7XG5cbiAgICAvL2NvbnNvbGUubG9nKG5ld1ZhbHVlKTtcblxuICAgIHRoaXMuYXV0aFNlcnZpY2UucmVzZXRQYXNzd29yZChuZXdWYWx1ZSlcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAvL3RoaXMuY3JlYXRlRm9ybSgpO1xuICAgICAgICAgIC8vdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc2lnbmluJ10pO1xuICAgICAgICAgIC8vIHRoaXMuZXJyb3JNZXNzYWdlID0gZGF0YS5lcnJvcm1lc3NhZ2U7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcblxuICAgICAgICAgIGlmKGRhdGEuc3RhdHVzID09ICdlcnJvcicpe1xuICAgICAgICAgICAgdGhpcy5wYXNzd29yZCA9ICcnO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVGb3JtKCk7XG4gICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICdBY2Nlc3MgdG9rZW4gaXMgaW52YWxpZC4nO1xuICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGFzc3dvcmQgPSAnJztcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRm9ybSgpO1xuICAgICAgICAgICAgdGhpcy5zdWNjZXNzTWVzc2FnZSA9ICdZb3VyIHBhc3N3b3JkIGhhcyBiZWVuIHJlc2V0IHN1Y2Nlc3NmdWxseS4nO1xuICAgICAgICAgICAgLy90aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hdXRoL3NpZ25pbiddKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yOmFueSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgfVxuXG4gIGdvQmFjaygpe1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2F1dGgvc2lnbmluJ10pO1xuICB9XG5cbn1cbiJdfQ==
