import { Component } from '@angular/core';
import {Router, NavigationStart} from "@angular/router";
import {FormBuilder, Validator, Validators} from "@angular/forms";
import 'rxjs/add/operator/filter';
import {AuthService} from "../auth.service";
import {ValidationService} from "../../services/validation.service";

@Component({
  moduleId: module.id,
  selector: 'app-forgotpassword',
  templateUrl: 'forgotpassword.component.html',
  styleUrls: ['forgotpassword.component.css'],
})
export class ForgotPasswordComponent {

  errorMessage: string;
  userForm: any;
  isSending: boolean = false;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) {
    this.createForm();
  }

  createForm(){
    this.userForm = this.formBuilder.group({
      'email': ['', [Validators.required, ValidationService.emailValidator]]
    });
  }

  reset(){
    this.createForm();
  }

  send(email: any) {

    this.isSending = true;

    this.authService.forgotPassword(email)
          .subscribe(
              (data: any) => {
                if(data.status == 'success'){
                  this.router.navigate(['./auth/signin']);
                  this.isSending = false;
                  //console.log(data);
                }else {
                  //console.log(data);
                  this.errorMessage = data.errormessage;
                  this.isSending = false;
                }
              },
              (error:any) => {
                console.log(error);
              }
          );
  }

}
