import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";
import {FormBuilder, Validator, Validators} from "@angular/forms";
import 'rxjs/add/operator/filter';
import {AuthService} from "../auth.service";
import {ValidationService} from "../../services/validation.service";

@Component({
  moduleId: module.id,
  selector: 'app-resetpassword',
  templateUrl: 'resetpassword.component.html',
  styleUrls: ['resetpassword.component.css'],
})
export class ResetPasswordComponent implements OnInit{

  successMessage:string;
  errorMessage: string;
  userForm: any;
  token: any;
  email: any;

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute){
    this.createForm();
  }

  ngOnInit(){
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.token = params['token'];
      this.email = params['email'];
      //console.log(this.token);
      //console.log(this.email);
    });
  }

  createForm(){
    this.userForm = this.formBuilder.group({
      // 'email': [this.email, [Validators.required, ValidationService.emailValidator]],
      'password': ['', [Validators.required, ValidationService.passwordValidator]]
    });
  }

  send(value: any) {

    //console.log(value);

    const newValue = new Object({
      email: this.email,
      password: value.password,
      password_confirmation: value.password,
      token: this.token
    });

    //console.log(newValue);

    this.authService.resetPassword(newValue)
      .subscribe(
        (data: any) => {
          //this.createForm();
          //this.router.navigate(['/signin']);
          // this.errorMessage = data.errormessage;
          //console.log(data);

          if(data.status == 'error'){
            this.errorMessage = 'Access token is invalid.';
          }else {
            this.userForm.password = '';
            this.successMessage = 'Your password has been reset successfully.';
            //this.router.navigate(['/auth/signin']);
          }

        },
        (error:any) => {
          console.log(error);
        }
      );
  }

  goBack(){
    this.router.navigate(['/auth/signin']);
  }

}
