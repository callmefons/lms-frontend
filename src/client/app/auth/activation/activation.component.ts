import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-activation',
  templateUrl: 'activation.component.html',
  styleUrls: ['activation.component.css'],
})
export class ActivationComponent {

  constructor(private router: Router) {

  }

  gotoHome(){
    this.router.navigate(['/']);
  }



}
