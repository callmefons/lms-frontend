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
        this.getStudent(this.student_id);
    };
    StudentDashboardComponent.prototype.createEmailForm = function () {
        this.emailForm = this.formBuilder.group({
            'email': ['', [forms_1.Validators.required, validation_service_1.ValidationService.emailValidator]]
        });
    };
    StudentDashboardComponent.prototype.resetEmailForm = function () {
        this.createEmailForm();
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zdHVkZW50L3N0dWRlbnQtZGFzaGJvYXJkL3N0dWRlbnQtZGFzaGJvYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELGdDQUE2QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBRzlELHVCQUF1RCxpQkFBaUIsQ0FBQyxDQUFBO0FBRXpFLHNCQUFzQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBSXZELGdDQUFrQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQ25ELDZCQUEwQix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3BELHVCQUF3Qix1QkFDeEIsQ0FBQyxDQUQ4QztBQUMvQyxtQ0FBZ0MsbUNBQW1DLENBQUMsQ0FBQTtBQVlwRTtJQTJCRSxtQ0FBb0IsV0FBd0IsRUFDeEIsY0FBOEIsRUFBUyxXQUF3QixFQUMvRCxLQUFxQixFQUFVLE1BQWM7UUFGN0MsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDL0QsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBM0JqRSxjQUFTLEdBQVksS0FBSyxDQUFDO1FBUzNCLGtCQUFhLEdBQVcsQ0FBQyxDQUFDO1FBRTFCLHNCQUFpQixHQUFVLEVBQUUsQ0FBQztRQUM5QixXQUFNLEdBQVUsRUFBRSxDQUFDO1FBSW5CLGNBQVMsR0FBUSx3SkFBd0osQ0FBQztRQUMxSyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLGtCQUFhLEdBQWtCO1lBQzdCLGVBQWUsRUFBRSxHQUFHO1lBQ3BCLGNBQWMsRUFBRSxHQUFHO1NBQ3BCLENBQUM7UUFFRixTQUFJLEdBQWMsRUFBRSxDQUFDO1FBZ0JyQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBYTNCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUErRjFCLFNBQUksR0FBVyxLQUFLLENBQUM7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LENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLFdBQVcsRUFBRSxrQ0FBa0M7WUFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7U0FDL0MsQ0FBQzs7aUNBQUE7SUE0TUYsZ0NBQUM7QUFBRCxDQXpNQSxBQXlNQyxJQUFBO0FBek1ZLGlDQUF5Qiw0QkF5TXJDLENBQUEiLCJmaWxlIjoiYXBwL3N0dWRlbnQvc3R1ZGVudC1kYXNoYm9hcmQvc3R1ZGVudC1kYXNoYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1N0dWRlbnRTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc3R1ZGVudC5zZXJ2aWNlXCI7XG5pbXBvcnQge1N0dWRlbnR9IGZyb20gXCIuLi8uLi9tb2RlbHMvc3R1ZGVudFwiO1xuaW1wb3J0IHtDb3Vyc2V9IGZyb20gXCIuLi8uLi9tb2RlbHMvY291cnNlXCI7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBSb3V0ZXIsIE5hdmlnYXRpb25FeHRyYXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgVmFsaWRhdG9yc30gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQge1Jlc2l6ZU9wdGlvbnMsIEltYWdlUmVzdWx0fSBmcm9tIFwibmcyLWltYWdldXBsb2FkXCI7XG5pbXBvcnQge1RlYWNoZXJ9IGZyb20gXCIuLi8uLi9tb2RlbHMvdGVhY2hlclwiO1xuaW1wb3J0IHtNZXNzYWdlfSBmcm9tIFwicHJpbWVuZy9jb21wb25lbnRzL2NvbW1vbi9hcGlcIjtcbmltcG9ydCB7bXNnfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tZXNzYWdlLXNlcnZpY2UnO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uLy4uL2F1dGgvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQge3B1YmxpY1VybH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2NvbmZpZ1wiXG5pbXBvcnQge1ZhbGlkYXRpb25TZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdmFsaWRhdGlvbi5zZXJ2aWNlXCI7XG5cbmRlY2xhcmUgdmFyICQ6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnbXktc3R1ZGVudC1kYXNoYm9hcmQnLFxuICB0ZW1wbGF0ZVVybDogJ3N0dWRlbnQtZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3N0dWRlbnQtZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MnXVxufSlcblxuXG5leHBvcnQgY2xhc3MgU3R1ZGVudERhc2hib2FyZENvbXBvbmVudCB7XG5cbiAgYWN0aXZhdGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgc3R1ZGVudF9pZDogYW55O1xuICBwcml2YXRlIHN1YjogU3Vic2NyaXB0aW9uO1xuXG4gIHRlYWNoZXI6IFRlYWNoZXI7XG4gIHN0dWRlbnQ6IFN0dWRlbnQ7XG4gIGNvdXJzZTogQ291cnNlO1xuXG4gIHNob3dIaWdoU2NvcmU6IG51bWJlciA9IDU7XG5cbiAgaGlnaFNjb3JlU3R1ZGVudHM6IGFueVtdID0gW107XG4gIGJhZGdlczogYW55W10gPSBbXTtcblxuICBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgdXNlckZvcm06IGFueTtcbiAgZmFrZUltYWdlOiBhbnkgPSAnZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndCREFBb0hCd2dIQmdvSUNBZ0xDZ29M4oCmRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFILzJRPT0nO1xuICBpbWFnZTogc3RyaW5nID0gJyc7XG4gIHJlc2l6ZU9wdGlvbnM6IFJlc2l6ZU9wdGlvbnMgPSB7XG4gICAgcmVzaXplTWF4SGVpZ2h0OiAxNTAsXG4gICAgcmVzaXplTWF4V2lkdGg6IDE1MFxuICB9O1xuXG4gIG1zZ3M6IE1lc3NhZ2VbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgICAgICAgICAgICBwcml2YXRlIHN0dWRlbnRTZXJ2aWNlOiBTdHVkZW50U2VydmljZSwgcHVibGljIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdHVkZW50X2lkID0gdGhpcy5hdXRoU2VydmljZS5pZDtcbiAgICB0aGlzLmNyZWF0ZUVtYWlsRm9ybSgpO1xuICAgIHRoaXMuZ2V0U3R1ZGVudCh0aGlzLnN0dWRlbnRfaWQpO1xuICB9XG5cbiAgZXJyb3JNZXNzYWdlRW1haWw6IHN0cmluZztcbiAgZW1haWxGb3JtOiBhbnk7XG4gIGlzU2VuZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNyZWF0ZUVtYWlsRm9ybSgpe1xuICAgIHRoaXMuZW1haWxGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAnZW1haWwnOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0aW9uU2VydmljZS5lbWFpbFZhbGlkYXRvcl1dXG4gICAgfSk7XG4gIH1cblxuICByZXNldEVtYWlsRm9ybSgpe1xuICAgIHRoaXMuY3JlYXRlRW1haWxGb3JtKCk7XG4gIH1cblxuXG4gIG5ld0ltYWdlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgc2VsZWN0ZWQoaW1hZ2VSZXN1bHQ6IEltYWdlUmVzdWx0KSB7XG5cbiAgICB0aGlzLm5ld0ltYWdlID0gdHJ1ZTtcbiAgICB0aGlzLmltYWdlID0gaW1hZ2VSZXN1bHQucmVzaXplZFxuICAgICAgJiYgaW1hZ2VSZXN1bHQucmVzaXplZC5kYXRhVVJMXG4gICAgICB8fCBpbWFnZVJlc3VsdC5kYXRhVVJMO1xuICB9XG5cbiAgY3JlYXRlRm9ybSgpIHtcbiAgICB0aGlzLnVzZXJGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAnc3R1ZGVudF9pZCc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgICduYW1lJzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgJ3Bhc3N3b3JkJzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dXG4gICAgfSk7XG4gIH1cblxuICBnb3RvUGFnZShwYWdlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbYC9jb3Vyc2UvJHtwYWdlfWBdKTtcbiAgfVxuXG5cbiAgZ2V0U3R1ZGVudChpZDogYW55KSB7XG4gICAgdGhpcy5zdHVkZW50U2VydmljZS5nZXRTdHVkZW50KGlkKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKGRhdGEpID0+IHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgICAgICAgdGhpcy50ZWFjaGVyID0gZGF0YS50ZWFjaGVyWzBdO1xuICAgICAgICAgIHRoaXMuc3R1ZGVudCA9IGRhdGEuc3R1ZGVudFswXS5zdHVkZW50O1xuICAgICAgICAgIHRoaXMuc3R1ZGVudC5pbWFnZSA9IHB1YmxpY1VybCArICdzdHVkZW50cy9sb2dvLycgKyB0aGlzLnN0dWRlbnQuaW1hZ2U7XG4gICAgICAgICAgdGhpcy5pbWFnZSA9ICB0aGlzLnN0dWRlbnQuaW1hZ2U7XG5cblxuICAgICAgICAgIHRoaXMuc3R1ZGVudC5wcm9ncmVzc1R5cGUgPSB0aGlzLnByb2dyZXNzQ2FsY3VsYXRvcih0aGlzLnN0dWRlbnQub3ZlcmFsbF94cCk7XG4gICAgICAgICAgdGhpcy5zdHVkZW50U2VydmljZS5zdHVkZW50ID0gdGhpcy5zdHVkZW50O1xuICAgICAgICAgIHRoaXMuYmFkZ2VzID0gZGF0YS5zdHVkZW50WzBdLmJhZGdlO1xuICAgICAgICAgIHRoaXMuYmFkZ2VzLm1hcCgoYmFkZ2UpID0+IHtcbiAgICAgICAgICAgIGJhZGdlLmltYWdlID0gcHVibGljVXJs4oCLICsgJ3N0dWRlbnRzL2JhZGdlcy8nICsgYmFkZ2UuaW1hZ2VcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHRoaXMuY291cnNlID0gZGF0YS5jb3Vyc2U7XG4gICAgICAgICAgdGhpcy5oaWdoU2NvcmVTdHVkZW50cyA9IGRhdGEubGVhZGVyYm9hcmQ7XG5cbiAgICAgICAgICB0aGlzLmhpZ2hTY29yZVN0dWRlbnRzLm1hcCgoc3R1ZGVudCkgPT4ge1xuICAgICAgICAgICAgc3R1ZGVudC5zdHVkZW50LmltYWdlID0gcHVibGljVXJsICsgJ3N0dWRlbnRzL2xvZ28vJyArIHN0dWRlbnQuc3R1ZGVudC5pbWFnZTtcblxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHN0dWRlbnQuYmFkZ2UubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICBzdHVkZW50LmJhZGdlW2ldLmltYWdlID0gcHVibGljVXJsICsgJ3N0dWRlbnRzL2JhZGdlcy8nICsgc3R1ZGVudC5iYWRnZVtpXS5pbWFnZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0pO1xuXG5cblxuICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5oaWdoU2NvcmVTdHVkZW50cyk7XG4gICAgICAgICAgdGhpcy5zaG93SGlnaFNjb3JlID0gK3RoaXMuY291cnNlLmxlYWRlcl9ib2FyZDtcblxuICAgICAgICAgIHRoaXMuY3JlYXRlRm9ybSgpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICk7XG4gIH1cblxuICBwcml2YXRlIHByb2dyZXNzVHlwZTogc3RyaW5nO1xuICBwcm9ncmVzc0NhbGN1bGF0b3IoeHA6IG51bWJlcik6IHN0cmluZ3tcblxuICAgIGxldCBhbGxTdGF0dXM6IHN0cmluZ1tdID0gWydpbmZvJywgJ3N1Y2Nlc3MnLCAnd2FybmluZycsICdkYW5nZXInXTtcbiAgICBsZXQgc3RhdHVzOiBzdHJpbmc7XG5cbiAgICBpZih4cCA8IDI1KXtcbiAgICAgIHN0YXR1cyA9IGFsbFN0YXR1c1szXTtcbiAgICB9ZWxzZSBpZih4cCA8IDUwKXtcbiAgICAgIHN0YXR1cyA9IGFsbFN0YXR1c1syXTtcbiAgICB9ZWxzZSBpZih4cCA8IDc1KXtcbiAgICAgIHN0YXR1cyA9IGFsbFN0YXR1c1sxXTtcbiAgICB9ZWxzZSB7XG4gICAgICBzdGF0dXMgPSBhbGxTdGF0dXNbMF07XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXR1cztcblxuICB9XG5cblxuICBnb3RvV2ViYm9hcmQoKXtcblxuICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xuICAgICAgcXVlcnlQYXJhbXM6IHsgJ2lkJzogdGhpcy5jb3Vyc2UuaWR9LFxuICAgIH07XG5cbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbYC93ZWJib2FyZC9wb3N0YF0sIG5hdmlnYXRpb25FeHRyYXMpO1xuICB9XG5cbiAgZWRpdDogYm9vbGVhbiA9ZmFsc2U7XG5cbiAgZWRpdE1vZGUobW9kZTogYm9vbGVhbikge1xuICAgIHRoaXMuZWRpdCA9IG1vZGU7XG4gIH1cblxuXG4gIHNhdmUoKSB7XG5cbiAgICBpZih0aGlzLm5ld0ltYWdlKXtcbiAgICAgIHRoaXMuc3R1ZGVudC5pbWFnZSA9IHRoaXMuaW1hZ2U7XG4gICAgfWVsc2Uge1xuICAgICAgbGV0IGltYWdlU3Vic3RyID0gYCR7cHVibGljVXJsfXN0dWRlbnRzL2xvZ28vYC5sZW5ndGg7XG4gICAgICB0aGlzLnN0dWRlbnQuaW1hZ2UgPSB0aGlzLnN0dWRlbnQuaW1hZ2Uuc3Vic3RyaW5nKGltYWdlU3Vic3RyKTtcbiAgICB9XG5cbiAgICAvL2NvbnNvbGUubG9nKHRoaXMuc3R1ZGVudCk7XG5cbiAgICB0aGlzLnN0dWRlbnRTZXJ2aWNlLmVkaXRTdHVkZW50KHRoaXMuc3R1ZGVudClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLmVkaXRNb2RlKGZhbHNlKTtcbiAgICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dNZXNzYWdlKG1zZy5nZXRVcGRhdGVNZXNzYWdlKDIwMCkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNob3dNZXNzYWdlKG1zZy5nZXRVcGRhdGVNZXNzYWdlKDUwMCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICk7XG4gIH1cblxuICBzaG93TWVzc2FnZShtc2c6IGFueSl7XG4gICAgdGhpcy5tc2dzID0gW107XG4gICAgdGhpcy5tc2dzLnB1c2gobXNnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubXNncyA9IFtdO1xuICAgIH0sIDMwMDApO1xuICB9XG5cbiAgc2lnbm91dCgpIHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLnNpZ25vdXQoKS5zdWJzY3JpYmUoXG4gICAgICAoKSA9PiB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hdXRoL3NpZ25pbiddKVxuICAgICk7XG4gIH1cblxuXG4gIGNhbmNlbCgpe1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgfVxuXG5cbn1cbiJdfQ==
