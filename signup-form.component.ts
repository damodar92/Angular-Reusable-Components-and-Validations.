import {Component} from 'angular2/core';
import {Control, ControlGroup, Validators, FormBuilder} from 'angular2/common';
import {UsernameValidators} from './usernameValidators';
@Component({
    selector: 'signup-form',
    templateUrl: 'app/signup-form.component.html'
})
export class SignUpFormComponent {
    //form= new ControlGroup({
      //  username: new Control('',Validators.required),
      //  password: new Control('', Validators.required)
    //});

    //An alternative to creating the above control objects
    //is form builder

    form: ControlGroup;

    constructor(fb: FormBuilder){
       this.form= fb.group({
            username: ['',Validators.compose([
                Validators.required, 
                UsernameValidators.cannotContainSpace
                ]), UsernameValidators.shouldBeUnique],
            password: ['',Validators.required]
        });

    }

    signUp(){
        alert("Sign Up Successful!");

        //Sample validation code in comments
        //var result =authService.login(this.form.value);
        // In case the login has failed we have to indicate 
        //it through validations

        this.form.find('username').setErrors({
            invalidLogin: true
        });
    }
    
}