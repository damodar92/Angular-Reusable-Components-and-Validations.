System.register(['angular2/core', './data.service', './tweet.component', './zippy.component', './subscription.component', './signup-form.component', './password-change.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, data_service_1, tweet_component_1, zippy_component_1, subscription_component_1, signup_form_component_1, password_change_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            },
            function (tweet_component_1_1) {
                tweet_component_1 = tweet_component_1_1;
            },
            function (zippy_component_1_1) {
                zippy_component_1 = zippy_component_1_1;
            },
            function (subscription_component_1_1) {
                subscription_component_1 = subscription_component_1_1;
            },
            function (signup_form_component_1_1) {
                signup_form_component_1 = signup_form_component_1_1;
            },
            function (password_change_component_1_1) {
                password_change_component_1 = password_change_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(dataservice) {
                    this.tweets = dataservice.getData();
                }
                AppComponent = __decorate([
                    core_1.Component({
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
                            <signup-form></signup-form>*/ "<pwd-chg></pwd-chg>",
                        providers: [data_service_1.DataService],
                        directives: [tweet_component_1.TweetComponent, zippy_component_1.ZippyComponent, subscription_component_1.SubscriptionComponent, signup_form_component_1.SignUpFormComponent, password_change_component_1.PasswordChangeComponent],
                        styles: ["\n            .title{\n            color: #0084b4\n        }"
                        ]
                    }), 
                    __metadata('design:paramtypes', [data_service_1.DataService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map