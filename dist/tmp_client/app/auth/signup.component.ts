import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {Teacher} from "../models/teacher";
import {Router} from "@angular/router";
import {TeacherService} from "../services/teacher.service";
import {AuthService} from "./auth.service";
import {ImageResult, ResizeOptions} from "ng2-imageupload";
import {ValidationService} from "../services/validation.service";

declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'app-signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.css'],
})
export class SignupComponent implements OnInit {

  defaultImage: any = "data:image/jpeg;base64,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";
  userForm: any;
  teacher = new Teacher();
  image: string = '';
  resizeOptions: ResizeOptions = {
    resizeMaxHeight: 150,
    resizeMaxWidth: 150
  };

  ngOnInit(){
    this.image = this.defaultImage;
  }

  constructor(public authService: AuthService, private teacherService: TeacherService,
              private formBuilder: FormBuilder, private router: Router)
  {
    this.createForm();
  }

  message = {
    title: 'ลงทะเบียน',
    content: `การลงทะเบียนเสร็จสิ้น โปรดตรวจสอบการยืนยันการสมัครสมาชิกในอีเมลแอดเดรสที่คุณใช้เพื่อสร้างบัญชีผู้ใช้.`,
    button: 'ต่อไป'
  };

  createForm(){

    this.userForm = this.formBuilder.group({
      'email': ['', [Validators.required, ValidationService.emailValidator]],
      'password': ['', [Validators.required, ValidationService.passwordValidator]],
      'password_confirmation': [''],
      'name': ['', [Validators.required]],
      'image': [''],
      'title': ['นาย'],
      'position': ['ครูอัตราจ้าง'],
      'id_card': ['', [Validators.required, ValidationService.isNumber, Validators.minLength(13), Validators.maxLength(13)]],
      'phone': [''],
      'address': [''],
      'teaching_level': [''],
      'institution': [''],
      'province': ['']
    });
  }

  reset(){
    this.createForm();
  }

  selected(imageResult: ImageResult) {
      this.image = imageResult.resized
          && imageResult.resized.dataURL
          || imageResult.dataURL;

    //console.log(this.image);
  }

  display: boolean = false;


  showDialog() {
    this.display = true;
  }


  onSubmit(teacher: Teacher) {

    this.teacher = new Teacher(teacher.email, teacher.password, teacher.name, this.image, teacher.title, teacher.position,
      teacher.id_card, teacher.phone, teacher.address, teacher.teaching_level, teacher.institution, teacher.province
    );

    //console.log(this.teacher);

    this.teacherService.addTeacher(this.teacher)
    .subscribe(
        (data: any) => {
          if(data.status == 'success'){
            this.showDialog();
          }
        },
        (error) => console.log(error)
    );
  }


  redirectPage(){
    this.router.navigate(['/auth/signin']);
  }

  cancel(){
    window.history.back();
  }



}


