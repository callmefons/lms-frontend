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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zdHVkZW50L3N0dWRlbnQtc2lnbmluL3N0dWRlbnQtc2lnbmluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHVCQUF1QyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3pELHNCQUFpRCxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ2xFLDZCQUEwQix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3BELHdCQUFzQixzQkFBc0IsQ0FBQyxDQUFBO0FBQzdDLGdDQUE2QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQzlELG1DQUFnQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBR3BFO0lBQ0UsdUJBQW1CLEtBQVcsRUFBUyxRQUFjO1FBQWxDLFVBQUssR0FBTCxLQUFLLENBQU07UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFNO0lBQUUsQ0FBQztJQUMxRCxvQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlkscUJBQWEsZ0JBRXpCLENBQUE7QUFRRDtJQVFJLGdDQUFvQixjQUE4QixFQUM5QixXQUF3QixFQUN4QixXQUF3QixFQUN4QixNQUFjO1FBSGQsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFMbEMsWUFBTyxHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFDO1FBNkJ4QixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLG1CQUFjLEdBQVcsRUFBRSxDQUFDO1FBeEJ4QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCwyQ0FBVSxHQUFWO0lBRUEsQ0FBQztJQUVELDJDQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFH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UUFDSCxDQUFDLEVBQ0QsVUFBQyxLQUFLO1lBQ0osS0FBSSxDQUFDLFlBQVksR0FBRyxzQ0FBc0MsQ0FBQztRQUM3RCxDQUFDLENBQ0YsQ0FBQztJQUdOLENBQUM7SUE5Rkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLCtCQUErQjtZQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztTQUM5QyxDQUFDOzs4QkFBQTtJQTJGRiw2QkFBQztBQUFELENBMUZBLEFBMEZDLElBQUE7QUExRlksOEJBQXNCLHlCQTBGbEMsQ0FBQSIsImZpbGUiOiJhcHAvc3R1ZGVudC9zdHVkZW50LXNpZ25pbi9zdHVkZW50LXNpZ25pbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Um91dGVyLCBOYXZpZ2F0aW9uRXh0cmFzfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBWYWxpZGF0b3IsIFZhbGlkYXRvcnN9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uLy4uL2F1dGgvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQge1N0dWRlbnR9IGZyb20gXCIuLi8uLi9tb2RlbHMvc3R1ZGVudFwiO1xuaW1wb3J0IHtTdHVkZW50U2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3N0dWRlbnQuc2VydmljZVwiO1xuaW1wb3J0IHtWYWxpZGF0aW9uU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3ZhbGlkYXRpb24uc2VydmljZVwiO1xuZGVjbGFyZSB2YXIgJDphbnk7XG5cbmV4cG9ydCBjbGFzcyBzdHVkZW50U2lnbmlue1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZW1haWw/IDphbnksIHB1YmxpYyBwYXNzd29yZD86IGFueSl7fVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnc3R1ZGVudC1zaWduaW4nLFxuICAgIHRlbXBsYXRlVXJsOiAnc3R1ZGVudC1zaWduaW4uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydzdHVkZW50LXNpZ25pbi5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFN0dWRlbnRTaWduaW5Db21wb25lbnQge1xuXG4gICAgbWVzc2FnZTogc3RyaW5nO1xuICAgIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuICAgIHVzZXJGb3JtOiBhbnk7XG4gICAgYWN0aXZhdGVGb3JtOiBhbnk7XG4gICAgc3R1ZGVudCA9IG5ldyBTdHVkZW50KCk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0dWRlbnRTZXJ2aWNlOiBTdHVkZW50U2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgICAgIHRoaXMuc2V0TWVzc2FnZSgpO1xuICAgICAgICB0aGlzLmNyZWF0ZUZvcm0oKTtcbiAgICAgICAgdGhpcy5jcmVhdGVBY3RpdmF0ZUZvcm0oKTtcbiAgICB9XG5cbiAgICBzZXRNZXNzYWdlKCkge1xuICAgICAgICAvL3RoaXMubWVzc2FnZSA9ICdMb2dnZWQgJyArICh0aGlzLmF1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKSA/ICdpbicgOiAnb3V0Jyk7XG4gICAgfVxuXG4gICAgY3JlYXRlRm9ybSgpe1xuICAgICAgICB0aGlzLnVzZXJGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgICAgICAndXNlcm5hbWUnOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICAgICAgICAncGFzc3dvcmQnOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY3JlYXRlQWN0aXZhdGVGb3JtKCl7XG4gICAgICB0aGlzLmFjdGl2YXRlRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICAndXNlcm5hbWUnOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICAgICdlbWFpbCc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRpb25TZXJ2aWNlLmVtYWlsVmFsaWRhdG9yXV0sXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzZW5kaW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgc2VuZGluZ01lc3NhZ2U6IHN0cmluZyA9ICcnO1xuICAgIGFjdGl2YXRlKG9iajogYW55KXtcbiAgICAgIC8vIGNvbnNvbGUubG9nKG9iaik7XG4gICAgICB0aGlzLnNlbmRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5hdXRoU2VydmljZS5zZW5kQWN0aXZhdGlvbk1haWwob2JqKVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgIChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VuZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zZW5kaW5nTWVzc2FnZSA9ICdTdWNjZXNzISBFbWFpbCBpcyBzZW50JztcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQWN0aXZhdGVGb3JtKCk7XG4gICAgICAgICAgfSwoZXJyKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2VuZGluZ01lc3NhZ2UgPSAnRmFpbGVkISBDYW5ub3Qgc2VuZCBlbWFpbCwgdGhpcyB1c2VybmFtZSBpcyBhbHJlYWR5IGFjdGl2YXRlZCc7XG5cbiAgICAgICAgICB9KVxuICAgIH1cblxuXG4gICAgY2xvc2VNb2RhbCgpe1xuICAgICAgJCgnI215TW9kYWwnKS5tb2RhbCgnaGlkZScpO1xuICAgICAgdGhpcy5zZW5kaW5nTWVzc2FnZSA9ICcnO1xuICAgIH1cblxuICAgIHJlc2V0KCl7XG4gICAgICAgIHRoaXMuY3JlYXRlRm9ybSgpO1xuICAgIH1cblxuICAgIHNpZ25pbihzdHVkZW50OiBTdHVkZW50KSB7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9ICdUcnlpbmcgdG8gbG9nIGluIC4uLic7XG4gICAgICAgIHRoaXMuc3R1ZGVudCA9IG5ldyBzdHVkZW50U2lnbmluKHN0dWRlbnQudXNlcm5hbWUsIHN0dWRlbnQucGFzc3dvcmQpO1xuXG4gICAgICB0aGlzLmF1dGhTZXJ2aWNlLnNpZ25pbih0aGlzLnN0dWRlbnQpXG4gICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gZGF0YS5lcnJvcm1lc3NhZ2U7XG4gICAgICAgICAgICBpZihkYXRhLnN0YXR1cyA9PSAnc3VjY2VzcycgJiYgZGF0YS5kYXRhLnJvbGUgPT0gJ3N0dWRlbnQnKSB7XG4gICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uuc2V0VG9rZW4oZGF0YS5kYXRhLnRva2VuLCAnc3R1ZGVudCcsIGRhdGEuZGF0YS5pZCwgZGF0YS5kYXRhLmFjdGl2YXRlZCk7XG4gICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLi9zdHVkZW50L2Rhc2hib2FyZCddKTtcbiAgICAgICAgICAgIH1lbHNlIGlmKGRhdGEuZGF0YS5yb2xlICE9ICdzdHVkZW50Jyl7XG4gICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJ3VzZXJuYW1lIG9yIHBhc3N3b3JkIG5vdCBtYXRjaCEnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gZGF0YS5lcnJvcm1lc3NhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJ1BsZWFzZSBhY3RpdmF0ZWQgeW91ciBhY2NvdW50IGZpcnN0ISc7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuXG5cbiAgICB9XG5cbn1cbiJdfQ==
