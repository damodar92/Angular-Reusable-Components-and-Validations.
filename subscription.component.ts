import {Component} from 'angular2/core'

@Component({
    selector: 'subscription',
    templateUrl: 'app/subscription.component.html'

})

export class SubscriptionComponent{
    onSubmit(form){
        alert("Form is successfully subscribed");
    }
    frequencies = [
        { label: 'Daily' }, 
        { label: 'Weekly' },
        { label: 'Monthly' }
    ];
}