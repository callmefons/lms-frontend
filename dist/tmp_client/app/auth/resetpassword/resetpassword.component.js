"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
require('rxjs/add/operator/filter');
var auth_service_1 = require("../auth.service");
var validation_service_1 = require("../../services/validation.service");
var ResetPasswordComponent = (function () {
    function ResetPasswordComponent(authService, formBuilder, router, activatedRoute) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.password = '';
        this.createForm();
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.token = params['token'];
            _this.email = params['email'];
        });
    };
    ResetPasswordComponent.prototype.createForm = function () {
        this.userForm = this.formBuilder.group({
            'password': [this.password, [forms_1.Validators.required, validation_service_1.ValidationService.passwordValidator]]
        });
    };
    ResetPasswordComponent.prototype.send = function (value) {
        var _this = this;
        var newValue = new Object({
            email: this.email,
            password: value.password,
            password_confirmation: value.password,
            token: this.token
        });
        this.authService.resetPassword(newValue)
            .subscribe(function (data) {
            if (data.status == 'error') {
                _this.password = '';
                _this.createForm();
                _this.errorMessage = 'Access token is invalid.';
            }
            else {
                _this.password = '';
                _this.createForm();
                _this.successMessage = 'Your password has been reset successfully.';
            }
        }, function (error) {
            console.log(error);
        });
    };
    ResetPasswordComponent.prototype.goBack = function () {
        this.router.navigate(['/auth/signin']);
    };
    ResetPasswordComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-resetpassword',
            template: "<div class=\"lms-body\">   <div class=\"container\">     <div class=\"row box-wrapper\">       <h4 class=\"title text-center\">\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19</h4>       <form [formGroup]=\"userForm\"  (ngSubmit)=\"send(userForm.value)\" novalidate >         <div class=\"form-group row\">           <small class=\"col-sm-12 text-muted\">\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19\u0E43\u0E2B\u0E49\u0E21\u0E35\u0E04\u0E27\u0E32\u0E21\u0E22\u0E32\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E19\u0E49\u0E2D\u0E22 8 \u0E2D\u0E31\u0E01\u0E29\u0E23\u0E41\u0E25\u0E30\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E14\u0E49\u0E27\u0E22\u0E2D\u0E31\u0E01\u0E29\u0E23 1 \u0E15\u0E31\u0E27             \u0E15\u0E31\u0E27\u0E40\u0E25\u0E02 1 \u0E15\u0E31\u0E27           </small>         </div>         <div class=\"form-group row\">             <label for=\"email\" class=\"col-sm-3 col-form-label\">Email</label>             <div class=\"col-sm-9\">               <p id=\"email\">{{email}}</p>               <!--<input disabled type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Email\"  name=\"email\" formControlName=\"email\">-->               <!--<control-messages [control]=\"userForm.controls.email\"></control-messages>-->             </div>         </div>         <div class=\"form-group row\">           <label for=\"password\" class=\"col-sm-3 col-form-label\">\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19</label>           <div class=\"col-sm-9\">             <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19\"  name=\"password\" formControlName=\"password\" [(ngModel)]=\"password\">             <control-messages [control]=\"userForm.controls.password\"></control-messages>           </div>         </div>         <small style=\"color: green\" *ngIf=\"successMessage != null\">           <strong (click)=\"goBack()\" style=\"cursor: pointer; text-decoration: underline\">< back</strong>           {{successMessage}}         </small>         <small class=\"text-danger\" *ngIf=\"errorMessage != null\">{{errorMessage}}</small>         <div class=\"form-group row submit\">           <div class=\"col-sm-12\">             <button type=\"submit\" class=\"btn btn-info btn-block\" [disabled]=\"!userForm.valid\">\u0E2A\u0E48\u0E07</button>           </div>         </div>       </form>     </div>   </div> </div>",
            styles: ["html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}.btn{border:none;outline:none!important}.btn-back{margin-top:-5px}.btn-gray{background-color:#f0f2f1;color:#000}.btn-white{background-color:#fff;color:#000}.btn-green{background-color:#87c97f;color:#fff}.btn-info{background-color:#83c7d4;color:#fff}.btn-orenge{background-color:#fd8455;color:#fff}.progress,.progress-bar{height:10px;font-size:10px;line-height:10px;margin-bottom:0;border:none;box-shadow:none}.progress-bar-info{background-color:#83c7d4}.progress-bar-success{background-color:#87c97f}.progress-bar-warning{background-color:#eec820}.progress-bar-danger{background-color:#ff4a46}.panel-default{max-height:150px;min-height:150px;background-color:#fff;border:1px solid;border-color:#e5e6e9 #dfe0e4 #d0d1d5;border-radius:3px}.panel-default>.panel-heading{background-color:transparent;border:none;border-radius:3px;text-align:center}.panel-title{font-weight:700;margin-bottom:5px}.panel-body{text-align:center}.panel-footer{background-color:transparent;border:none}.badge{font-size:18px;color:#fff;background-color:#eec820!important}.on-checked{cursor:pointer}.lms-body,body{overflow-x:hidden;background-color:#f0f2f1!important;color:#1e394f}.btn,.lms-body,.modal,.modal-body,.modal-header,.nav,.section-header-link,.section-header-title,a,body,h1,h2,h3,h4,h5,input,label,p,small{font-family:Kanit,sans-serif!important;font-weight:400!important}.lms-body{padding-top:45px;padding-bottom:90px}.line-breaks{margin-bottom:5px}.card{margin:0 auto;margin-bottom:.75rem}.text-center{text-align:center}a,a:hover{cursor:pointer}.leader-tag{position:absolute;left:-15px;top:-25px;padding:5px 2.5px;border-radius:10em;width:30px}.step-tag{padding:5px}.ng-invalid.ng-dirty.ng-touched{border-color:#ebcccc;outline-color:#ebcccc}.ng-valid.ng-dirty{border-color:#5bc0de;outline-color:#5bc0de}.jumbotron,.navbar{border-radius:0}:focus{outline:none!important}.box-wrapper{transition:all .3s cubic-bezier(.25,.8,.25,1);margin-bottom:45px;padding:15px;background-color:#fff;border:1px solid;border-color:#e5e6e9 #dfe0e4 #d0d1d5;border-radius:3px;display:block;margin:0 auto;overflow-y:hidden}textarea{resize:none!important}.clear{clear:both}.pull-left{float:left;clear:both}.pull-right{float:right;clear:both}.scrollable-content{overflow-x:hidden;max-height:350px;padding:2rem;overflow-y:scroll}.scrollable-content::-webkit-scrollbar{width:10px;border-radius:10px}.scrollable-content::-webkit-scrollbar *{background:transparent;border-radius:10px}.scrollable-content::-webkit-scrollbar-thumb{background:#848484!important;border-radius:10px}.rowTable,.tdTable,.thTable{padding-top:5px;padding-bottom:5px;margin-bottom:5px}.thTable{background-color:#f0f2f1}.tdTable{border-bottom:1px solid #f0f2f1}:host/deep/.ui-growl-item-container.ui-state-highlight.ui-growl-message-success{background-color:#87c97f;border-color:#87c97f}:host /deep/ .ui-resizable-se{display:none}:host /deep/ .ui-dialog.ui-widget.ui-widget-content.ui-corner-all.ui-shadow{position:fixed;padding:0;overflow:hidden;width:500px}.center{margin:0 auto}body{background-color:#f0f2f1}.box-wrapper{margin-top:90px;margin-bottom:45px;max-width:550px;padding:45px;background-color:#fff;border:1px solid;border-color:#e5e6e9 #dfe0e4 #d0d1d5;border-radius:3px}.title{margin-top:-15px;padding-bottom:15px}.submit{margin-top:45px;margin-bottom:-15px} /*# sourceMappingURL=resetpassword.component.css.map */"],
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, forms_1.FormBuilder, router_1.Router, router_1.ActivatedRoute])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());
exports.ResetPasswordComponent = ResetPasswordComponent;
