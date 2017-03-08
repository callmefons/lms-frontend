"use strict";
var router_1 = require('@angular/router');
var signin_component_1 = require("./signin.component");
var signup_component_1 = require("./signup.component");
var auth_service_1 = require("./auth.service");
var auth_guard_service_1 = require("./auth-guard.service");
var auth_component_1 = require("./auth.component");
var forgotpassword_component_1 = require("./forgotpassword/forgotpassword.component");
var resetpassword_component_1 = require("./resetpassword/resetpassword.component");
var forgotpasswordstudent_component_1 = require("./forgotpasswordstudent/forgotpasswordstudent.component");
var activation_component_1 = require("./activation/activation.component");
var authRoutes = [{
        path: 'auth',
        component: auth_component_1.AuthComponent,
        children: [
            { path: 'activation/:token', component: activation_component_1.ActivationComponent },
            { path: 'signin', component: signin_component_1.SigninComponent },
            { path: 'signup', component: signup_component_1.SignupComponent },
            { path: 'forgotpassword', component: forgotpassword_component_1.ForgotPasswordComponent },
            { path: 'forgotpasswordstudent', component: forgotpasswordstudent_component_1.ForgotPasswordStudentComponent },
            { path: 'password/reset/:token', component: resetpassword_component_1.ResetPasswordComponent },
        ]
    }];
exports.authProviders = [
    auth_guard_service_1.AuthGuard,
    auth_service_1.AuthService
];
exports.authRouting = router_1.RouterModule.forChild(authRoutes);
