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

  errorMessage: string;
  userForm: any;
  token: any;

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute){
    this.createForm();
  }

  ngOnInit(){
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.token = params['token'];
      //console.log(this.token);
    });
  }

  createForm(){
    this.userForm = this.formBuilder.group({
      'email': ['', [Validators.required, ValidationService.emailValidator]],
      'password': ['', [Validators.required, ValidationService.passwordValidator]]
    });
  }

  send(value: any) {

    //console.log(value);

    const newValue = new Object({
      email: value.email,
      password: value.password,
      token: this.token
    });

    //console.log(newValue);

    this.authService.resetPassword(newValue)
      .subscribe(
        (data: any) => {
          //this.createForm();
          //this.router.navigate(['/signin']);
          console.log(data);
        },
        (error:any) => {
          console.log(error);
        }
      );
  }

}
