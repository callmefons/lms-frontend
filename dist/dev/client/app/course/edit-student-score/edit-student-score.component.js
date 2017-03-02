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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var course_service_1 = require("../../services/course.service");
var config_1 = require("../../services/config");
var auth_service_1 = require("../../auth/auth.service");
var EditStudentScoreComponent = (function () {
    function EditStudentScoreComponent(authService, courseService, route, router) {
        this.authService = authService;
        this.courseService = courseService;
        this.route = route;
        this.router = router;
        this.uploadStete = 'add_xp';
        this.downloadPath = '';
    }
    EditStudentScoreComponent.prototype.changeUploadState = function (state) {
        this.uploadStete = state;
    };
    EditStudentScoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('course_id') != undefined) {
            this.courseService.getCourse(localStorage.getItem('course_id'))
                .subscribe(function (data) {
                _this.selectedId = data.course.id;
                _this.downloadPath = config_1.apiUrl + "downloadExcel/" + _this.selectedId;
            }, function (error) { return console.log(error); });
        }
        else {
            this.router.navigate(['/teach']);
        }
    };
    EditStudentScoreComponent.prototype.download = function () {
    };
    EditStudentScoreComponent.prototype.cancel = function () {
        window.history.back();
    };
    EditStudentScoreComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'edit-student-score',
            templateUrl: 'edit-student-score.component.html',
            styleUrls: ['edit-student-score.component.css']
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, course_service_1.CourseService, router_1.ActivatedRoute, router_1.Router])
    ], EditStudentScoreComponent);
    return EditStudentScoreComponent;
}());
exports.EditStudentScoreComponent = EditStudentScoreComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3Vyc2UvZWRpdC1zdHVkZW50LXNjb3JlL2VkaXQtc3R1ZGVudC1zY29yZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUV4Qyx1QkFBdUQsaUJBQWlCLENBQUMsQ0FBQTtBQUV6RSwrQkFBNEIsK0JBQStCLENBQUMsQ0FBQTtBQUM1RCx1QkFBcUIsdUJBQXVCLENBQUMsQ0FBQTtBQUM3Qyw2QkFBMEIseUJBQXlCLENBQUMsQ0FBQTtBQVNwRDtJQWNJLG1DQUFvQixXQUF3QixFQUFVLGFBQTRCLEVBQzlELEtBQXFCLEVBQVUsTUFBYztRQUQ3QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzlELFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVZqRSxnQkFBVyxHQUFXLFFBQVEsQ0FBQztRQUUvQixpQkFBWSxHQUFXLEVBQUUsQ0FBQztJQVMxQixDQUFDO0lBUEQscURBQWlCLEdBQWpCLFVBQWtCLEtBQWE7UUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQU9ELDRDQUFRLEdBQVI7UUFBQSxpQkFZQztRQVZDLEVBQUUsQ0FBQSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUEsQ0FBQztZQUNqRCxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2lCQUM1RCxTQUFTLENBQUMsVUFBQyxJQUFTO2dCQUNuQixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO2dCQUNqQyxLQUFJLENBQUMsWUFBWSxHQUFNLGVBQU0sc0JBQWlCLEtBQUksQ0FBQyxVQUFZLENBQUM7WUFFbEUsQ0FBQyxFQUFFLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO1FBQ3BDLENBQUM7UUFBQSxJQUFJLENBQUMsQ0FBQztZQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNuQyxDQUFDO0lBQ0gsQ0FBQztJQUVELDRDQUFRLEdBQVI7SUFLQSxDQUFDO0lBRUQsMENBQU0sR0FBTjtRQUNFLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQWhETDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixXQUFXLEVBQUUsbUNBQW1DO1lBQ2hELFNBQVMsRUFBQyxDQUFDLGtDQUFrQyxDQUFDO1NBQ2pELENBQUM7O2lDQUFBO0lBNkNGLGdDQUFDO0FBQUQsQ0EzQ0EsQUEyQ0MsSUFBQTtBQTNDWSxpQ0FBeUIsNEJBMkNyQyxDQUFBIiwiZmlsZSI6ImFwcC9jb3Vyc2UvZWRpdC1zdHVkZW50LXNjb3JlL2VkaXQtc3R1ZGVudC1zY29yZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyLCBOYXZpZ2F0aW9uRXh0cmFzfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge0NvdXJzZX0gZnJvbSBcIi4uLy4uL21vZGVscy9jb3Vyc2VcIjtcbmltcG9ydCB7Q291cnNlU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2NvdXJzZS5zZXJ2aWNlXCI7XG5pbXBvcnQge2FwaVVybH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2NvbmZpZ1wiO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uLy4uL2F1dGgvYXV0aC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdlZGl0LXN0dWRlbnQtc2NvcmUnLFxuICAgIHRlbXBsYXRlVXJsOiAnZWRpdC1zdHVkZW50LXNjb3JlLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6WydlZGl0LXN0dWRlbnQtc2NvcmUuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgRWRpdFN0dWRlbnRTY29yZUNvbXBvbmVudCB7XG5cbiAgICBwcml2YXRlIHNlbGVjdGVkSWQ6IGFueTtcbiAgICBwcml2YXRlIHN1YjogU3Vic2NyaXB0aW9uO1xuXG4gICAgdXBsb2FkU3RldGU6IHN0cmluZyA9ICdhZGRfeHAnO1xuXG4gICAgZG93bmxvYWRQYXRoOiBzdHJpbmcgPSAnJztcblxuICAgIGNoYW5nZVVwbG9hZFN0YXRlKHN0YXRlOiBzdHJpbmcpe1xuICAgICAgICB0aGlzLnVwbG9hZFN0ZXRlID0gc3RhdGU7XG4gICAgfVxuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgcHJpdmF0ZSBjb3Vyc2VTZXJ2aWNlOiBDb3Vyc2VTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKXtcblxuICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvdXJzZV9pZCcpICE9IHVuZGVmaW5lZCl7XG4gICAgICAgIHRoaXMuY291cnNlU2VydmljZS5nZXRDb3Vyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvdXJzZV9pZCcpKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZElkID0gZGF0YS5jb3Vyc2UuaWQ7XG4gICAgICAgICAgICB0aGlzLmRvd25sb2FkUGF0aCA9IGAke2FwaVVybH1kb3dubG9hZEV4Y2VsLyR7dGhpcy5zZWxlY3RlZElkfWA7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZG93bmxvYWRQYXRoKTtcbiAgICAgICAgICB9LCBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICAgICAgfWVsc2Uge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy90ZWFjaCddKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkb3dubG9hZCgpe1xuICAgICAgLy8gdGhpcy5jb3Vyc2VTZXJ2aWNlLmRvd25sb2FkRXhjZWwodGhpcy5zZWxlY3RlZElkKVxuICAgICAgLy8gICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcbiAgICAgIC8vICAgIC8vY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAvLyAgIH0sIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gICAgfVxuXG4gICAgY2FuY2VsKCkge1xuICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cblxufVxuIl19
