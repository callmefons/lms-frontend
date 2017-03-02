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
var teacher_1 = require("../models/teacher");
var router_1 = require("@angular/router");
var teacher_service_1 = require("../services/teacher.service");
var auth_service_1 = require("./auth.service");
var validation_service_1 = require("../services/validation.service");
var SignupComponent = (function () {
    function SignupComponent(authService, teacherService, formBuilder, router) {
        this.authService = authService;
        this.teacherService = teacherService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.defaultImage = "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";
        this.teacher = new teacher_1.Teacher();
        this.image = '';
        this.resizeOptions = {
            resizeMaxHeight: 150,
            resizeMaxWidth: 150
        };
        this.message = {
            title: 'ลงทะเบียน',
            content: "\u0E01\u0E32\u0E23\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19\u0E40\u0E2A\u0E23\u0E47\u0E08\u0E2A\u0E34\u0E49\u0E19 \u0E42\u0E1B\u0E23\u0E14\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E43\u0E19\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E41\u0E2D\u0E14\u0E40\u0E14\u0E23\u0E2A\u0E17\u0E35\u0E48\u0E04\u0E38\u0E13\u0E43\u0E0A\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49.",
            button: 'ต่อไป'
        };
        this.display = false;
        this.createForm();
    }
    SignupComponent.prototype.createForm = function () {
        this.userForm = this.formBuilder.group({
            'email': ['', [forms_1.Validators.required, validation_service_1.ValidationService.emailValidator]],
            'password': ['', [forms_1.Validators.required, validation_service_1.ValidationService.passwordValidator]],
            'password_confirmation': [''],
            'name': ['', [forms_1.Validators.required]],
            'image': [''],
            'title': ['นาย'],
            'position': ['ครูอัตราจ้าง'],
            'id_card': ['', [forms_1.Validators.required, validation_service_1.ValidationService.isNumber, forms_1.Validators.minLength(13), forms_1.Validators.maxLength(13)]],
            'phone': [''],
            'address': [''],
            'teaching_level': [''],
            'institution': [''],
            'province': ['']
        });
    };
    SignupComponent.prototype.reset = function () {
        this.createForm();
    };
    SignupComponent.prototype.selected = function (imageResult) {
        this.image = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
    };
    SignupComponent.prototype.showDialog = function () {
        this.display = true;
    };
    SignupComponent.prototype.onSubmit = function (teacher) {
        var _this = this;
        this.image != '' ? this.image = this.image : this.image = this.defaultImage;
        this.teacher = new teacher_1.Teacher(teacher.email, teacher.password, teacher.name, this.image, teacher.title, teacher.position, teacher.id_card, teacher.phone, teacher.address, teacher.teaching_level, teacher.institution, teacher.province);
        this.teacherService.addTeacher(this.teacher)
            .subscribe(function (data) {
            if (data.status == 'success') {
                _this.showDialog();
            }
        }, function (error) { return console.log(error); });
    };
    SignupComponent.prototype.redirectPage = function () {
        this.router.navigate(['/auth/signin']);
    };
    SignupComponent.prototype.cancel = function () {
        window.history.back();
    };
    SignupComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-signup',
            templateUrl: 'signup.component.html',
            styleUrls: ['signup.component.css'],
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, teacher_service_1.TeacherService, forms_1.FormBuilder, router_1.Router])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRoL3NpZ251cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyxzQkFBOEQsZ0JBQWdCLENBQUMsQ0FBQTtBQUMvRSx3QkFBc0IsbUJBQW1CLENBQUMsQ0FBQTtBQUMxQyx1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN2QyxnQ0FBNkIsNkJBQTZCLENBQUMsQ0FBQTtBQUMzRCw2QkFBMEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUUzQyxtQ0FBZ0MsZ0NBQWdDLENBQUMsQ0FBQTtBQVVqRTtJQVdFLHlCQUFtQixXQUF3QixFQUFVLGNBQThCLEVBQy9ELFdBQXdCLEVBQVUsTUFBYztRQURqRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUMvRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFWcEUsaUJBQVksR0FBUSwwNFRBQTA0VCxDQUFDO1FBRS81VCxZQUFPLEdBQUcsSUFBSSxpQkFBTyxFQUFFLENBQUM7UUFDeEIsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixrQkFBYSxHQUFrQjtZQUM3QixlQUFlLEVBQUUsR0FBRztZQUNwQixjQUFjLEVBQUUsR0FBRztTQUNwQixDQUFDO1FBUUYsWUFBTyxHQUFHO1lBQ1IsS0FBSyxFQUFFLFdBQVc7WUFDbEIsT0FBTyxFQUFFLHNsQkFBdUc7WUFDaEgsTUFBTSxFQUFFLE9BQU87U0FDaEIsQ0FBQztRQWlDRixZQUFPLEdBQVksS0FBSyxDQUFDO1FBeEN2QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQVFELG9DQUFVLEdBQVY7UUFFRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ3JDLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLGtCQUFVLENB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QVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ3BDLENBQUM7O3VCQUFBO0lBZ0dGLHNCQUFDO0FBQUQsQ0EvRkEsQUErRkMsSUFBQTtBQS9GWSx1QkFBZSxrQkErRjNCLENBQUEiLCJmaWxlIjoiYXBwL2F1dGgvc2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtUZWFjaGVyfSBmcm9tIFwiLi4vbW9kZWxzL3RlYWNoZXJcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1RlYWNoZXJTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvdGVhY2hlci5zZXJ2aWNlXCI7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7SW1hZ2VSZXN1bHQsIFJlc2l6ZU9wdGlvbnN9IGZyb20gXCJuZzItaW1hZ2V1cGxvYWRcIjtcbmltcG9ydCB7VmFsaWRhdGlvblNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy92YWxpZGF0aW9uLnNlcnZpY2VcIjtcblxuZGVjbGFyZSB2YXIgJDogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtc2lnbnVwJyxcbiAgdGVtcGxhdGVVcmw6ICdzaWdudXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2lnbnVwLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU2lnbnVwQ29tcG9uZW50IHtcblxuICBkZWZhdWx0SW1hZ2U6IGFueSA9IGBpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBSllBQUFDV0NBWUFBQUE4QVhIaUFBQWRiRWxFUVZSNFh1MmRlWHdVVmJiSGY5V2RSYkpCVUlRSUNDUVFuNGlBb09LNEFEcWlJeUNPWUFpQ0M2T2djV09UUmYyd1NPQU5nc01pK3lhYkNBUWVLSnZPQ0Nvd2lPSWdzamlnSVFTQ1FGaGt6UUxadXQ3blZLZWFTcWU3Njk3cXF1cnEwUFVIUy9kZHovMzJ1YWZPUGZkZUFhRW5KQUVESkNBWVVHYW95SkFFRUFJckJJRWhFZ2lCWlloWVE0V0d3QW94WUlnRVFtQVpJdFpRb1NHd1Fnd1lJb0VRV0lhSU5WUm9DS3h5QmtRUkFvNyt0VG9RM2hCQWRlbGpFWTBoQ3MxOFlpSmlLK3ppQlNtTjNYWWNaVVhuaEVhZlg3emUwYm91d1JKL1Q2bUdVdHdHRWEyZDRBZ0REQUFoQnhBL2d4TzhvMmg0OWhkQjJGSnFRRDJXTFBLNkFNc0Zrc1AyRndCcEFCb0VaalRFN1JERVJRaXpiVUg5MHpsVkdiUXFDNVlFVTVId09BUmhTdUJBVXNOWDNBNmJPQndOejM1WDFTQ3JVbUNKWXZzd0hLM1ZEQTVoR2lBOHFEYXMxdnBlbklKd1lUcnFaMlFMQWtScnRZMi9OVlVDTFBISVgydkFFVEhLSUZ1Slg2cis1aEFjZmREbzdPSmcxbUpCRFpaNExEVUpKZUtiVlFhb3lrQytDMXZSN0dCOHl3eEtzTXFCV2hSODA1MVdWU1pPZ2ExNGREQUJGbFJnbFU5NTY2OGZvTnhCRktjZzhjeVFZSmdpZ3dJc3lYbVpuVG9Nd0RpdHYva3FsYy9tYUkrR3E3WloyY2kzUEZqaWtaU1djTmcrdDY3TElGRElrcXVpK0VtclRvK1dCY3ZwaDdJdGhJRFVRQTFka05UN0xoSXp4bHROZTFrU0xERXJwVEVFMithUWxtSkZXOXlPQ1BFeG9mNnFLNnc1akU1bktiQWtXK3BJeWtzUWJmT043bmlWTE4vbXVFdG90R3FQRmZwbUdiQkNVNTl1T0ZoaWFyUUVXT0xScmdrb0MvOCtOUFhwQlZmZ3A4YUFnMVZ1VHgzU1M2U2hjbHdTeUVHRTQvWkEyVjBCQlNzRVZjV2Z3ZVg4TWh3OFhDaDlHQnR0UjlQR1VmNytUbkpnSzJvWkNKZEV3TUFTczFOZXRxS1JmankzQ0NmT0ZMc0dkT2VleTlLLzI3U00wM1BBcGJJSXBNM2ZYY0NtN2VmeHc5N0x5TXN2dXdhU0NNVEcydEhoZ1pybzkwSmQxRXVJMUE2WjZHZ2lORjZWcGIwQS9wd0JBY3RLVU8zY213ZUM1MkJXUWVYQnBlaGt0d0FXRWhoOVJBUGRwa1VjN21zWmgwY2ZpRWRjakoxTCtsTVhuOERDMWJuSXl5dkRyWFZqVVhCVlJGRnhLZkx6cnlJc0xBeWxwYzVnVTZvL0x0YU9XZW5KVWwyYUg1UGhNaDBzSzBCMUlLc1FpMWFmd2orM25VTkJvUU9DVEV1NU5PeDJPOHJLRk5yRHcyZ1NYRXJoZFhnZ0hoMGVySW11ajkva2MreXA3c0hqc25EbW5BTU5HdGJIM24wZUZJa0lpTUsxOG1XNFBwM1UxTC9wMFVTNFRBVXIwRGJWbW4vOWdZa2YvNDVUZnppbk91N091OVBramxENTlQVzNiZ25vM2ExT0pTMjIrcDluOGY3VW95aHoyRkZjWE1LbmZFVGc5c1pSV0QvdlRyNTg3cWtqSEZGbUdQVGNzdFhhcTBCQ3BRUktsdzZUUmlrbjA3MDhtYjNZR0R0R3ZOSFFwY0UyYmIrQTEwWms4dE9zaEZrRXhnOUxSTGUvMU5JNkRKVFBsTGRGWGVTczFzdHlQOVZKdFhSNmYwL1R6ckR4aDNFd3F4QmhFWGFVbHZpZTNqVFY3elp0U1haUitSODB4ZDZlRklXUmJ6VkVuL2QrUTJtWmdLSWk3UnQxYUVxa0tYZjIyR1JOVFZWa01od3V3OEdTUE9yRnRvTm1Pei9KaGhvN0l3YzMxNHJGbWJONXpBTkJnMGRBcU0xNmFnVktjRGtBd1FhRWg1T1liU2pSQ25aNVkrZ3Zla240ZWQzZGF0V3JmeThpQTBrWnp4cTFlRzBvV05MYTMrSFU1V1pHS05BclBFMDUrMzRyUUV4c0hNNmVkZTRsOWZaSWIzMEtRMWw5Uk5SVHlGREtta3MyNlBRUzlycTVkL3BueE10ZEVCeDloTVJWSDZ2M2lEK0ZYbjMxV0xQWmI0QTA5ZlVjZUFBMjJKQjNwUXlpdytGWjgzaVl2dVFPdUtBZ3pTVlBhOFFlcDZUYzRlTE43MnBQdVFaVi9uLzJtR1IwZURDZWY3UTk1VERvVFpGVFhPeDlNZHRZSjZoUzN2d3ZTaDFBR2YzaFMwc3BiQ0NYUFVTZjZTeU5DcER5bE8xakhpWU4yKy9GdXVqZnV4NzdZUGhPYVlpOXhkTmQ1bzZZYlZjUlZOM2UrQVVsSmV6YjhhU3g4OWVRWXBHSWhqcThaWkYvQk4wZXZ3a1Qza2xpcVowdGpRSDJsakZnSGU0KzJhd3RXUVJWYXI4RHVIS1YvNDFQTnRUWnBHK05WTlRtTmkxaXNXeEtVMzBiSkRxNkNvMVhmYVpYb2JxRFplWVVTSVo2cjBHL0lpdW5DQ1VsbkE1SHZTU29ZemtzTHhLR2dVWDkwTkY1cWl0WTVidHBqcGpsV3FDM3YyMjdDbEJVZEczUldNZHhOcmNvamluejN1WUdhQ3lwdCtJVUlXbmxRRDA2cmk5WTJhbDlJR0tlSGcxVEsrT2pSY2RCQzdsYTM3YWNjdFRmWUZkcnQ4ZnZPZHZ4NlAyNk9FazlOMVdudDBUZHdISnVKbzMwN1RUU0pQWEttU2kwcFdPZi9TaTh3bTlYNmRRRVhZdmhzZldJd1FsRC9WN1c4ZFgrSENSbU5QTFhjYW9mV0ZtcEs4eHloQTc5NEREV2ZuMGVwYVhsa1FtNkRyTzFDd3NMRS9Eam10YmNZVHBjdmRMQmtOY0ZMRE8xMVE5N0xxUFh3SVBPWlJjMzU2Rlg0WlV2R3JzNnEwdXZ1WVpLdDhRdnB5VGczZGR1MWEwOHJ3VWxuZzczWnl1L0xpSVdUWFF2RUZUN013dFJVRmpxOUdlcTlJQVpQdU9IeWp2M2pEK1EyamRHNEx0VmQ1blRVaisxbHQ5Z21hbXR5R2ZWNVpYOUNBKzNvNlM0VEIwcWRlN01HU1EvYXlIdFhLdG1CUDY1c0xteFUyREZkdnBsYS9rUGxvbmFpbXdyaXExeWFTbGZTeC9sYjMxK3ZUWDZDUVJ2ZG5jL2xpQUlzTnNFTktnYmlWWFQ3ekFUS21mVGJjTERRcU1WVzNqN3dUQ1IrQzdTVEcxRnp0QjJQWCtHM1I2Qmk1Y3E3eVJYeHFhelRKRmFoR1ZtbnBvMTQzSHUzQVVwYW5UWjVLYm1RK1hzckdhdDVaZkdFZzkzZnhjUS9tNkd3TWxvZjI3UVFkU3FGYThhQ21OR2U0eXNvOW9ORWJEWkhCalF1eTcrOWt3ZEk2dFNMOXRlMmtwb3VQcG45WVFWVTJnR3E5ekw3anVNZ0xjMVB0S1RRM1Rha2hNNmxtak5va2p6VnJ2QmhoMnJXZ1ZLUzFVVWpJZ01vWEZHRDE1cGFRZkxlU0tNYVR1WTA0Wm5Zdk1PVS95dnZESTBKTDF1d1h4NnRFN0RHcUlmWUpubkVDWFozTlZsbDdTaDArVSs0RndHMFVPK1pwWXgzbGp2T2w5WE5MZ2VOSUVsbmFlZVhkdlVjSUxHait5MHp0b2UzN0JvU3QzMU1aMWpyalMxUXM0a2JoZVNWajdFVTRRMnNJNzBhQStIK0MxUFJmNm1sY0JTUEZvVlZuUjBOQW9LQ3NDeUtkWGZOdnVUMzdnSUJvMnRzcGZjSWpSY2s4dWFXeHRZaDd2LzIreVRpd2tzclRESndyQ0hoYUZldlhxSWk0dkQvbjM3SU5oc1VseThsUjd5VzVVNVJOQytSRjEyNCtqVk9RRjloY1FNNWdQeHVNRUt4RFJJc3BIQWNsLzY0Q1R0NXRxMXNYVDVNdVRuNWVQNVhyMmt2Nk9pcXVIS0ZjdWNzSWlZNkVqa0Z4UkpPR1I5MDBZdkxIUW9oMjg2NUFmTDVMZEJXU0p0bjkyRGs2ZUtLaXpqOEt3RHhzYkdZZlhhenhBYkd5c1ZtZmxiSmw1UFMwTkJmajdDSXlKUVVteU5ZTUVhTmFKdzhhTHpLQ05yZ1FXQVkyR2FIeXdUZy9tVVA3T2VBdzdneDMxNWlJdTVBWmZ6cnpxblJVYU41UTZWWEM3Qk5YVHdZSncrZGNxU0x3YVdBNHNqQ0pBZnJBRFlWd1NDN0NDTnJ4NkpDNWVjVXdYTDA3QmhROHhkOExGTFU3bm55Y3ZMdyt1dnBpSHIwQ0VuWExieWVCeVd3ZzFPWXlsZkZ2V1Z3ODdpQWl0UTloWDFpVTVxR1RZaG0wdXpQTkdwRTBhK1A0cHArTWU4UHhwZmJOd29sYTg4UW9ncHM4Nko1Q2wreTZjdC9UdHdUZWQyMGRxaGtKUkJWeHVyUG54Z0JjaStvbDdRSW5TckxydFVPMFFKYnIyMUFkNGEwQjhQUHNSM1plSEc5UnN3ZWRJa3llN2lzZCtZR3VXV3lOZUxpUHlkNWFaQzZnT2pGNTRQckFENHI1VGpJUy9yUkViWVVVVHhXRzVQMjNZUFkvaW80VjZuUFJZQXlPNGFNM3EwTkRVYURaZXlQUlhNeGZML1dCSXNSbjhXSDFqWjNUK0NLUFJqR1NBajBpejh2MVA0MzVsMGgzZmxDRDc2YU9iczJXalZ1cFhmVlpQZHRXTFpjaXlZWCs2MjBYRjZWSU5WM3UxY3QwNGt0aTF2NlhkZmRDK0FNVWFMRDZ3QUdlNnljTlNtd3hrNmdTWFhsM3N5VjlKZVArL2U3ZnhJQk94aDZzZEkranVZaG01SzliZHhqQVk4SjFpcDdJY2orTnNCTC9tbEtOS3YvZ0JGVjRxSzZENzY1OHc1K21nczk2cko5cG8zZDY3VExhRTQ4TFphVkRWYzVYQ3VxbWtydVY0U2N1K3VkVERpelFZR1NkR1BZZ1Z4cXBDNHNyOWFDY3hnbFIvMDRmVGNCZkNoUFlYdGUrMnBaUDhZQ1piY1hYZkFaTWhvL1RFcU9ncC9uRDNyVXpLc1lGRWhsb3B1Y091VmtKU2h5bzFxQXRldnlNUU5xV3Jja3JPVWp0Rld4clBUb00yWk5RWXQ3bmxjTGJ2ZjN4TmdHemRzdURaRktrcThKZUVXeE45WUU0V0ZoVGlTblYycExrYWZMaXpudzFMMkpESERwcmFobFFNczh5TWF2QkdnM0Z2b0FwL0FtamtjTGU3dDRqYzRyQVdRRGJaODJUSnMyN3JWTlUyNjU1VzBsTHliWHlEL3F3ME9VWDNoMjVKdmhITG5iRVh4YXJkZEJDVlkxRC9aMWdva1dFcUlkdiswRzF1Ky9WWnlVN2lNZlcrRXF1d3VhdFlrR212bk5HUGwyL3gwVlJrc3NyVWVmczVwYTBtUENNdzJXV1A1R2xIeWgrWG41eVAzNUVtY1BIbnR3T2hGQ3hiQVFVZFlsc09sL0dYTHJvWWhmZXNqcmVjdDVnUERXbU5WQm90a0lFVThuQzVDWklRTlJjVU96SnVXaG1iM3ZWUkpQT1NYa3FNYVdHVm5WTHI3N3I0WHpabzF3L3hGQzBCYWprSjJ2dDYwR1R0MzdzUzVQK2h0RjBodVZBMHJQZ3JBUGtMV1R1c0tWb0NpR256MWxRN2xIemNyQjhkeWl5U05OWDlhYjl6eHA5Y3JaQ0ZEZTJ4Nk9qcDI3b3dSbzBheWlzNW5Pckt0WW1Kak5NSDZwM3Z1UmQxNjlkRnZRSCswYmRlMlFqMFp5NVpneXVUcDBtZldDazEyRXdlRGs1VGR4Z3F3MTkzYlNOT1UyS0gzWGhRWGk1V01kd0tnNjFOUHViSisvNThmL1FacjI1YXRHRFprQ0I1cTJ4WVRKdjZEdXp6U1dQTGJyQ2ZZdjFpL0JtUFNQN0JlQktteXA5Y0RXTlRmL3VsWjJQRHRPVXdjUHhBUC9QbFpsd2pJem5ueHVlZWsvOWV1VXdlZnIxL0hEWUo3aHFlN1BJVlR1Ym00cTFVcnlTSEwrNURHb3FkanAwNVNOTVg0RHo5RTIvYnRLaFRUdGZNanlEMmRiNzFBUDdtVjF3dFljcXhXMzVlNjRxWFgzcWt3U0g5OXNvdmtDbmlwVHgvMGZmVVZYZzRxcEZlQ21wS2Fpa0dEMytZdVR3YUx0Q2UxclZQbnpwWGE5VmJmYnZqMTBFbnNXYS9ERFJUY0xXVEljTDJBSlYyQU5ESVRuc0NpNlRBM04xZVh4V2w1YW8yT2ljRW5uMzZLaEZzU0dFYWhZaElsV0JSZ1NKclBIZmgrZlRxaWVuU1pIbmZtY0xlUEtZT3VZQVU0Wk1aWGgrVnpIVHlCeFNTbzhrUXNiNDlrWTkzVnVwVW13NTJxVVlKRkx4YXRXcmV1QU9qNW5DL1I2WmxSV0RycGR2OHV2dVRwT0c5YWhoQmxkdU05Q01CcTFUSVpNK1l0NVJXVGxIN1NQeVpLQVg0akdDTk9OVldpQUt0N0QrZHhDTzNhdDBlVDVDWVNxTC84c0FDRDNwMkhOczNqckt1dHFORzZ1aHVDQUt6V0xSdGcrcnhWbXNhY05JbmVZVGVlR2tMMStGcU0vcCtrZ0I1YnhDYTc2d1VzWlp5V0ZwZkN2RGx6Y1NnelU1UDdnRzBrbktuQ1N3L2g3ai8xa3Y1OVQ0dWErTS9lOHhXeXY5aTFqblJIRHUvOTBqeHQwQ1d0cm1BZDdYWVh5c0xLSTk1MGFaNnVoY2hiOEhuQkdqTTZIWm0vL1NhNURvejJ6aXZCb2tWbU92cVNMam1uYU5GNnRTT3R0bkhDKy9nd3hMMXoyRmptbmVPdWhUaDVlWWRuT2lPb2FGNGE4UFlndzZGU2FpeWE3amI0ZTdlekZpSHBsRWZmZUN5NjFESTdWVDNlUTZmRzh4WWpiMmdkTUdnUVVwOVZQeWNzWS9rS2JGaS9IcDhzKzVTM0tzM3BaWTFsdVFNL2VIb2tZb2ZRT09NQnRTek1Hb3NLRWc4SFBqVFpXNGZHVE0vQjRqV25KSTgyeTV0ZGgwZitqSmlZR0h5MmJxMmFqSFQ3L3V5eEhlalNiUURJbHJKazJERkxUL1VPVFpiQXN1aDZJYlZOM3RCYUp5R0JDWlpISDM1RWNpODBTVTVHbjFkZXFiUWd6Q0pqM2pUN2RxN0NxMjkraUxkZTBQVWlTOTVtK0plZXdUbEtGZkJwTEF0R09NaFNrcytBcC8rdldidFcxU3N1UnozSStSczNhV0w0dExoejB5UU1lRytGdFoyZmF0Z3hIbmJMQjVhRmZWa2tqNVpQN2tKK1FSbUdqeHlKVGs5MlZoT1JGQSsxY2YxNmFjbUh0SlllZXhKOVZmckpqRDZZdVdnZmRxKzcyL291Qlc4ZFlYQTE4R3VzbzEwVFVCWitMUnhTZGVqTVRTRHZsTllhMG1KMGEwZjBmeHdIRGhkYWN5TXFhK2NaTmxKd2cyVjFBOTYxVXhyQVY5OThiWW9MZ1hVODZJM3dxYWRmUXB2bXNmcmU1OHphQUgzU3JSS1NNcnF6Rk1VMUZWcmRnRmQ2NEZuZERpeEMwaVBOeGFQTDhFVEtGTXhLVDBhSEIrUDFLTkw4TWpoT1QrWUh5K0oybGp3ZDFrbW9nOC9XK1IvWXA5Zm9yVnZjRjlNVy9tTGRHQ3VXampJZUNLSnRLclRReGxWUHNuQ2RvMFc3aVQxRVo3TElUKzgwTnNkNTlPN1pGYmNuUlFYek5BZ1dqN3NzTzI2TlpYVTdpOW9uTCsrdytyVDhBWW5pc3laTm5JaFpjK1o0ZFhGY09yb1FmMG1aWmUzZHpXcENZSFNNK2dtV2VaY3pxZlhYMC9kS0k5N2Q5ZkR4dlBuU29qUEZRWFhzM0VsTDhhNDhreWRPd3NvVkszeHFSa0c4Z3ZFamV1SkU3bVVzbTlMVXIvb0NtcG5SZitVZldBRTgyWTlWdUxMV2lvbU54WnExbjd2ZUVDbWdiMVZHaGxRTWVkM0p5T2YxWDIzYnVnMlRKMDRFUlp3T0hEVElwOCtzOFBBby9MbkhsOEh0RkNWaGNaeVlyTW5Ha2dkV3pFbzlCZ0gxV1FmYTdIUnlIRHpWUytHL00yYlBjaldCWXRjSmpIOXYyK2I2ak5LUTk1MHVGL0Qwa0pham5jMlptWm5Jejh1VDFpVEpxZW9yN3IxYThSWU1HVG9PbC9KS2cxdGJjVTZEL29GbDRlVWRHUXpsaldHZWR0WEk1eTM0T3RSRExvdTJqeVVuSjB0VEtHM1hVb3Zkb2lsdzYrbzBqSm1laVExejd3eWVXQ3RQdnlxR0dIZjNiSnFNZDhtQXQvamJJYldSL0ZxZCsrNlh0dUhUbzdiVUkrL29VUXFKZDVxVTg1N2NQeDY5KzMyT2ZpL1VDL3hsbHY1T0Y0emVkbVUxbXNHUzRNcEsvUTRDN3ZlMzNVYm1wOFhwbmdNUFNHdUk5QXg4KzIxMDc1RnFaSlU0dG44Qit2U2JodzczeHdlMWUwRVNFdVBSa0xwcExLZldzczZaV2I1SWtiZUh5V24wUE1mQnZkNGovOTJJVjk4Y2k3cTFJNE02U3RUVkw4WkZaMzNCb3FqU3c2azVWamJpNVE2N2E2NkVoSnN4ZkZRNjl4dWhMNEEvV3pvV0V6NWFoNkRZYWNPaXN6VVk3WEt4ZmsyRndhUzFxSzBFVjlxSVRKZk5SWitSOWtydDBRUEp0eVd6aU5wam10Mjd2c2ZpT1gvSGozdE9TNmZFREgrellmQ0d4U2g3eUxHRW82dkdrc0N5ZUN5OGU0ZkpvS2V6SGlpTVdmbVF1NEhPVVhpb1hWdlZOejdLUno2czdWdS94aGZybG1IWHowZWxvb0k2TXRSZFVJeXg3ZDUralg1ckxBbXVJSEE5dUF1QTdLNnhNM0x3NitIS0IwR1Q0NVRPVkNDZlZrSkNBbWhwaUI0NkF2THk1Y3ZTY1pDN2YvckplWkVCZ0h0YnhFcGFxbW5qS00xYXozSVpOYmdZbEgzUUI2d0EzQkd0MTBBUVlGTVhIWmV1ck9ONWFEZHpXTGlBTG8vY2lBL2ZTZUxKYXYyMGZtb3I2cUF1WUVsYUt5dmxhUWkyTmRhWG11Y1cwaFM1Yzg5bEVHaTBpZlQ0NldLY0tMOTRVeFlTYVRIeXp0OTIyMjA0bHYwemxpeGRiKzJUOTdRT2hoKzJsVnlsZm1BNTN4QzNXOTJ2eFNOcmVVdVpwN08xRnN6NkFQTVdyRUZRN3hIMEpBdy8zZ1IxbndybEFrV0x4OFR6UUVWcFpmK1hwOVA3OXY2NERtbHZqSzE2WUhFdU5odHF2Q3NMdC9MZVExNnc1T3RWS0VKaTB6ZGZWOGd1ZzBVZkR1di9LQW91bndHdER6Wk5FdENtUlZ4d3Voc1k5d3l5eUZHM3FkQ2x0WUxZa1Bja01HK0hqZXpldFFOdnZEWUE0ZUhoS0NrcHFaVDFrWWVhNE1WdUNYaWdPZnMxd3l3RFpsZ2FFVHVRbFBHZzJsVW1yUFhyRHBaa3lBZkpVbzhuSVpFUnYrWmZaMEZoTnc1Yk5IN2NuU3VkY3V5KzY0YzJ2STVKVDVmZWZ1TGo0M0hmL2ZkTFJ5RkpkMHNybmxhdG1tUGF1RTZvRmJrWE5zYzUxbkV4UDUzR3BSdlRwa0tYNXJMd2RueHZ3aUNiaXU2ZGRvaVJlS2o5dzlpL1B3c25qeC9EcGN0NWxYWlh6NWcySFo4c1dWTGh0WnFpSjhqUk9uL3VYT2Y5MHVVUFRhVXpaczFDczhRcmlDcmRLcDJUWmFtSFkvY05hN3NOMFZpUzFncWlkVVJxNzlURkp6QjE4WEVNNnY4OFVwNTdTOW9sUFhUd1lNa0xUMTcyemQ5K1UwR21kRnJON0ZtekpXMTJwZERwWkNXQWxpeGRLZ1gvVWY3MDk5OTNYZDVFMzQwWU9WS0s1U0t3b2t1K3RBcGd6SHNGV2FHaWRJYUI1WndTclgybWxpeW9JUk5PNEt2dDV6Rno5bHpYbWlIZGFuL2h3Z1Y4djJPSHg2TzhDYmI4dkh3SnV0ZlQwcVFEUnVoUkJoUkszNzJhNXBvZVpjMGxyMHZlVUxJVE1VVnJJSWdCdWdaU3hPOUlPcDBvQ0Z0S2VhQmhTV3NvV0ZhM3Q4aWVHakxoSkg3WWN3a3paOCtwc0JCTnh4eDFmS0lqUkFHcTU3bVRkbm9qTFUyU3Qvdk9JSGU0NlBzbG55NTFyVWNTVkhGRnl4QlJzcGRsdlBSTm80TWoxSFFiUzFtaFZWMFFROGJuNEt2dkxsZlFWTlJ1K1NRYWxsTnI1SDZTaHBQdEt2ZmpLaWt5OWZsZXZUeHFOVGwvZFBHWGlDcjZRbDl3ZkpWbWdGMmxyTTV3amVXeXQ3SlRhV3RNaW5tUzgxM1QwUEhaK05mMlBNeWNNNzlTeU16UXR3ZGo5KzdkbGV3cVh5WEtkK3hRR2svblJpaS9welNlb0tXcE1mYXF0dVBFdWVTcU1TcVVwdzVUd0xJYVhQSytRMjh4OERRTk5tblNoUHV1SE9YbEFKNEdnZXd0K1pKTWJ5Y1BHZytYK0o2UXRISWNEeVJhMHBvR2xnVFg3eW5WVUdUN0xaQVJwL0lCYlczYlBvRHhFeWRYa2huWlJJL1JNWklldk8yK0JDeGZoK0xyQ0NYMzI4aThuWWhEMjhaaWlsWnJHVSsxUEt1UW1KR3FseFBVVjJXbWdtVUZ1RHEva29YZlQxMlZEZ3p4dElWTEJvdmF5bk1Dc3p6VnFlMEVVbW90WHlmaVZMODZYMitEM2pTb1NIYW1neFZJdUZac2lzUHdjWnNxdUFROC9lcmtLYzM5RGM3WEw1U005NTkrK2tuMTZqcWxyZVhyYWpwNlc3eXhZTFJlcmdoVG9Rb1lXSUdBcXlEaUNUeWVNa2U2YTFEdGJVLzVoa2ZScEhScWphOGR6L0oxYzJyYVNnWlRQbGhYYmJyVnlkNHlIYXFBZ3VVMDZOdUhJYnYyTXFQZkZvdkRXK0EvT1cybFN6RlpMc1IwZHc5UVcyblRSZXZXclNVL0ZZVXJTK2MyOU9zdmVkSTNiOXJFWmV3cndWMjhkS25QalJ6eGhlTVJWblpjelhieThyMzRIaEpYZm1DR1RlWGVnSUJNaGNwR2xHL0dNTXdWNGJEZGlQTlJRekYzN2xJc21EK2YrV1pVMGtLMHBFT1hhSHA2NUl1V0tPejkxdnEzNHVQRkM1azJZVkJadEJ3MFpkSWtxVmcxTzQ2V2YycGNtY29QbGdrdUJVc1o3MTRHU1VCMjkzY0E0ZS84RXZTZDQySzFmaWdKYXlJdHJkQ3JQcytWdTZTVnZ0aXdFVnUzYkhHNUNaeWFGcTU3bmVuL05LVU5HRGlRNmFSbVNxLzAxTE1jYWNtdHRYU01xOUk2SGdIWFdCVzBsODRYUVYySmVCajVrVjJsS3JTQTVTNVVBdTFRNWlIcHFwUXZOMnlzOU9yRGFtTXByd0JtdVZLWTJkYWl0VDk3VVhPaDBlY1h0UUtoVno1TGdhVXc2amY3R3p0ZmFxK0hDMUhEWEhLU3dYSS9MMHVMSUYvbzlad1VlOVc5ZXlvMmZySFJ0VlJEWmJIQ0piOTVzb0JGNWQ1WThMN3ZlQzVCbklwR0t3Y0V3cDd5SkVQTGdWVSsxZmc5TlJKVUJKZjhLQTljWTVsK3ZBR252QmVhUW1sSSt5aWpHMWpoNGdYTHA5YXl3TlRuTGk5TGdpVTNVcVNUQTJIN2h0ZFRUNjZGd3NpT0ZmcXFuSDZVY1ZPOEdrczJ2SlZMTXA3Z29rUFpYdTdieDJ2eHZHQ1JYK3VtL0dzYVdDcVl3b250Uloyc01QVUZGVmd1N1hVazlXV0ltTWNDQWJrV0x0M2dlVUNmNzluTEZSdEYvaWs2NVUvdEFEWDNPdVZwME4xTjRBa3VYNmZheUdDeFRwM1VEbHFnSnMwRnlaWVNYaEFhcmRqQ0lwTkFwTEcweHFwZzJEdURCdWY2OG5tSlFoVE9SWThDL2UzcGNmZFA4Y0lsVDRQZWZHRUUxNWpSb3l2RXZWT284Z2NmVHFnQXNITE5VTTNkb095SDAvWHcwWHRJUFBPaEVjRjVlZ0lZTkdDNVRZK0xQUm4zcEtsSVkvbDYzTU5YZU9DU3AwRlB4MDdLZGJvSDl0SG43blVvM1ExcXF3Qnl1WUxqVXBIZGZ2V1ptclh1M0tBbkFFYVZGWFJnZVFQTTF4VG9ManozSytWWTRaTGZMTlcwRE1FMVplS2tDaHNxbEhVbzRWYTd3OXJ1T0hWQ3NBdHB3UUtVNjRkZ0ZMRm1sVXNHdm1pTFdYb3VlbFFiYjFPZ3A3YlE0S2FQSHUxeUZiREFKZHRGckJkQUtaZHVsSnByeGJMbHFxc0F3UXBVbFFGTDdzaUZNL3YrNWloekRDNnozOEo4U3IrN3dlMExMbm42aW82SjRZb3NkWWVyYmJ0MkVFVlJPZ3JjUGRoUEVJc2NkdkdQSHh4aEVZTnV1dW1PbldiOU9JMm9KMmluUW0vQ3VIZ3hKOTVSY080Vk1TenFuVEtoWmcwMW9iSENKZHRYUEV0Q2N0M3VjTW1meTIrRTlyS1RCMngyMnovaWIyNitVSzI5d2ZKOWxRTkxLZmhMbDdJYU93b3Zwam1FaUI1bHRqcDF2UTBLQzF3eUhLeWVjdmU2bEhCRngwU2pXZE1tZWVrajMxaDBVLzNrVVRWcU5MZ1FMTUN3dHJOS2crVXVoUE5uOTNjV1M0dWVnUzNtS1hkdHBtWnpQZDNsS2FaWUxtK0NKNjIwZXZXR2c3bG5McThkbFQ3aEU5WUJDdFowMXhWWW5rQkRjY2tkb3MxeE94QjJUL2JSMC9WZjd2TjJyTHo1bER6MGRGY08yVVJqMDlNcjJVU2VCbDB5dWxHV0k0cGxoMnoyaUsxbE52dUJZTGVYdE1COVhZUGxTMkNqUnc1OUhuQzRGaHVyeDBWZDdmYjBZNjFpb200NExZWkZWdkI0MnlPcS9WcTlldU1zTFFOUVZmT0V3S3FxSXh2Z2ZvWEFDdkFBVk5YcVEyQlYxWkVOY0w5Q1lBVjRBS3BxOVNHd3F1cklCcmhmSWJBQ1BBQlZ0Zm9RV0ZWMVpBUGNyeEJZQVI2QXFscDlDS3lxT3JJQjdsY0lyQUFQUUZXdC92OEJBakJ5V25uWWZ0TUFBQUFBU1VWT1JLNUNZSUk9YDtcbiAgdXNlckZvcm06IGFueTtcbiAgdGVhY2hlciA9IG5ldyBUZWFjaGVyKCk7XG4gIGltYWdlOiBzdHJpbmcgPSAnJztcbiAgcmVzaXplT3B0aW9uczogUmVzaXplT3B0aW9ucyA9IHtcbiAgICByZXNpemVNYXhIZWlnaHQ6IDE1MCxcbiAgICByZXNpemVNYXhXaWR0aDogMTUwXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHVibGljIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgcHJpdmF0ZSB0ZWFjaGVyU2VydmljZTogVGVhY2hlclNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKVxuICB7XG4gICAgdGhpcy5jcmVhdGVGb3JtKCk7XG4gIH1cblxuICBtZXNzYWdlID0ge1xuICAgIHRpdGxlOiAn4Lil4LiH4LiX4Liw4LmA4Lia4Li14Lii4LiZJyxcbiAgICBjb250ZW50OiBg4LiB4Liy4Lij4Lil4LiH4LiX4Liw4LmA4Lia4Li14Lii4LiZ4LmA4Liq4Lij4LmH4LiI4Liq4Li04LmJ4LiZIOC5guC4m+C4o+C4lOC4leC4o+C4p+C4iOC4quC4reC4muC4geC4suC4o+C4ouC4t+C4meC4ouC4seC4meC4geC4suC4o+C4quC4oeC4seC4hOC4o+C4quC4oeC4suC4iuC4tOC4geC5g+C4meC4reC4teC5gOC4oeC4peC5geC4reC4lOC5gOC4lOC4o+C4quC4l+C4teC5iOC4hOC4uOC4k+C5g+C4iuC5ieC5gOC4nuC4t+C5iOC4reC4quC4o+C5ieC4suC4h+C4muC4seC4jeC4iuC4teC4nOC4ueC5ieC5g+C4iuC5iS5gLFxuICAgIGJ1dHRvbjogJ+C4leC5iOC4reC5hOC4mydcbiAgfTtcblxuICBjcmVhdGVGb3JtKCl7XG5cbiAgICB0aGlzLnVzZXJGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAnZW1haWwnOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0aW9uU2VydmljZS5lbWFpbFZhbGlkYXRvcl1dLFxuICAgICAgJ3Bhc3N3b3JkJzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdGlvblNlcnZpY2UucGFzc3dvcmRWYWxpZGF0b3JdXSxcbiAgICAgICdwYXNzd29yZF9jb25maXJtYXRpb24nOiBbJyddLFxuICAgICAgJ25hbWUnOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICAnaW1hZ2UnOiBbJyddLFxuICAgICAgJ3RpdGxlJzogWyfguJnguLLguKInXSxcbiAgICAgICdwb3NpdGlvbic6IFsn4LiE4Lij4Li54Lit4Lix4LiV4Lij4Liy4LiI4LmJ4Liy4LiHJ10sXG4gICAgICAnaWRfY2FyZCc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRpb25TZXJ2aWNlLmlzTnVtYmVyLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgxMyksIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDEzKV1dLFxuICAgICAgJ3Bob25lJzogWycnXSxcbiAgICAgICdhZGRyZXNzJzogWycnXSxcbiAgICAgICd0ZWFjaGluZ19sZXZlbCc6IFsnJ10sXG4gICAgICAnaW5zdGl0dXRpb24nOiBbJyddLFxuICAgICAgJ3Byb3ZpbmNlJzogWycnXVxuICAgIH0pO1xuICB9XG5cbiAgcmVzZXQoKXtcbiAgICB0aGlzLmNyZWF0ZUZvcm0oKTtcbiAgfVxuXG4gIHNlbGVjdGVkKGltYWdlUmVzdWx0OiBJbWFnZVJlc3VsdCkge1xuICAgICAgdGhpcy5pbWFnZSA9IGltYWdlUmVzdWx0LnJlc2l6ZWRcbiAgICAgICAgICAmJiBpbWFnZVJlc3VsdC5yZXNpemVkLmRhdGFVUkxcbiAgICAgICAgICB8fCBpbWFnZVJlc3VsdC5kYXRhVVJMO1xuXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLmltYWdlKTtcbiAgfVxuXG4gIGRpc3BsYXk6IGJvb2xlYW4gPSBmYWxzZTtcblxuXG4gIHNob3dEaWFsb2coKSB7XG4gICAgdGhpcy5kaXNwbGF5ID0gdHJ1ZTtcbiAgfVxuXG5cbiAgb25TdWJtaXQodGVhY2hlcjogVGVhY2hlcikge1xuXG4gICAgdGhpcy5pbWFnZSAhPSAnJyA/IHRoaXMuaW1hZ2UgPSB0aGlzLmltYWdlIDogdGhpcy5pbWFnZSA9IHRoaXMuZGVmYXVsdEltYWdlO1xuXG4gICAgdGhpcy50ZWFjaGVyID0gbmV3IFRlYWNoZXIodGVhY2hlci5lbWFpbCwgdGVhY2hlci5wYXNzd29yZCwgdGVhY2hlci5uYW1lLCB0aGlzLmltYWdlLCB0ZWFjaGVyLnRpdGxlLCB0ZWFjaGVyLnBvc2l0aW9uLFxuICAgICAgdGVhY2hlci5pZF9jYXJkLCB0ZWFjaGVyLnBob25lLCB0ZWFjaGVyLmFkZHJlc3MsIHRlYWNoZXIudGVhY2hpbmdfbGV2ZWwsIHRlYWNoZXIuaW5zdGl0dXRpb24sIHRlYWNoZXIucHJvdmluY2VcbiAgICApO1xuXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLnRlYWNoZXIpO1xuXG4gICAgdGhpcy50ZWFjaGVyU2VydmljZS5hZGRUZWFjaGVyKHRoaXMudGVhY2hlcilcbiAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICBpZihkYXRhLnN0YXR1cyA9PSAnc3VjY2Vzcycpe1xuICAgICAgICAgICAgdGhpcy5zaG93RGlhbG9nKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICk7XG4gIH1cblxuXG4gIHJlZGlyZWN0UGFnZSgpe1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2F1dGgvc2lnbmluJ10pO1xuICB9XG5cbiAgY2FuY2VsKCl7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICB9XG5cblxuXG59XG5cblxuIl19