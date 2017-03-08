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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var http_1 = require("@angular/http");
var router_1 = require('@angular/router');
var ng2_imageupload_1 = require("ng2-imageupload");
var growl_1 = require("primeng/components/growl/growl");
var header_component_1 = require("../header/header.component");
var control_messages_component_1 = require("./control-messages.component");
var footer_component_1 = require("../footer/footer.component");
var validation_service_1 = require("../services/validation.service");
var app_routes_1 = require("../app.routes");
var teacher_service_1 = require("../services/teacher.service");
var teach_nav_component_1 = require("../teach/teach-nav/teach-nav.component");
var course_service_1 = require("../services/course.service");
var filterdata_pipe_1 = require("./pipes/filterdata.pipe");
var student_service_1 = require("../services/student.service");
var progressbar_1 = require("primeng/components/progressbar/progressbar");
var webboard_service_1 = require("../services/webboard.service");
var equal_validator_directive_1 = require("../services/equal-validator.directive");
var dialog_1 = require("primeng/components/dialog/dialog");
var ng2_file_input_1 = require("ng2-file-input");
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule,
            providers: [
                app_routes_1.appRoutingProviders,
                validation_service_1.ValidationService,
                teacher_service_1.TeacherService,
                course_service_1.CourseService,
                student_service_1.StudentService,
                webboard_service_1.WebboardService,
            ]
        };
    };
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                growl_1.GrowlModule,
                progressbar_1.ProgressBarModule,
                ng2_imageupload_1.ImageUploadModule,
                dialog_1.DialogModule,
                ng2_file_input_1.Ng2FileInputModule.forRoot()
            ],
            declarations: [
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                teach_nav_component_1.TeachNavComponent,
                control_messages_component_1.ControlMessagesComponent,
                filterdata_pipe_1.FilterData,
                equal_validator_directive_1.EqualValidator
            ],
            exports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                growl_1.GrowlModule,
                progressbar_1.ProgressBarModule,
                ng2_imageupload_1.ImageUploadModule,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                teach_nav_component_1.TeachNavComponent,
                control_messages_component_1.ControlMessagesComponent,
                filterdata_pipe_1.FilterData,
                equal_validator_directive_1.EqualValidator,
                dialog_1.DialogModule,
                ng2_file_input_1.Ng2FileInputModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTZDLGVBQWUsQ0FBQyxDQUFBO0FBQzdELHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHNCQUErQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ2hFLHFCQUFzQyxlQUFlLENBQUMsQ0FBQTtBQUV0RCx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyxnQ0FBZ0MsaUJBQWlCLENBQUMsQ0FBQTtBQUdsRCxzQkFBMEIsZ0NBQWdDLENBQUMsQ0FBQTtBQUMzRCxpQ0FBOEIsNEJBQTRCLENBQUMsQ0FBQTtBQUMzRCwyQ0FBdUMsOEJBQThCLENBQUMsQ0FBQTtBQUN0RSxpQ0FBOEIsNEJBQTRCLENBQUMsQ0FBQTtBQUMzRCxtQ0FBZ0MsZ0NBQWdDLENBQUMsQ0FBQTtBQUNqRSwyQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsZ0NBQTZCLDZCQUE2QixDQUFDLENBQUE7QUFDM0Qsb0NBQWdDLHdDQUF3QyxDQUFDLENBQUE7QUFDekUsK0JBQTRCLDRCQUE0QixDQUFDLENBQUE7QUFDekQsZ0NBQXlCLHlCQUF5QixDQUFDLENBQUE7QUFDbkQsZ0NBQTZCLDZCQUE2QixDQUFDLENBQUE7QUFDM0QsNEJBQWdDLDRDQUE0QyxDQUFDLENBQUE7QUFDN0UsaUNBQThCLDhCQUE4QixDQUFDLENBQUE7QUFDN0QsMENBQTZCLHVDQUF1QyxDQUFDLENBQUE7QUFDckUsdUJBQTJCLGtDQUFrQyxDQUFDLENBQUE7QUFDOUQsK0JBQWlDLGdCQUFnQixDQUFDLENBQUE7QUErQ2xEO0lBQUE7SUFlQSxDQUFDO0lBZFEsb0JBQU8sR0FBZDtRQUNFLE1BQU0sQ0FBQztZQUNMLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRTtnQkFDVCxnQ0FBbUI7Z0JBQ25CLHNDQUFpQjtnQkFDakIsZ0NBQWM7Z0JBQ2QsOEJBQWE7Z0JBQ2IsZ0NBQWM7Z0JBQ2Qsa0NBQWU7YUFFaEI7U0FDRixDQUFDO0lBQ0osQ0FBQztJQTFESDtRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxxQkFBWTtnQkFDWixxQkFBWTtnQkFDWiwyQkFBbUI7Z0JBQ25CLG1CQUFXO2dCQUNYLGlCQUFVO2dCQUNWLGtCQUFXO2dCQUNYLG1CQUFXO2dCQUNYLCtCQUFpQjtnQkFDakIsbUNBQWlCO2dCQUNqQixxQkFBWTtnQkFDWixtQ0FBa0IsQ0FBQyxPQUFPLEVBQUU7YUFDN0I7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osa0NBQWU7Z0JBQ2Ysa0NBQWU7Z0JBQ2YsdUNBQWlCO2dCQUNqQixxREFBd0I7Z0JBQ3hCLDRCQUFVO2dCQUNWLDBDQUFjO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AscUJBQVk7Z0JBQ1osbUJBQVc7Z0JBQ1gscUJBQVk7Z0JBQ1osMkJBQW1CO2dCQUNuQixtQkFBVztnQkFDWCxpQkFBVTtnQkFDVixrQkFBVztnQkFDWCxtQkFBVztnQkFDWCwrQkFBaUI7Z0JBQ2pCLG1DQUFpQjtnQkFFakIsa0NBQWU7Z0JBQ2Ysa0NBQWU7Z0JBQ2YsdUNBQWlCO2dCQUNqQixxREFBd0I7Z0JBQ3hCLDRCQUFVO2dCQUNWLDBDQUFjO2dCQUNkLHFCQUFZO2dCQUNaLG1DQUFrQjthQUNuQjtTQUNGLENBQUM7O29CQUFBO0lBZ0JGLG1CQUFDO0FBQUQsQ0FmQSxBQWVDLElBQUE7QUFmWSxvQkFBWSxlQWV4QixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0Zvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0pzb25wTW9kdWxlLCBIdHRwTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtJbWFnZVVwbG9hZE1vZHVsZX0gZnJvbSBcIm5nMi1pbWFnZXVwbG9hZFwiO1xuXG4vL1ByaW1lTkcgTW9kdWxlXG5pbXBvcnQge0dyb3dsTW9kdWxlfSBmcm9tIFwicHJpbWVuZy9jb21wb25lbnRzL2dyb3dsL2dyb3dsXCI7XG5pbXBvcnQge0hlYWRlckNvbXBvbmVudH0gZnJvbSBcIi4uL2hlYWRlci9oZWFkZXIuY29tcG9uZW50XCI7XG5pbXBvcnQge0NvbnRyb2xNZXNzYWdlc0NvbXBvbmVudH0gZnJvbSBcIi4vY29udHJvbC1tZXNzYWdlcy5jb21wb25lbnRcIjtcbmltcG9ydCB7Rm9vdGVyQ29tcG9uZW50fSBmcm9tIFwiLi4vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnRcIjtcbmltcG9ydCB7VmFsaWRhdGlvblNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy92YWxpZGF0aW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7YXBwUm91dGluZ1Byb3ZpZGVyc30gZnJvbSBcIi4uL2FwcC5yb3V0ZXNcIjtcbmltcG9ydCB7VGVhY2hlclNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy90ZWFjaGVyLnNlcnZpY2VcIjtcbmltcG9ydCB7VGVhY2hOYXZDb21wb25lbnR9IGZyb20gXCIuLi90ZWFjaC90ZWFjaC1uYXYvdGVhY2gtbmF2LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtDb3Vyc2VTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvY291cnNlLnNlcnZpY2VcIjtcbmltcG9ydCB7RmlsdGVyRGF0YX0gZnJvbSBcIi4vcGlwZXMvZmlsdGVyZGF0YS5waXBlXCI7XG5pbXBvcnQge1N0dWRlbnRTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvc3R1ZGVudC5zZXJ2aWNlXCI7XG5pbXBvcnQge1Byb2dyZXNzQmFyTW9kdWxlfSBmcm9tIFwicHJpbWVuZy9jb21wb25lbnRzL3Byb2dyZXNzYmFyL3Byb2dyZXNzYmFyXCI7XG5pbXBvcnQge1dlYmJvYXJkU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL3dlYmJvYXJkLnNlcnZpY2VcIjtcbmltcG9ydCB7RXF1YWxWYWxpZGF0b3J9IGZyb20gXCIuLi9zZXJ2aWNlcy9lcXVhbC12YWxpZGF0b3IuZGlyZWN0aXZlXCI7XG5pbXBvcnQge0RpYWxvZ01vZHVsZX0gZnJvbSBcInByaW1lbmcvY29tcG9uZW50cy9kaWFsb2cvZGlhbG9nXCI7XG5pbXBvcnQge05nMkZpbGVJbnB1dE1vZHVsZX0gZnJvbSBcIm5nMi1maWxlLWlucHV0XCI7XG5cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBIdHRwTW9kdWxlLFxuICAgIEpzb25wTW9kdWxlLFxuICAgIEdyb3dsTW9kdWxlLFxuICAgIFByb2dyZXNzQmFyTW9kdWxlLFxuICAgIEltYWdlVXBsb2FkTW9kdWxlLFxuICAgIERpYWxvZ01vZHVsZSxcbiAgICBOZzJGaWxlSW5wdXRNb2R1bGUuZm9yUm9vdCgpXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEhlYWRlckNvbXBvbmVudCxcbiAgICBGb290ZXJDb21wb25lbnQsXG4gICAgVGVhY2hOYXZDb21wb25lbnQsXG4gICAgQ29udHJvbE1lc3NhZ2VzQ29tcG9uZW50LFxuICAgIEZpbHRlckRhdGEsXG4gICAgRXF1YWxWYWxpZGF0b3JcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBIdHRwTW9kdWxlLFxuICAgIEpzb25wTW9kdWxlLFxuICAgIEdyb3dsTW9kdWxlLFxuICAgIFByb2dyZXNzQmFyTW9kdWxlLFxuICAgIEltYWdlVXBsb2FkTW9kdWxlLFxuXG4gICAgSGVhZGVyQ29tcG9uZW50LFxuICAgIEZvb3RlckNvbXBvbmVudCxcbiAgICBUZWFjaE5hdkNvbXBvbmVudCxcbiAgICBDb250cm9sTWVzc2FnZXNDb21wb25lbnQsXG4gICAgRmlsdGVyRGF0YSxcbiAgICBFcXVhbFZhbGlkYXRvcixcbiAgICBEaWFsb2dNb2R1bGUsXG4gICAgTmcyRmlsZUlucHV0TW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBTaGFyZWRNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgYXBwUm91dGluZ1Byb3ZpZGVycyxcbiAgICAgICAgVmFsaWRhdGlvblNlcnZpY2UsXG4gICAgICAgIFRlYWNoZXJTZXJ2aWNlLFxuICAgICAgICBDb3Vyc2VTZXJ2aWNlLFxuICAgICAgICBTdHVkZW50U2VydmljZSxcbiAgICAgICAgV2ViYm9hcmRTZXJ2aWNlLFxuXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19
