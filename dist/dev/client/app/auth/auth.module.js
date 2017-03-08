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
var activation_component_1 = require("./activation/activation.component");
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
                resetpassword_component_1.ResetPasswordComponent,
                activation_component_1.ActivationComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRoL2F1dGgubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBOEIsZUFBZSxDQUFDLENBQUE7QUFHOUMsOEJBQTJCLHlCQUF5QixDQUFDLENBQUE7QUFDckQsNkJBQTBCLGdCQUFnQixDQUFDLENBQUE7QUFDM0MsaUNBQThCLG9CQUFvQixDQUFDLENBQUE7QUFDbkQsaUNBQThCLG9CQUFvQixDQUFDLENBQUE7QUFDbkQsK0JBQTRCLGtCQUFrQixDQUFDLENBQUE7QUFDL0MseUNBQXNDLDJDQUEyQyxDQUFDLENBQUE7QUFDbEYsd0NBQXFDLHlDQUF5QyxDQUFDLENBQUE7QUFDL0UsZ0RBQTZDLHlEQUF5RCxDQUFDLENBQUE7QUFDdkcscUNBQWtDLG1DQUFtQyxDQUFDLENBQUE7QUFrQnRFO0lBQUE7SUFBeUIsQ0FBQztJQWYxQjtRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCw0QkFBWTtnQkFDWiwwQkFBVzthQUNaO1lBQ0QsWUFBWSxFQUFFO2dCQUNaLDhCQUFhO2dCQUNiLGtDQUFlO2dCQUNmLGtDQUFlO2dCQUNmLGtEQUF1QjtnQkFDdkIsZ0VBQThCO2dCQUM5QixnREFBc0I7Z0JBQ3RCLDBDQUFtQjthQUNwQjtTQUNGLENBQUM7O2tCQUFBO0lBQ3VCLGlCQUFDO0FBQUQsQ0FBekIsQUFBMEIsSUFBQTtBQUFiLGtCQUFVLGFBQUcsQ0FBQSIsImZpbGUiOiJhcHAvYXV0aC9hdXRoLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5cbmltcG9ydCB7U2hhcmVkTW9kdWxlfSBmcm9tIFwiLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGVcIjtcbmltcG9ydCB7YXV0aFJvdXRpbmd9IGZyb20gXCIuL2F1dGgucm91dGluZ1wiO1xuaW1wb3J0IHtTaWduaW5Db21wb25lbnR9IGZyb20gXCIuL3NpZ25pbi5jb21wb25lbnRcIjtcbmltcG9ydCB7U2lnbnVwQ29tcG9uZW50fSBmcm9tIFwiLi9zaWdudXAuY29tcG9uZW50XCI7XG5pbXBvcnQge0F1dGhDb21wb25lbnR9IGZyb20gXCIuL2F1dGguY29tcG9uZW50XCI7XG5pbXBvcnQge0ZvcmdvdFBhc3N3b3JkQ29tcG9uZW50fSBmcm9tIFwiLi9mb3Jnb3RwYXNzd29yZC9mb3Jnb3RwYXNzd29yZC5jb21wb25lbnRcIjtcbmltcG9ydCB7UmVzZXRQYXNzd29yZENvbXBvbmVudH0gZnJvbSBcIi4vcmVzZXRwYXNzd29yZC9yZXNldHBhc3N3b3JkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtGb3Jnb3RQYXNzd29yZFN0dWRlbnRDb21wb25lbnR9IGZyb20gXCIuL2ZvcmdvdHBhc3N3b3Jkc3R1ZGVudC9mb3Jnb3RwYXNzd29yZHN0dWRlbnQuY29tcG9uZW50XCI7XG5pbXBvcnQge0FjdGl2YXRpb25Db21wb25lbnR9IGZyb20gXCIuL2FjdGl2YXRpb24vYWN0aXZhdGlvbi5jb21wb25lbnRcIjtcblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgU2hhcmVkTW9kdWxlLFxuICAgIGF1dGhSb3V0aW5nLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBdXRoQ29tcG9uZW50LFxuICAgIFNpZ25pbkNvbXBvbmVudCxcbiAgICBTaWdudXBDb21wb25lbnQsXG4gICAgRm9yZ290UGFzc3dvcmRDb21wb25lbnQsXG4gICAgRm9yZ290UGFzc3dvcmRTdHVkZW50Q29tcG9uZW50LFxuICAgIFJlc2V0UGFzc3dvcmRDb21wb25lbnQsXG4gICAgQWN0aXZhdGlvbkNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhNb2R1bGUge31cbiJdfQ==
