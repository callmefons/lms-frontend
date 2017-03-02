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
var student_service_1 = require("../../services/student.service");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var message_service_1 = require('../../services/message-service');
var auth_service_1 = require("../../auth/auth.service");
var config_1 = require("../../services/config");
var validation_service_1 = require("../../services/validation.service");
var StudentDashboardComponent = (function () {
    function StudentDashboardComponent(formBuilder, studentService, authService, route, router) {
        this.formBuilder = formBuilder;
        this.studentService = studentService;
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.activated = false;
        this.showHighScore = 5;
        this.highScoreStudents = [];
        this.badges = [];
        this.fakeImage = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoL…FFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH/2Q==';
        this.image = '';
        this.resizeOptions = {
            resizeMaxHeight: 150,
            resizeMaxWidth: 150
        };
        this.msgs = [];
        this.isSending = false;
        this.newImage = false;
        this.edit = false;
    }
    StudentDashboardComponent.prototype.ngOnInit = function () {
        this.student_id = this.authService.id;
        this.createEmailForm();
        if (+localStorage.getItem('status') != 0) {
            this.activated = true;
            this.getStudent(this.student_id);
        }
        else {
            this.activated = false;
        }
    };
    StudentDashboardComponent.prototype.createEmailForm = function () {
        this.emailForm = this.formBuilder.group({
            'email': ['', [forms_1.Validators.required, validation_service_1.ValidationService.emailValidator]]
        });
    };
    StudentDashboardComponent.prototype.resetEmailForm = function () {
        this.createEmailForm();
    };
    StudentDashboardComponent.prototype.sendEmailForm = function (email) {
        this.isSending = true;
    };
    StudentDashboardComponent.prototype.selected = function (imageResult) {
        this.newImage = true;
        this.image = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
    };
    StudentDashboardComponent.prototype.createForm = function () {
        this.userForm = this.formBuilder.group({
            'student_id': ['', [forms_1.Validators.required]],
            'username': ['', [forms_1.Validators.required]],
            'name': ['', [forms_1.Validators.required]],
            'password': ['', [forms_1.Validators.required]]
        });
    };
    StudentDashboardComponent.prototype.gotoPage = function (page) {
        this.router.navigate([("/course/" + page)]);
    };
    StudentDashboardComponent.prototype.getStudent = function (id) {
        var _this = this;
        this.studentService.getStudent(id)
            .subscribe(function (data) {
            _this.teacher = data.teacher[0];
            _this.student = data.student[0].student;
            _this.student.image = config_1.publicUrl + 'students/logo/' + _this.student.image;
            _this.image = _this.student.image;
            _this.student.progressType = _this.progressCalculator(_this.student.overall_xp);
            _this.studentService.student = _this.student;
            _this.badges = data.student[0].badge;
            _this.badges.map(function (badge) {
                badge.image = config_1.publicUrl + 'students/badges/' + badge.image;
            });
            _this.course = data.course;
            _this.highScoreStudents = data.leaderboard;
            _this.highScoreStudents.map(function (student) {
                student.student.image = config_1.publicUrl + 'students/logo/' + student.student.image;
                for (var i = 0; i < student.badge.length; i++) {
                    student.badge[i].image = config_1.publicUrl + 'students/badges/' + student.badge[i].image;
                }
            });
            _this.showHighScore = +_this.course.leader_board;
            _this.createForm();
        }, function (error) { return console.log(error); });
    };
    StudentDashboardComponent.prototype.progressCalculator = function (xp) {
        var allStatus = ['info', 'success', 'warning', 'danger'];
        var status;
        if (xp < 25) {
            status = allStatus[3];
        }
        else if (xp < 50) {
            status = allStatus[2];
        }
        else if (xp < 75) {
            status = allStatus[1];
        }
        else {
            status = allStatus[0];
        }
        return status;
    };
    StudentDashboardComponent.prototype.gotoWebboard = function () {
        var navigationExtras = {
            queryParams: { 'id': this.course.id },
        };
        this.router.navigate(["/webboard/post"], navigationExtras);
    };
    StudentDashboardComponent.prototype.editMode = function (mode) {
        this.edit = mode;
    };
    StudentDashboardComponent.prototype.save = function () {
        var _this = this;
        if (this.newImage) {
            this.student.image = this.image;
        }
        else {
            var imageSubstr = (config_1.publicUrl + "students/logo/").length;
            this.student.image = this.student.image.substring(imageSubstr);
        }
        this.studentService.editStudent(this.student)
            .subscribe(function (data) {
            _this.editMode(false);
            if (data.status == 'success') {
                _this.showMessage(message_service_1.msg.getUpdateMessage(200));
            }
            else {
                _this.showMessage(message_service_1.msg.getUpdateMessage(500));
            }
        }, function (error) { return console.log(error); });
    };
    StudentDashboardComponent.prototype.showMessage = function (msg) {
        var _this = this;
        this.msgs = [];
        this.msgs.push(msg);
        setTimeout(function () {
            _this.msgs = [];
        }, 3000);
    };
    StudentDashboardComponent.prototype.signout = function () {
        var _this = this;
        this.authService.signout().subscribe(function () { return _this.router.navigate(['/auth/signin']); });
    };
    StudentDashboardComponent.prototype.cancel = function () {
        window.history.back();
    };
    StudentDashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-student-dashboard',
            templateUrl: 'student-dashboard.component.html',
            styleUrls: ['student-dashboard.component.css']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, student_service_1.StudentService, auth_service_1.AuthService, router_1.ActivatedRoute, router_1.Router])
    ], StudentDashboardComponent);
    return StudentDashboardComponent;
}());
exports.StudentDashboardComponent = StudentDashboardComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zdHVkZW50L3N0dWRlbnQtZGFzaGJvYXJkL3N0dWRlbnQtZGFzaGJvYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELGdDQUE2QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBRzlELHVCQUF1RCxpQkFBaUIsQ0FBQyxDQUFBO0FBRXpFLHNCQUFzQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBSXZELGdDQUFrQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQ25ELDZCQUEwQix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3BELHVCQUF3Qix1QkFDeEIsQ0FBQyxDQUQ4QztBQUMvQyxtQ0FBZ0MsbUNBQW1DLENBQUMsQ0FBQTtBQVlwRTtJQTJCRSxtQ0FBb0IsV0FBd0IsRUFDeEIsY0FBOEIsRUFBUyxXQUF3QixFQUMvRCxLQUFxQixFQUFVLE1BQWM7UUFGN0MsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDL0QsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBM0JqRSxjQUFTLEdBQVksS0FBSyxDQUFDO1FBUzNCLGtCQUFhLEdBQVcsQ0FBQyxDQUFDO1FBRTFCLHNCQUFpQixHQUFVLEVBQUUsQ0FBQztRQUM5QixXQUFNLEdBQVUsRUFBRSxDQUFDO1FBSW5CLGNBQVMsR0FBUSx3SkFBd0osQ0FBQztRQUMxSyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLGtCQUFhLEdBQWtCO1lBQzdCLGVBQWUsRUFBRSxHQUFHO1lBQ3BCLGNBQWMsRUFBRSxHQUFHO1NBQ3BCLENBQUM7UUFFRixTQUFJLEdBQWMsRUFBRSxDQUFDO1FBdUJyQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBb0MzQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBZ0cxQixTQUFJLEdBQVcsS0FBSyxDQUFD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RUFBRSxDQUFDO1FBQ2pCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCwyQ0FBTyxHQUFQO1FBQUEsaUJBSUM7UUFIQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FDbEMsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBdEMsQ0FBc0MsQ0FDN0MsQ0FBQztJQUNKLENBQUM7SUFHRCwwQ0FBTSxHQUFOO1FBQ0UsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBN09IO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLFdBQVcsRUFBRSxrQ0FBa0M7WUFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7U0FDL0MsQ0FBQzs7aUNBQUE7SUEyT0YsZ0NBQUM7QUFBRCxDQXhPQSxBQXdPQyxJQUFBO0FBeE9ZLGlDQUF5Qiw0QkF3T3JDLENBQUEiLCJmaWxlIjoiYXBwL3N0dWRlbnQvc3R1ZGVudC1kYXNoYm9hcmQvc3R1ZGVudC1kYXNoYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1N0dWRlbnRTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc3R1ZGVudC5zZXJ2aWNlXCI7XG5pbXBvcnQge1N0dWRlbnR9IGZyb20gXCIuLi8uLi9tb2RlbHMvc3R1ZGVudFwiO1xuaW1wb3J0IHtDb3Vyc2V9IGZyb20gXCIuLi8uLi9tb2RlbHMvY291cnNlXCI7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBSb3V0ZXIsIE5hdmlnYXRpb25FeHRyYXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgVmFsaWRhdG9yc30gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQge1Jlc2l6ZU9wdGlvbnMsIEltYWdlUmVzdWx0fSBmcm9tIFwibmcyLWltYWdldXBsb2FkXCI7XG5pbXBvcnQge1RlYWNoZXJ9IGZyb20gXCIuLi8uLi9tb2RlbHMvdGVhY2hlclwiO1xuaW1wb3J0IHtNZXNzYWdlfSBmcm9tIFwicHJpbWVuZy9jb21wb25lbnRzL2NvbW1vbi9hcGlcIjtcbmltcG9ydCB7bXNnfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tZXNzYWdlLXNlcnZpY2UnO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uLy4uL2F1dGgvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQge3B1YmxpY1VybH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2NvbmZpZ1wiXG5pbXBvcnQge1ZhbGlkYXRpb25TZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdmFsaWRhdGlvbi5zZXJ2aWNlXCI7XG5cbmRlY2xhcmUgdmFyICQ6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnbXktc3R1ZGVudC1kYXNoYm9hcmQnLFxuICB0ZW1wbGF0ZVVybDogJ3N0dWRlbnQtZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3N0dWRlbnQtZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MnXVxufSlcblxuXG5leHBvcnQgY2xhc3MgU3R1ZGVudERhc2hib2FyZENvbXBvbmVudCB7XG5cbiAgYWN0aXZhdGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgc3R1ZGVudF9pZDogYW55O1xuICBwcml2YXRlIHN1YjogU3Vic2NyaXB0aW9uO1xuXG4gIHRlYWNoZXI6IFRlYWNoZXI7XG4gIHN0dWRlbnQ6IFN0dWRlbnQ7XG4gIGNvdXJzZTogQ291cnNlO1xuXG4gIHNob3dIaWdoU2NvcmU6IG51bWJlciA9IDU7XG5cbiAgaGlnaFNjb3JlU3R1ZGVudHM6IGFueVtdID0gW107XG4gIGJhZGdlczogYW55W10gPSBbXTtcblxuICBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgdXNlckZvcm06IGFueTtcbiAgZmFrZUltYWdlOiBhbnkgPSAnZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndCREFBb0hCd2dIQmdvSUNBZ0xDZ29M4oCmRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFILzJRPT0nO1xuICBpbWFnZTogc3RyaW5nID0gJyc7XG4gIHJlc2l6ZU9wdGlvbnM6IFJlc2l6ZU9wdGlvbnMgPSB7XG4gICAgcmVzaXplTWF4SGVpZ2h0OiAxNTAsXG4gICAgcmVzaXplTWF4V2lkdGg6IDE1MFxuICB9O1xuXG4gIG1zZ3M6IE1lc3NhZ2VbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgICAgICAgICAgICBwcml2YXRlIHN0dWRlbnRTZXJ2aWNlOiBTdHVkZW50U2VydmljZSwgcHVibGljIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdHVkZW50X2lkID0gdGhpcy5hdXRoU2VydmljZS5pZDtcbiAgICB0aGlzLmNyZWF0ZUVtYWlsRm9ybSgpO1xuXG4gICAgaWYoK2xvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdGF0dXMnKSAhPSAwKXtcbiAgICAgIHRoaXMuYWN0aXZhdGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuZ2V0U3R1ZGVudCh0aGlzLnN0dWRlbnRfaWQpO1xuICAgIH1lbHNlIHtcbiAgICAgIHRoaXMuYWN0aXZhdGVkID0gZmFsc2U7XG4gICAgICAvL2NvbnNvbGUubG9nKCdhY3RpdmF0ZSBlbWFpbCcpO1xuICAgIH1cbiAgfVxuXG4gIGVycm9yTWVzc2FnZUVtYWlsOiBzdHJpbmc7XG4gIGVtYWlsRm9ybTogYW55O1xuICBpc1NlbmRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjcmVhdGVFbWFpbEZvcm0oKXtcbiAgICB0aGlzLmVtYWlsRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgJ2VtYWlsJzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdGlvblNlcnZpY2UuZW1haWxWYWxpZGF0b3JdXVxuICAgIH0pO1xuICB9XG5cbiAgcmVzZXRFbWFpbEZvcm0oKXtcbiAgICB0aGlzLmNyZWF0ZUVtYWlsRm9ybSgpO1xuICB9XG5cbiAgc2VuZEVtYWlsRm9ybShlbWFpbDogYW55KSB7XG5cbiAgICB0aGlzLmlzU2VuZGluZyA9IHRydWU7XG5cbiAgICAvLyB0aGlzLmF1dGhTZXJ2aWNlLmZvcmdvdFBhc3N3b3JkKGVtYWlsKVxuICAgIC8vICAgLnN1YnNjcmliZShcbiAgICAvLyAgICAgKGRhdGE6IGFueSkgPT4ge1xuICAgIC8vICAgICAgIGlmKGRhdGEuc3RhdHVzID09ICdzdWNjZXNzJyl7XG4gICAgLy8gICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4vYXV0aC9zaWduaW4nXSk7XG4gICAgLy8gICAgICAgICB0aGlzLmlzU2VuZGluZyA9IGZhbHNlO1xuICAgIC8vICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcbiAgICAvLyAgICAgICB9ZWxzZSB7XG4gICAgLy8gICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xuICAgIC8vICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBkYXRhLmVycm9ybWVzc2FnZTtcbiAgICAvLyAgICAgICAgIHRoaXMuaXNTZW5kaW5nID0gZmFsc2U7XG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICB9LFxuICAgIC8vICAgICAoZXJyb3I6YW55KSA9PiB7XG4gICAgLy8gICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICApO1xuICB9XG5cblxuICBuZXdJbWFnZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHNlbGVjdGVkKGltYWdlUmVzdWx0OiBJbWFnZVJlc3VsdCkge1xuXG4gICAgdGhpcy5uZXdJbWFnZSA9IHRydWU7XG4gICAgdGhpcy5pbWFnZSA9IGltYWdlUmVzdWx0LnJlc2l6ZWRcbiAgICAgICYmIGltYWdlUmVzdWx0LnJlc2l6ZWQuZGF0YVVSTFxuICAgICAgfHwgaW1hZ2VSZXN1bHQuZGF0YVVSTDtcbiAgfVxuXG4gIGNyZWF0ZUZvcm0oKSB7XG4gICAgdGhpcy51c2VyRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgJ3N0dWRlbnRfaWQnOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICAndXNlcm5hbWUnOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICAnbmFtZSc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgICdwYXNzd29yZCc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXVxuICAgIH0pO1xuICB9XG5cbiAgZ290b1BhZ2UocGFnZTogc3RyaW5nKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2AvY291cnNlLyR7cGFnZX1gXSk7XG4gIH1cblxuXG4gIGdldFN0dWRlbnQoaWQ6IGFueSkge1xuICAgIHRoaXMuc3R1ZGVudFNlcnZpY2UuZ2V0U3R1ZGVudChpZClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChkYXRhKSA9PiB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcblxuICAgICAgICAgIHRoaXMudGVhY2hlciA9IGRhdGEudGVhY2hlclswXTtcbiAgICAgICAgICB0aGlzLnN0dWRlbnQgPSBkYXRhLnN0dWRlbnRbMF0uc3R1ZGVudDtcbiAgICAgICAgICB0aGlzLnN0dWRlbnQuaW1hZ2UgPSBwdWJsaWNVcmwgKyAnc3R1ZGVudHMvbG9nby8nICsgdGhpcy5zdHVkZW50LmltYWdlO1xuICAgICAgICAgIHRoaXMuaW1hZ2UgPSAgdGhpcy5zdHVkZW50LmltYWdlO1xuXG5cbiAgICAgICAgICB0aGlzLnN0dWRlbnQucHJvZ3Jlc3NUeXBlID0gdGhpcy5wcm9ncmVzc0NhbGN1bGF0b3IodGhpcy5zdHVkZW50Lm92ZXJhbGxfeHApO1xuICAgICAgICAgIHRoaXMuc3R1ZGVudFNlcnZpY2Uuc3R1ZGVudCA9IHRoaXMuc3R1ZGVudDtcbiAgICAgICAgICB0aGlzLmJhZGdlcyA9IGRhdGEuc3R1ZGVudFswXS5iYWRnZTtcbiAgICAgICAgICB0aGlzLmJhZGdlcy5tYXAoKGJhZGdlKSA9PiB7XG4gICAgICAgICAgICBiYWRnZS5pbWFnZSA9IHB1YmxpY1VybOKAiyArICdzdHVkZW50cy9iYWRnZXMvJyArIGJhZGdlLmltYWdlXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB0aGlzLmNvdXJzZSA9IGRhdGEuY291cnNlO1xuICAgICAgICAgIHRoaXMuaGlnaFNjb3JlU3R1ZGVudHMgPSBkYXRhLmxlYWRlcmJvYXJkO1xuXG4gICAgICAgICAgdGhpcy5oaWdoU2NvcmVTdHVkZW50cy5tYXAoKHN0dWRlbnQpID0+IHtcbiAgICAgICAgICAgIHN0dWRlbnQuc3R1ZGVudC5pbWFnZSA9IHB1YmxpY1VybCArICdzdHVkZW50cy9sb2dvLycgKyBzdHVkZW50LnN0dWRlbnQuaW1hZ2U7XG5cbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzdHVkZW50LmJhZGdlLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgc3R1ZGVudC5iYWRnZVtpXS5pbWFnZSA9IHB1YmxpY1VybCArICdzdHVkZW50cy9iYWRnZXMvJyArIHN0dWRlbnQuYmFkZ2VbaV0uaW1hZ2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9KTtcblxuXG5cbiAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuaGlnaFNjb3JlU3R1ZGVudHMpO1xuICAgICAgICAgIHRoaXMuc2hvd0hpZ2hTY29yZSA9ICt0aGlzLmNvdXJzZS5sZWFkZXJfYm9hcmQ7XG5cbiAgICAgICAgICB0aGlzLmNyZWF0ZUZvcm0oKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXG4gICAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBwcm9ncmVzc1R5cGU6IHN0cmluZztcbiAgcHJvZ3Jlc3NDYWxjdWxhdG9yKHhwOiBudW1iZXIpOiBzdHJpbmd7XG5cbiAgICBsZXQgYWxsU3RhdHVzOiBzdHJpbmdbXSA9IFsnaW5mbycsICdzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZGFuZ2VyJ107XG4gICAgbGV0IHN0YXR1czogc3RyaW5nO1xuXG4gICAgaWYoeHAgPCAyNSl7XG4gICAgICBzdGF0dXMgPSBhbGxTdGF0dXNbM107XG4gICAgfWVsc2UgaWYoeHAgPCA1MCl7XG4gICAgICBzdGF0dXMgPSBhbGxTdGF0dXNbMl07XG4gICAgfWVsc2UgaWYoeHAgPCA3NSl7XG4gICAgICBzdGF0dXMgPSBhbGxTdGF0dXNbMV07XG4gICAgfWVsc2Uge1xuICAgICAgc3RhdHVzID0gYWxsU3RhdHVzWzBdO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0dXM7XG5cbiAgfVxuXG5cbiAgZ290b1dlYmJvYXJkKCl7XG5cbiAgICBsZXQgbmF2aWdhdGlvbkV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IHtcbiAgICAgIHF1ZXJ5UGFyYW1zOiB7ICdpZCc6IHRoaXMuY291cnNlLmlkfSxcbiAgICB9O1xuXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2Avd2ViYm9hcmQvcG9zdGBdLCBuYXZpZ2F0aW9uRXh0cmFzKTtcbiAgfVxuXG4gIGVkaXQ6IGJvb2xlYW4gPWZhbHNlO1xuXG4gIGVkaXRNb2RlKG1vZGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmVkaXQgPSBtb2RlO1xuICB9XG5cblxuICBzYXZlKCkge1xuXG4gICAgaWYodGhpcy5uZXdJbWFnZSl7XG4gICAgICB0aGlzLnN0dWRlbnQuaW1hZ2UgPSB0aGlzLmltYWdlO1xuICAgIH1lbHNlIHtcbiAgICAgIGxldCBpbWFnZVN1YnN0ciA9IGAke3B1YmxpY1VybH1zdHVkZW50cy9sb2dvL2AubGVuZ3RoO1xuICAgICAgdGhpcy5zdHVkZW50LmltYWdlID0gdGhpcy5zdHVkZW50LmltYWdlLnN1YnN0cmluZyhpbWFnZVN1YnN0cik7XG4gICAgfVxuXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLnN0dWRlbnQpO1xuXG4gICAgdGhpcy5zdHVkZW50U2VydmljZS5lZGl0U3R1ZGVudCh0aGlzLnN0dWRlbnQpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5lZGl0TW9kZShmYWxzZSk7XG4gICAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgdGhpcy5zaG93TWVzc2FnZShtc2cuZ2V0VXBkYXRlTWVzc2FnZSgyMDApKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaG93TWVzc2FnZShtc2cuZ2V0VXBkYXRlTWVzc2FnZSg1MDApKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpXG4gICAgICApO1xuICB9XG5cbiAgc2hvd01lc3NhZ2UobXNnOiBhbnkpe1xuICAgIHRoaXMubXNncyA9IFtdO1xuICAgIHRoaXMubXNncy5wdXNoKG1zZyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm1zZ3MgPSBbXTtcbiAgICB9LCAzMDAwKTtcbiAgfVxuXG4gIHNpZ25vdXQoKSB7XG4gICAgdGhpcy5hdXRoU2VydmljZS5zaWdub3V0KCkuc3Vic2NyaWJlKFxuICAgICAgKCkgPT4gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXV0aC9zaWduaW4nXSlcbiAgICApO1xuICB9XG5cblxuICBjYW5jZWwoKXtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gIH1cblxuXG59XG4iXX0=
