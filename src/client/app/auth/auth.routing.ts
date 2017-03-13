import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SigninComponent} from "./signin.component";
import {SignupComponent} from "./signup.component";

import {AuthService} from "./auth.service";
import {AuthGuard} from "./auth-guard.service";
import {AuthComponent} from "./auth.component";
import {ForgotPasswordComponent} from "./forgotpassword/forgotpassword.component";
import {ResetPasswordComponent} from "./resetpassword/resetpassword.component";
import {ForgotPasswordStudentComponent} from "./forgotpasswordstudent/forgotpasswordstudent.component";
import {ActivationComponent} from "./activation/activation.component";

const authRoutes: Routes = [{
  path: 'auth',
  component: AuthComponent,
  children: [
    { path: 'activation/:token',  component: ActivationComponent },
    { path: 'signin',  component: SigninComponent },
    { path: 'signup',  component: SignupComponent },
    { path: 'forgotpassword',  component: ForgotPasswordComponent },
    { path: 'forgotpasswordstudent',  component: ForgotPasswordStudentComponent },
    { path: 'password/reset',  component: ResetPasswordComponent },
  ]
}];

export const authProviders = [
  AuthGuard,
  AuthService
];



export const authRouting: ModuleWithProviders = RouterModule.forChild(authRoutes);
