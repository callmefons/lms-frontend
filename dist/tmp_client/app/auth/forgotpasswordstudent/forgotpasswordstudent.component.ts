import { Component } from '@angular/core';
import {Router, NavigationStart} from "@angular/router";
import {FormBuilder, Validator, Validators} from "@angular/forms";
import 'rxjs/add/operator/filter';
import {AuthService} from "../auth.service";
import {ValidationService} from "../../services/validation.service";

@Component({
  moduleId: module.id,
  selector: 'app-forgotpasswordstudent',
  templateUrl: 'forgotpasswordstudent.component.html',
  styleUrls: ['forgotpasswordstudent.component.css'],
})
export class ForgotPasswordStudentComponent {

  errorMessage: string;
  userForm: any;
  isSending: boolean = false;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) {
    this.createForm();
  }

  createForm(){
    this.userForm = this.formBuilder.group({
      'email': ['', [Validators.required, ValidationService.emailValidator]],
      'username': ['', [Validators.required]]
    });
  }

  reset(){
    this.createForm();
  }

  send(email: any) {

    this.isSending = true;

    this.authService.forgotPasswordStudent(email)
          .subscribe(
              (data: any) => {
                if(data.status == 'success'){
                  this.router.navigate(['./student']);
                  this.createForm();
                  this.isSending = false;
                  console.log(data);
                }else {
                  console.log(data);
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
