import { NgModule }      from '@angular/core';
import {CommonModule} from "@angular/common";

import {SharedModule} from "../shared/shared.module";
import {authRouting} from "./auth.routing";
import {SigninComponent} from "./signin.component";
import {SignupComponent} from "./signup.component";
import {AuthComponent} from "./auth.component";
import {ForgotPasswordComponent} from "./forgotpassword/forgotpassword.component";
import {ResetPasswordComponent} from "./resetpassword/resetpassword.component";
import {ForgotPasswordStudentComponent} from "./forgotpasswordstudent/forgotpasswordstudent.component";


@NgModule({
  imports: [
    SharedModule,
    authRouting,
  ],
  declarations: [
    AuthComponent,
    SigninComponent,
    SignupComponent,
    ForgotPasswordComponent,
    ForgotPasswordStudentComponent,
    ResetPasswordComponent
  ]
})
export class AuthModule {}
