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
var shared_module_1 = require("../shared/shared.module");
var auth_routing_1 = require("./auth.routing");
var signin_component_1 = require("./signin.component");
var signup_component_1 = require("./signup.component");
var auth_component_1 = require("./auth.component");
var forgotpassword_component_1 = require("./forgotpassword/forgotpassword.component");
var resetpassword_component_1 = require("./resetpassword/resetpassword.component");
var forgotpasswordstudent_component_1 = require("./forgotpasswordstudent/forgotpasswordstudent.component");
var AuthModule = (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                auth_routing_1.authRouting,
            ],
            declarations: [
                auth_component_1.AuthComponent,
                signin_component_1.SigninComponent,
                signup_component_1.SignupComponent,
                forgotpassword_component_1.ForgotPasswordComponent,
                forgotpasswordstudent_component_1.ForgotPasswordStudentComponent,
                resetpassword_component_1.ResetPasswordComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRoL2F1dGgubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBOEIsZUFBZSxDQUFDLENBQUE7QUFHOUMsOEJBQTJCLHlCQUF5QixDQUFDLENBQUE7QUFDckQsNkJBQTBCLGdCQUFnQixDQUFDLENBQUE7QUFDM0MsaUNBQThCLG9CQUFvQixDQUFDLENBQUE7QUFDbkQsaUNBQThCLG9CQUFvQixDQUFDLENBQUE7QUFDbkQsK0JBQTRCLGtCQUFrQixDQUFDLENBQUE7QUFDL0MseUNBQXNDLDJDQUEyQyxDQUFDLENBQUE7QUFDbEYsd0NBQXFDLHlDQUF5QyxDQUFDLENBQUE7QUFDL0UsZ0RBQTZDLHlEQUF5RCxDQUFDLENBQUE7QUFpQnZHO0lBQUE7SUFBeUIsQ0FBQztJQWQxQjtRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCw0QkFBWTtnQkFDWiwwQkFBVzthQUNaO1lBQ0QsWUFBWSxFQUFFO2dCQUNaLDhCQUFhO2dCQUNiLGtDQUFlO2dCQUNmLGtDQUFlO2dCQUNmLGtEQUF1QjtnQkFDdkIsZ0VBQThCO2dCQUM5QixnREFBc0I7YUFDdkI7U0FDRixDQUFDOztrQkFBQTtJQUN1QixpQkFBQztBQUFELENBQXpCLEFBQTBCLElBQUE7QUFBYixrQkFBVSxhQUFHLENBQUEiLCJmaWxlIjoiYXBwL2F1dGgvYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9ICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuXG5pbXBvcnQge1NoYXJlZE1vZHVsZX0gZnJvbSBcIi4uL3NoYXJlZC9zaGFyZWQubW9kdWxlXCI7XG5pbXBvcnQge2F1dGhSb3V0aW5nfSBmcm9tIFwiLi9hdXRoLnJvdXRpbmdcIjtcbmltcG9ydCB7U2lnbmluQ29tcG9uZW50fSBmcm9tIFwiLi9zaWduaW4uY29tcG9uZW50XCI7XG5pbXBvcnQge1NpZ251cENvbXBvbmVudH0gZnJvbSBcIi4vc2lnbnVwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtBdXRoQ29tcG9uZW50fSBmcm9tIFwiLi9hdXRoLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtGb3Jnb3RQYXNzd29yZENvbXBvbmVudH0gZnJvbSBcIi4vZm9yZ290cGFzc3dvcmQvZm9yZ290cGFzc3dvcmQuY29tcG9uZW50XCI7XG5pbXBvcnQge1Jlc2V0UGFzc3dvcmRDb21wb25lbnR9IGZyb20gXCIuL3Jlc2V0cGFzc3dvcmQvcmVzZXRwYXNzd29yZC5jb21wb25lbnRcIjtcbmltcG9ydCB7Rm9yZ290UGFzc3dvcmRTdHVkZW50Q29tcG9uZW50fSBmcm9tIFwiLi9mb3Jnb3RwYXNzd29yZHN0dWRlbnQvZm9yZ290cGFzc3dvcmRzdHVkZW50LmNvbXBvbmVudFwiO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTaGFyZWRNb2R1bGUsXG4gICAgYXV0aFJvdXRpbmcsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEF1dGhDb21wb25lbnQsXG4gICAgU2lnbmluQ29tcG9uZW50LFxuICAgIFNpZ251cENvbXBvbmVudCxcbiAgICBGb3Jnb3RQYXNzd29yZENvbXBvbmVudCxcbiAgICBGb3Jnb3RQYXNzd29yZFN0dWRlbnRDb21wb25lbnQsXG4gICAgUmVzZXRQYXNzd29yZENvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhNb2R1bGUge31cbiJdfQ==
