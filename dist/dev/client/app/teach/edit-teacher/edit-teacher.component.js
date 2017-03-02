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
var forms_1 = require('@angular/forms');
var router_1 = require("@angular/router");
var teacher_1 = require("../../models/teacher");
var teacher_service_1 = require("../../services/teacher.service");
var auth_service_1 = require("../../auth/auth.service");
var validation_service_1 = require("../../services/validation.service");
var course_service_1 = require("../../services/course.service");
var message_service_1 = require('../../services/message-service');
var config_1 = require("../../services/config");
var EditTeacherComponent = (function () {
    function EditTeacherComponent(authService, teacherService, formBuilder, router, courseService) {
        this.authService = authService;
        this.teacherService = teacherService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.courseService = courseService;
        this.teacher = new teacher_1.Teacher;
        this.msgs = [];
        this.fakeImage = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoL…FFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH/2Q==';
        this.image = '';
        this.resizeOptions = {
            resizeMaxHeight: 150,
            resizeMaxWidth: 150
        };
        this.newImage = false;
        this.createForm();
    }
    EditTeacherComponent.prototype.ngOnInit = function () {
        if (this.teacherService.teacher != null) {
            this.teacher = this.teacherService.teacher;
            this.teacher.image = (config_1.publicUrl + "/teachers/logo/") + this.teacher.image;
            this.image = this.teacher.image;
        }
        else {
            this.router.navigate(['/teach']);
        }
    };
    EditTeacherComponent.prototype.selected = function (imageResult) {
        this.newImage = true;
        this.image = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
    };
    EditTeacherComponent.prototype.createForm = function () {
        this.userForm = this.formBuilder.group({
            'name': ['', [forms_1.Validators.required]],
            'image': [''],
            'title': ['นาย'],
            'position': ['ครูอัตราจ้าง'],
            'id_card': ['', [forms_1.Validators.required, validation_service_1.ValidationService.isNumber, forms_1.Validators.minLength(13), forms_1.Validators.maxLength(13)]],
            'phone': ['', [forms_1.Validators.required, validation_service_1.ValidationService.isNumber]],
            'address': ['', [forms_1.Validators.required]],
            'teaching_level': ['', [forms_1.Validators.required]],
            'institution': ['', [forms_1.Validators.required]],
            'province': ['', [forms_1.Validators.required]]
        });
    };
    EditTeacherComponent.prototype.reset = function () {
        this.createForm();
    };
    EditTeacherComponent.prototype.onSubmit = function (teacher) {
        var _this = this;
        if (this.newImage) {
            this.teacher.image = this.image;
        }
        else {
            var teacherPath = (config_1.publicUrl + "teachers/logo/").length;
            this.teacher.image = this.teacher.image.substring(teacherPath);
        }
        this.teacherService.editTeacherProfile(this.teacher)
            .subscribe(function (data) {
            if (data.status == "success") {
                _this.showMessage(message_service_1.msg.getUpdateMessage(200));
            }
            else {
                _this.showMessage(message_service_1.msg.getUpdateMessage(500));
            }
        }, function (error) { return console.log(error); });
    };
    EditTeacherComponent.prototype.showMessage = function (msg) {
        var _this = this;
        this.msgs = [];
        this.msgs.push(msg);
        setTimeout(function () {
            _this.msgs = [];
        }, 3000);
    };
    EditTeacherComponent.prototype.cancel = function () {
        window.history.back();
    };
    EditTeacherComponent.prototype.ngOnDestroy = function () {
        location.reload();
    };
    EditTeacherComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'edit-teacher',
            templateUrl: 'edit-teacher.component.html',
            styleUrls: ['edit-teacher.component.css'],
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, teacher_service_1.TeacherService, forms_1.FormBuilder, router_1.Router, course_service_1.CourseService])
    ], EditTeacherComponent);
    return EditTeacherComponent;
}());
exports.EditTeacherComponent = EditTeacherComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90ZWFjaC9lZGl0LXRlYWNoZXIvZWRpdC10ZWFjaGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELHNCQUE4RCxnQkFBZ0IsQ0FBQyxDQUFBO0FBQy9FLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBRXZDLHdCQUFzQixzQkFBc0IsQ0FBQyxDQUFBO0FBQzdDLGdDQUE2QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQzlELDZCQUEwQix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3BELG1DQUFnQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBQ3BFLCtCQUE0QiwrQkFBK0IsQ0FBQyxDQUFBO0FBQzVELGdDQUFrQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBRW5ELHVCQUF5Qix1QkFBdUIsQ0FBQyxDQUFBO0FBU2pEO0lBZ0JJLDhCQUFtQixXQUF3QixFQUFVLGNBQThCLEVBQy9ELFdBQXdCLEVBQVUsTUFBYyxFQUFVLGFBQTRCO1FBRHZGLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQy9ELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBWjFHLFlBQU8sR0FBRyxJQUFJLGlCQUFPLENBQUM7UUFDdEIsU0FBSSxHQUFjLEVBQUUsQ0FBQztRQUdyQixjQUFTLEdBQVEsd0pBQXdKLENBQUM7UUFDMUssVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixrQkFBYSxHQUFrQjtZQUM3QixlQUFlLEVBQUUsR0FBRztZQUNwQixjQUFjLEVBQUUsR0FBRztTQUNwQixDQUFDO1FBb0JGLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFmeEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCx1Q0FBUSxHQUFSO1FBRUUsRUFBRSxDQUFDLENBQUMsSUFBSSxD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QUM7Z0JBQzNCLEtBQUksQ0FBQyxXQUFXLENBQUMscUJBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzlDLENBQUM7WUFBQSxJQUFJLENBQUMsQ0FBQztnQkFDTCxLQUFJLENBQUMsV0FBVyxDQUFDLHFCQUFHLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM5QyxDQUFDO1FBQ0gsQ0FBQyxFQUNELFVBQUMsS0FBSyxJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FDOUIsQ0FBQztJQUNOLENBQUM7SUFFSCwwQ0FBVyxHQUFYLFVBQVksR0FBUTtRQUFwQixpQkFNQztRQUxDLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEIsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDakIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUdELHFDQUFNLEdBQU47UUFDSSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCwwQ0FBVyxHQUFYO1FBQ0UsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUE5R0g7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSw2QkFBNkI7WUFDMUMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7U0FDNUMsQ0FBQzs7NEJBQUE7SUE0R0YsMkJBQUM7QUFBRCxDQTNHQSxBQTJHQyxJQUFBO0FBM0dZLDRCQUFvQix1QkEyR2hDLENBQUEiLCJmaWxlIjoiYXBwL3RlYWNoL2VkaXQtdGVhY2hlci9lZGl0LXRlYWNoZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMsIEZvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtSZXNpemVPcHRpb25zLCBJbWFnZVJlc3VsdH0gZnJvbSBcIm5nMi1pbWFnZXVwbG9hZFwiO1xuaW1wb3J0IHtUZWFjaGVyfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3RlYWNoZXJcIjtcbmltcG9ydCB7VGVhY2hlclNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy90ZWFjaGVyLnNlcnZpY2VcIjtcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi8uLi9hdXRoL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHtWYWxpZGF0aW9uU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3ZhbGlkYXRpb24uc2VydmljZVwiO1xuaW1wb3J0IHtDb3Vyc2VTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvY291cnNlLnNlcnZpY2VcIjtcbmltcG9ydCB7bXNnfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tZXNzYWdlLXNlcnZpY2UnO1xuaW1wb3J0IHtNZXNzYWdlfSBmcm9tIFwicHJpbWVuZy9jb21wb25lbnRzL2NvbW1vbi9hcGlcIjtcbmltcG9ydCB7cHVibGljVXJsfSBmcm9tICBcIi4uLy4uL3NlcnZpY2VzL2NvbmZpZ1wiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdlZGl0LXRlYWNoZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnZWRpdC10ZWFjaGVyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnZWRpdC10ZWFjaGVyLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRWRpdFRlYWNoZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cbiAgICAvL0dldCBwYXJhbWV0ZXJcbiAgICBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgICBjb3Vyc2VfaWQ6IGFueTtcbiAgICB0ZWFjaGVyID0gbmV3IFRlYWNoZXI7XG4gICAgbXNnczogTWVzc2FnZVtdID0gW107XG5cbiAgICB1c2VyRm9ybTogYW55O1xuICAgIGZha2VJbWFnZTogYW55ID0gJ2RhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRQUFBUUFCQUFELzJ3QkRBQW9IQndnSEJnb0lDQWdMQ2dvTOKApkZGRkFCUlJSUUFVVVVVQUZGRkZBQlJSUlFBVVVVVUFGRkZGQUJSUlJRQVVVVVVBRkZGRkFCUlJSUUFVVVVVQUZGRkZBSC8yUT09JztcbiAgICBpbWFnZTogc3RyaW5nID0gJyc7XG4gICAgcmVzaXplT3B0aW9uczogUmVzaXplT3B0aW9ucyA9IHtcbiAgICAgIHJlc2l6ZU1heEhlaWdodDogMTUwLFxuICAgICAgcmVzaXplTWF4V2lkdGg6IDE1MFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIHRlYWNoZXJTZXJ2aWNlOiBUZWFjaGVyU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBjb3Vyc2VTZXJ2aWNlOiBDb3Vyc2VTZXJ2aWNlKVxuICAgIHtcbiAgICAgIHRoaXMuY3JlYXRlRm9ybSgpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuXG4gICAgICBpZiAodGhpcy50ZWFjaGVyU2VydmljZS50ZWFjaGVyICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy50ZWFjaGVyID0gdGhpcy50ZWFjaGVyU2VydmljZS50ZWFjaGVyO1xuICAgICAgICB0aGlzLnRlYWNoZXIuaW1hZ2UgPSBgJHtwdWJsaWNVcmx9L3RlYWNoZXJzL2xvZ28vYCArIHRoaXMudGVhY2hlci5pbWFnZTtcbiAgICAgICAgdGhpcy5pbWFnZSA9ICB0aGlzLnRlYWNoZXIuaW1hZ2U7XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3RlYWNoJ10pO1xuICAgICAgfVxuICAgIH1cblxuICAgIG5ld0ltYWdlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBzZWxlY3RlZChpbWFnZVJlc3VsdDogSW1hZ2VSZXN1bHQpIHtcblxuICAgICAgdGhpcy5uZXdJbWFnZSA9IHRydWU7XG4gICAgICB0aGlzLmltYWdlID0gaW1hZ2VSZXN1bHQucmVzaXplZFxuICAgICAgICAmJiBpbWFnZVJlc3VsdC5yZXNpemVkLmRhdGFVUkxcbiAgICAgICAgfHwgaW1hZ2VSZXN1bHQuZGF0YVVSTDtcbiAgICB9XG5cbiAgICBjcmVhdGVGb3JtKCl7XG5cbiAgICAgIHRoaXMudXNlckZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICAgJ25hbWUnOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICAgICdpbWFnZSc6IFsnJ10sXG4gICAgICAgICd0aXRsZSc6IFsn4LiZ4Liy4LiiJ10sXG4gICAgICAgICdwb3NpdGlvbic6IFsn4LiE4Lij4Li54Lit4Lix4LiV4Lij4Liy4LiI4LmJ4Liy4LiHJ10sXG4gICAgICAgICdpZF9jYXJkJzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdGlvblNlcnZpY2UuaXNOdW1iZXIsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDEzKSwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMTMpXV0sXG4gICAgICAgICdwaG9uZSc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRpb25TZXJ2aWNlLmlzTnVtYmVyXV0sXG4gICAgICAgICdhZGRyZXNzJzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgICAndGVhY2hpbmdfbGV2ZWwnOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICAgICdpbnN0aXR1dGlvbic6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgICAgJ3Byb3ZpbmNlJzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXNldCgpe1xuICAgICAgICB0aGlzLmNyZWF0ZUZvcm0oKTtcbiAgICB9XG5cbiAgICBvblN1Ym1pdCh0ZWFjaGVyOiBUZWFjaGVyKSB7XG5cbiAgICAgIGlmKHRoaXMubmV3SW1hZ2Upe1xuICAgICAgICB0aGlzLnRlYWNoZXIuaW1hZ2UgPSB0aGlzLmltYWdlO1xuICAgICAgfWVsc2Uge1xuICAgICAgICBsZXQgdGVhY2hlclBhdGggPSBgJHtwdWJsaWNVcmx9dGVhY2hlcnMvbG9nby9gLmxlbmd0aDtcbiAgICAgICAgdGhpcy50ZWFjaGVyLmltYWdlID0gdGhpcy50ZWFjaGVyLmltYWdlLnN1YnN0cmluZyh0ZWFjaGVyUGF0aCk7XG4gICAgICB9XG5cbiAgICAgIC8vY29uc29sZS5sb2coIHRoaXMudGVhY2hlci5pbWFnZSk7XG5cbiAgICAgIHRoaXMudGVhY2hlclNlcnZpY2UuZWRpdFRlYWNoZXJQcm9maWxlKHRoaXMudGVhY2hlcilcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgaWYoZGF0YS5zdGF0dXMgPT0gXCJzdWNjZXNzXCIpe1xuICAgICAgICAgICAgICB0aGlzLnNob3dNZXNzYWdlKG1zZy5nZXRVcGRhdGVNZXNzYWdlKDIwMCkpO1xuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnNob3dNZXNzYWdlKG1zZy5nZXRVcGRhdGVNZXNzYWdlKDUwMCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgc2hvd01lc3NhZ2UobXNnOiBhbnkpe1xuICAgIHRoaXMubXNncyA9IFtdO1xuICAgIHRoaXMubXNncy5wdXNoKG1zZyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm1zZ3MgPSBbXTtcbiAgICB9LCAzMDAwKTtcbiAgfVxuXG5cbiAgY2FuY2VsKCl7XG4gICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgfVxuXG5cbn1cbiJdfQ==
