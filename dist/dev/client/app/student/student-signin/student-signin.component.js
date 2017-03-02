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
var auth_service_1 = require("../../auth/auth.service");
var student_1 = require("../../models/student");
var student_service_1 = require("../../services/student.service");
var studentSignin = (function () {
    function studentSignin(email, password) {
        this.email = email;
        this.password = password;
    }
    return studentSignin;
}());
exports.studentSignin = studentSignin;
var StudentSigninComponent = (function () {
    function StudentSigninComponent(studentService, authService, formBuilder, router) {
        this.studentService = studentService;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.student = new student_1.Student();
        this.setMessage();
        this.createForm();
    }
    StudentSigninComponent.prototype.setMessage = function () {
    };
    StudentSigninComponent.prototype.createForm = function () {
        this.userForm = this.formBuilder.group({
            'username': ['', [forms_1.Validators.required]],
            'password': ['', [forms_1.Validators.required]]
        });
    };
    StudentSigninComponent.prototype.reset = function () {
        this.createForm();
    };
    StudentSigninComponent.prototype.signin = function (student) {
        var _this = this;
        this.message = 'Trying to log in ...';
        this.student = new studentSignin(student.username, student.password);
        this.authService.studentSignin(this.student)
            .subscribe(function (data) {
            console.log(data);
            if (data.status == 'success' && data.data.role == 'student') {
                _this.authService.setToken(data.data.token, 'student', data.data.id, data.data.activated);
                _this.router.navigate(['./student/dashboard']);
            }
            else if (data.data.role != 'student') {
                _this.errorMessage = 'username or password not match!';
            }
            else {
                _this.errorMessage = data.errormessage;
            }
        }, function (error) { console.log(error); });
    };
    StudentSigninComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'student-signin',
            templateUrl: 'student-signin.component.html',
            styleUrls: ['student-signin.component.css'],
        }), 
        __metadata('design:paramtypes', [student_service_1.StudentService, auth_service_1.AuthService, forms_1.FormBuilder, router_1.Router])
    ], StudentSigninComponent);
    return StudentSigninComponent;
}());
exports.StudentSigninComponent = StudentSigninComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zdHVkZW50L3N0dWRlbnQtc2lnbmluL3N0dWRlbnQtc2lnbmluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHVCQUF1QyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3pELHNCQUFpRCxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ2xFLDZCQUEwQix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3BELHdCQUFzQixzQkFBc0IsQ0FBQyxDQUFBO0FBQzdDLGdDQUE2QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBRTlEO0lBQ0UsdUJBQW1CLEtBQVcsRUFBUyxRQUFjO1FBQWxDLFVBQUssR0FBTCxLQUFLLENBQU07UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFNO0lBQUUsQ0FBQztJQUMxRCxvQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlkscUJBQWEsZ0JBRXpCLENBQUE7QUFRRDtJQU9JLGdDQUFvQixjQUE4QixFQUM5QixXQUF3QixFQUN4QixXQUF3QixFQUN4QixNQUFjO1FBSGQsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFMbEMsWUFBTyxHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFDO1FBTXBCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELDJDQUFVLEdBQVY7SUFFQSxDQUFDO0lBRUQsMkNBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDbkMsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsa0JBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN2QyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxzQ0FBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCx1Q0FBTSxHQUFOLFVBQU8sT0FBZ0I7UUFBdkIsaUJBdUJDO1FBdEJHLElBQUksQ0FBQyxPQUFPLEdBQUcsc0JBQXNCLENBQUM7UUFDdEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGFBQWEsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUd2RSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ3pDLFNBQVMsQ0FDUixVQUFDLElBQVM7WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNELEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN6RixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztZQUNoRCxDQUFDO1lBQUEsSUFBSSxDQUFFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLFNBQVMsQ0FBQyxDQUFBLENBQUM7Z0JBQ3JDLEtBQUksQ0FBQyxZQUFZLEdBQUcsaUNBQWlDLENBQUM7WUFDeEQsQ0FBQztZQUNELElBQUksQ0FBQyxDQUFDO2dCQUNKLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUN4QyxDQUFDO1FBQ0gsQ0FBQyxFQUNELFVBQUMsS0FBSyxJQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ25DLENBQUM7SUFHTixDQUFDO0lBM0RMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRSwrQkFBK0I7WUFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7U0FDOUMsQ0FBQzs7OEJBQUE7SUF3REYsNkJBQUM7QUFBRCxDQXZEQSxBQXVEQyxJQUFBO0FBdkRZLDhCQUFzQix5QkF1RGxDLENBQUEiLCJmaWxlIjoiYXBwL3N0dWRlbnQvc3R1ZGVudC1zaWduaW4vc3R1ZGVudC1zaWduaW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlciwgTmF2aWdhdGlvbkV4dHJhc30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgVmFsaWRhdG9yLCBWYWxpZGF0b3JzfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi8uLi9hdXRoL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHtTdHVkZW50fSBmcm9tIFwiLi4vLi4vbW9kZWxzL3N0dWRlbnRcIjtcbmltcG9ydCB7U3R1ZGVudFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zdHVkZW50LnNlcnZpY2VcIjtcblxuZXhwb3J0IGNsYXNzIHN0dWRlbnRTaWduaW57XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbWFpbD8gOmFueSwgcHVibGljIHBhc3N3b3JkPzogYW55KXt9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdzdHVkZW50LXNpZ25pbicsXG4gICAgdGVtcGxhdGVVcmw6ICdzdHVkZW50LXNpZ25pbi5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3N0dWRlbnQtc2lnbmluLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU3R1ZGVudFNpZ25pbkNvbXBvbmVudCB7XG5cbiAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG4gICAgdXNlckZvcm06IGFueTtcbiAgICBzdHVkZW50ID0gbmV3IFN0dWRlbnQoKTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3R1ZGVudFNlcnZpY2U6IFN0dWRlbnRTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5zZXRNZXNzYWdlKCk7XG4gICAgICAgIHRoaXMuY3JlYXRlRm9ybSgpO1xuICAgIH1cblxuICAgIHNldE1lc3NhZ2UoKSB7XG4gICAgICAgIC8vdGhpcy5tZXNzYWdlID0gJ0xvZ2dlZCAnICsgKHRoaXMuYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpID8gJ2luJyA6ICdvdXQnKTtcbiAgICB9XG5cbiAgICBjcmVhdGVGb3JtKCl7XG4gICAgICAgIHRoaXMudXNlckZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICAgICAgICd1c2VybmFtZSc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgICAgICAgICdwYXNzd29yZCc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXNldCgpe1xuICAgICAgICB0aGlzLmNyZWF0ZUZvcm0oKTtcbiAgICB9XG5cbiAgICBzaWduaW4oc3R1ZGVudDogU3R1ZGVudCkge1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSAnVHJ5aW5nIHRvIGxvZyBpbiAuLi4nO1xuICAgICAgICB0aGlzLnN0dWRlbnQgPSBuZXcgc3R1ZGVudFNpZ25pbihzdHVkZW50LnVzZXJuYW1lLCBzdHVkZW50LnBhc3N3b3JkKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnN0dWRlbnQpO1xuXG4gICAgICB0aGlzLmF1dGhTZXJ2aWNlLnN0dWRlbnRTaWduaW4odGhpcy5zdHVkZW50KVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgIChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgaWYoZGF0YS5zdGF0dXMgPT0gJ3N1Y2Nlc3MnICYmIGRhdGEuZGF0YS5yb2xlID09ICdzdHVkZW50Jykge1xuICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLnNldFRva2VuKGRhdGEuZGF0YS50b2tlbiwgJ3N0dWRlbnQnLCBkYXRhLmRhdGEuaWQsIGRhdGEuZGF0YS5hY3RpdmF0ZWQpO1xuICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4vc3R1ZGVudC9kYXNoYm9hcmQnXSk7XG4gICAgICAgICAgICB9ZWxzZSAgaWYoZGF0YS5kYXRhLnJvbGUgIT0gJ3N0dWRlbnQnKXtcbiAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAndXNlcm5hbWUgb3IgcGFzc3dvcmQgbm90IG1hdGNoISc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBkYXRhLmVycm9ybWVzc2FnZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIChlcnJvcikgPT4geyBjb25zb2xlLmxvZyhlcnJvcik7IH1cbiAgICAgICAgKTtcblxuXG4gICAgfVxuXG59XG4iXX0=
