import {Control, ControlGroup} from 'angular2/common';

export class PasswordValidators{
    static matchPassword(group: ControlGroup){
        var newPass = group.find('newPassword').value;
        var confirmPass = group.find('confirmPassword').value;

        if(newPass == ''|| confirmPass == ''){
            return null;
        }

        if(newPass != confirmPass){
            return {matchPassword : true};
        }
        else {
            return null;
        }    
    }
}