
import {Control} from 'angular2/common';

export class UsernameValidators{

    static shouldBeUnique(control: Control){
        //var Promise: any;
        return new Promise((resolve, reject)=> {
            setTimeout(function(){
                if(control.value=="Damodar"){
                    resolve({shouldBeUnique: true})
                }
                else{
                    return null;
                }
            }, 1000)
        })
    }


    static cannotContainSpace(control: Control){
        if(control.value.indexOf(' ') >= 0){
            return {cannotContainSpace: true};
        }
        else 
            return null;
    }
}