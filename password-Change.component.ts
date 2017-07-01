import {Component} from 'angular2/core';
import {Control, ControlGroup, Validators, FormBuilder} from 'angular2/common';
import {PasswordValidators} from './passwordValidators';

@Component({
    selector: 'pwd-chg',
    templateUrl: 'app/password-Change.component.html',

})

export class PasswordChangeComponent{
    form: ControlGroup;

    constructor(fb: FormBuilder){
       this.form= fb.group({
            oldPassword: ['',Validators.required],

            newPassword: ['',
            Validators.compose([Validators.required, 
            Validators.minLength])],

            confirmPassword: ['', Validators.required]}, 
        { validator: PasswordValidators.matchPassword });
    }
    changePassword(){
         
        var oldPassword = this.form.find('oldPassword');
        if (oldPassword.value != '1234') 
            oldPassword.setErrors({ validOldPassword: true });

        if (this.form.valid)
            alert("Password successfully changed.");
    }  
}