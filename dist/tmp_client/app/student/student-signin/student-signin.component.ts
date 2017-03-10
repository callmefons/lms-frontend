import { Component } from '@angular/core';
import {Router, NavigationExtras} from "@angular/router";
import {FormBuilder, Validator, Validators} from "@angular/forms";
import {AuthService} from "../../auth/auth.service";
import {Student} from "../../models/student";
import {StudentService} from "../../services/student.service";
import {ValidationService} from "../../services/validation.service";
declare var $:any;

export class studentSignin{
  constructor(public email? :any, public password?: any){}
}

@Component({
    moduleId: module.id,
    selector: 'student-signin',
    templateUrl: 'student-signin.component.html',
    styleUrls: ['student-signin.component.css'],
})
export class StudentSigninComponent {

    message: string;
    errorMessage: string;
    userForm: any;
    activateForm: any;
    student = new Student();

    constructor(private studentService: StudentService,
                private authService: AuthService,
                private formBuilder: FormBuilder,
                private router: Router) {
        this.setMessage();
        this.createForm();
        this.createActivateForm();
    }

    setMessage() {
        //this.message = 'Logged ' + (this.authService.isLoggedIn() ? 'in' : 'out');
    }

    createForm(){
        this.userForm = this.formBuilder.group({
            'username': ['', [Validators.required]],
            'password': ['', [Validators.required]]
        });
    }

    createActivateForm(){
      this.activateForm = this.formBuilder.group({
        'username': ['', [Validators.required]],
        'email': ['', [Validators.required, ValidationService.emailValidator]],
      });
    }

    sending: boolean = false;
    sendingMessage: string = '';
    activate(obj: any){
      // console.log(obj);
      this.sending = true;
      this.authService.sendActivationMail(obj)
        .subscribe(
          (data: any) => {
            this.sending = false;
            this.sendingMessage = 'Success! Email is sent';
            this.createActivateForm();
          },(err) => {
            this.sending = false;
            this.sendingMessage = 'Failed! Cannot send email, this username is already activated';

          })
    }


    closeModal(){
      $('#myModal').modal('hide');
      this.sendingMessage = '';
    }

    reset(){
        this.createForm();
    }

    signin(student: Student) {
        this.message = 'Trying to log in ...';
        this.student = new studentSignin(student.username, student.password);

      this.authService.signin(this.student)
        .subscribe(
          (data: any) => {
            //console.log(data);
            this.errorMessage = data.errormessage;
            if(data.status == 'success' && data.data.role == 'student') {
              this.authService.setToken(data.data.token, 'student', data.data.id, data.data.activated);
              this.router.navigate(['./student/dashboard']);
            }else if(data.data.role != 'student'){
              this.errorMessage = 'username or password not match!';
            }
            else {
              this.errorMessage = data.errormessage;
            }
          },
          (error) => {
            this.errorMessage = 'Please activated your account first!';
          }
        );


    }

}
