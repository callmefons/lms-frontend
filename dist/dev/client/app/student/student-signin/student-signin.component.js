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
var validation_service_1 = require("../../services/validation.service");
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
        this.sending = false;
        this.sendingMessage = '';
        this.setMessage();
        this.createForm();
        this.createActivateForm();
    }
    StudentSigninComponent.prototype.setMessage = function () {
    };
    StudentSigninComponent.prototype.createForm = function () {
        this.userForm = this.formBuilder.group({
            'username': ['', [forms_1.Validators.required]],
            'password': ['', [forms_1.Validators.required]]
        });
    };
    StudentSigninComponent.prototype.createActivateForm = function () {
        this.activateForm = this.formBuilder.group({
            'username': ['', [forms_1.Validators.required]],
            'email': ['', [forms_1.Validators.required, validation_service_1.ValidationService.emailValidator]],
        });
    };
    StudentSigninComponent.prototype.activate = function (obj) {
        var _this = this;
        this.sending = true;
        this.authService.sendActivationMail(obj)
            .subscribe(function (data) {
            _this.sending = false;
            _this.sendingMessage = 'Success! Email is sent';
            _this.createActivateForm();
        }, function (err) {
            _this.sending = false;
            _this.sendingMessage = 'Failed! Cannot send email, this username is already activated';
        });
    };
    StudentSigninComponent.prototype.closeModal = function () {
        $('#myModal').modal('hide');
        this.sendingMessage = '';
    };
    StudentSigninComponent.prototype.reset = function () {
        this.createForm();
    };
    StudentSigninComponent.prototype.signin = function (student) {
        var _this = this;
        this.message = 'Trying to log in ...';
        this.student = new studentSignin(student.username, student.password);
        this.authService.signin(this.student)
            .subscribe(function (data) {
            console.log(data);
            _this.errorMessage = data.errormessage;
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
        }, function (error) {
            _this.errorMessage = 'Please activated your account first!';
        });
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zdHVkZW50L3N0dWRlbnQtc2lnbmluL3N0dWRlbnQtc2lnbmluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHVCQUF1QyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3pELHNCQUFpRCxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ2xFLDZCQUEwQix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3BELHdCQUFzQixzQkFBc0IsQ0FBQyxDQUFBO0FBQzdDLGdDQUE2QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQzlELG1DQUFnQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBR3BFO0lBQ0UsdUJBQW1CLEtBQVcsRUFBUyxRQUFjO1FBQWxDLFVBQUssR0FBTCxLQUFLLENBQU07UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFNO0lBQUUsQ0FBQztJQUMxRCxvQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlkscUJBQWEsZ0JBRXpCLENBQUE7QUFRRDtJQVFJLGdDQUFvQixjQUE4QixFQUM5QixXQUF3QixFQUN4QixXQUF3QixFQUN4QixNQUFjO1FBSGQsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFMbEMsWUFBTyxHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFDO1FBNkJ4QixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLG1CQUFjLEdBQVcsRUFBRSxDQUFDO1FBeEJ4QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCwyQ0FBVSxHQUFWO0lBRUEsQ0FBQztJQUVELDJDQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFH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WUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDeEMsQ0FBQztRQUNILENBQUMsRUFDRCxVQUFDLEtBQUs7WUFDSixLQUFJLENBQUMsWUFBWSxHQUFHLHNDQUFzQyxDQUFDO1FBQzdELENBQUMsQ0FDRixDQUFDO0lBR04sQ0FBQztJQTlGTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUsK0JBQStCO1lBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO1NBQzlDLENBQUM7OzhCQUFBO0lBMkZGLDZCQUFDO0FBQUQsQ0ExRkEsQUEwRkMsSUFBQTtBQTFGWSw4QkFBc0IseUJBMEZsQyxDQUFBIiwiZmlsZSI6ImFwcC9zdHVkZW50L3N0dWRlbnQtc2lnbmluL3N0dWRlbnQtc2lnbmluLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXIsIE5hdmlnYXRpb25FeHRyYXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIFZhbGlkYXRvciwgVmFsaWRhdG9yc30gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vYXV0aC9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7U3R1ZGVudH0gZnJvbSBcIi4uLy4uL21vZGVscy9zdHVkZW50XCI7XG5pbXBvcnQge1N0dWRlbnRTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc3R1ZGVudC5zZXJ2aWNlXCI7XG5pbXBvcnQge1ZhbGlkYXRpb25TZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdmFsaWRhdGlvbi5zZXJ2aWNlXCI7XG5kZWNsYXJlIHZhciAkOmFueTtcblxuZXhwb3J0IGNsYXNzIHN0dWRlbnRTaWduaW57XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbWFpbD8gOmFueSwgcHVibGljIHBhc3N3b3JkPzogYW55KXt9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdzdHVkZW50LXNpZ25pbicsXG4gICAgdGVtcGxhdGVVcmw6ICdzdHVkZW50LXNpZ25pbi5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3N0dWRlbnQtc2lnbmluLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU3R1ZGVudFNpZ25pbkNvbXBvbmVudCB7XG5cbiAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG4gICAgdXNlckZvcm06IGFueTtcbiAgICBhY3RpdmF0ZUZvcm06IGFueTtcbiAgICBzdHVkZW50ID0gbmV3IFN0dWRlbnQoKTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3R1ZGVudFNlcnZpY2U6IFN0dWRlbnRTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5zZXRNZXNzYWdlKCk7XG4gICAgICAgIHRoaXMuY3JlYXRlRm9ybSgpO1xuICAgICAgICB0aGlzLmNyZWF0ZUFjdGl2YXRlRm9ybSgpO1xuICAgIH1cblxuICAgIHNldE1lc3NhZ2UoKSB7XG4gICAgICAgIC8vdGhpcy5tZXNzYWdlID0gJ0xvZ2dlZCAnICsgKHRoaXMuYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpID8gJ2luJyA6ICdvdXQnKTtcbiAgICB9XG5cbiAgICBjcmVhdGVGb3JtKCl7XG4gICAgICAgIHRoaXMudXNlckZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICAgICAgICd1c2VybmFtZSc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgICAgICAgICdwYXNzd29yZCc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjcmVhdGVBY3RpdmF0ZUZvcm0oKXtcbiAgICAgIHRoaXMuYWN0aXZhdGVGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgICd1c2VybmFtZSc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgICAgJ2VtYWlsJzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdGlvblNlcnZpY2UuZW1haWxWYWxpZGF0b3JdXSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHNlbmRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBzZW5kaW5nTWVzc2FnZTogc3RyaW5nID0gJyc7XG4gICAgYWN0aXZhdGUob2JqOiBhbnkpe1xuICAgICAgLy8gY29uc29sZS5sb2cob2JqKTtcbiAgICAgIHRoaXMuc2VuZGluZyA9IHRydWU7XG4gICAgICB0aGlzLmF1dGhTZXJ2aWNlLnNlbmRBY3RpdmF0aW9uTWFpbChvYmopXG4gICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNlbmRpbmdNZXNzYWdlID0gJ1N1Y2Nlc3MhIEVtYWlsIGlzIHNlbnQnO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVBY3RpdmF0ZUZvcm0oKTtcbiAgICAgICAgICB9LChlcnIpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VuZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zZW5kaW5nTWVzc2FnZSA9ICdGYWlsZWQhIENhbm5vdCBzZW5kIGVtYWlsLCB0aGlzIHVzZXJuYW1lIGlzIGFscmVhZHkgYWN0aXZhdGVkJztcblxuICAgICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICBjbG9zZU1vZGFsKCl7XG4gICAgICAkKCcjbXlNb2RhbCcpLm1vZGFsKCdoaWRlJyk7XG4gICAgICB0aGlzLnNlbmRpbmdNZXNzYWdlID0gJyc7XG4gICAgfVxuXG4gICAgcmVzZXQoKXtcbiAgICAgICAgdGhpcy5jcmVhdGVGb3JtKCk7XG4gICAgfVxuXG4gICAgc2lnbmluKHN0dWRlbnQ6IFN0dWRlbnQpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gJ1RyeWluZyB0byBsb2cgaW4gLi4uJztcbiAgICAgICAgdGhpcy5zdHVkZW50ID0gbmV3IHN0dWRlbnRTaWduaW4oc3R1ZGVudC51c2VybmFtZSwgc3R1ZGVudC5wYXNzd29yZCk7XG5cbiAgICAgIHRoaXMuYXV0aFNlcnZpY2Uuc2lnbmluKHRoaXMuc3R1ZGVudClcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gZGF0YS5lcnJvcm1lc3NhZ2U7XG4gICAgICAgICAgICBpZihkYXRhLnN0YXR1cyA9PSAnc3VjY2VzcycgJiYgZGF0YS5kYXRhLnJvbGUgPT0gJ3N0dWRlbnQnKSB7XG4gICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uuc2V0VG9rZW4oZGF0YS5kYXRhLnRva2VuLCAnc3R1ZGVudCcsIGRhdGEuZGF0YS5pZCwgZGF0YS5kYXRhLmFjdGl2YXRlZCk7XG4gICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLi9zdHVkZW50L2Rhc2hib2FyZCddKTtcbiAgICAgICAgICAgIH1lbHNlIGlmKGRhdGEuZGF0YS5yb2xlICE9ICdzdHVkZW50Jyl7XG4gICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJ3VzZXJuYW1lIG9yIHBhc3N3b3JkIG5vdCBtYXRjaCEnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gZGF0YS5lcnJvcm1lc3NhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJ1BsZWFzZSBhY3RpdmF0ZWQgeW91ciBhY2NvdW50IGZpcnN0ISc7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuXG5cbiAgICB9XG5cbn1cbiJdfQ==
