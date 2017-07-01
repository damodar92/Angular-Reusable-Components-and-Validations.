import {Component} from 'angular2/core';
import {DataService} from './data.service';
import {TweetComponent} from './tweet.component';
import {ZippyComponent} from './zippy.component';
import {SubscriptionComponent} from './subscription.component';
import {SignUpFormComponent} from './signup-form.component';
import {PasswordChangeComponent} from './password-change.component'

@Component({
    
    selector: 'my-app',
    template: /*<h1 class="title">Twitter Like App</h1>
        <div *ngFor="#tweet of tweets">
            <tweet [data]="tweet"></tweet>
        </div>
        <zippy>
        <div class="panelOneMain"><b>Who can see my stuff?</b></div>
        <div class="panelTwoMain"><b>Who can contact me?</b></div>
        <div class="panelOneBody">Content of who can see my stuff?</div>
        <div class="panelTwoBody">Content of who can contact me?</div>
        </zippy>
        <subscription></subscription> 
        <signup-form></signup-form>*/
        `<pwd-chg></pwd-chg>`,
    providers: [DataService],
    directives: [TweetComponent, ZippyComponent, SubscriptionComponent,SignUpFormComponent,PasswordChangeComponent],
    styles: [`
            .title{
            color: #0084b4
        }`
    ]
})
export class AppComponent { 
    tweets: any[];

    constructor(dataservice : DataService){
        this.tweets =dataservice.getData();
    }
}