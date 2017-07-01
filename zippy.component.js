System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var ZippyComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ZippyComponent = (function () {
                function ZippyComponent() {
                    this.isClickedUp = false;
                    this.isClickedDown = false;
                }
                ZippyComponent.prototype.onclickUp = function () {
                    this.isClickedUp = !this.isClickedUp;
                };
                ZippyComponent.prototype.onclickDown = function () {
                    this.isClickedDown = !this.isClickedDown;
                };
                ZippyComponent = __decorate([
                    core_1.Component({
                        selector: 'zippy',
                        template: "\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\" (click)=\"onclickUp()\">\n                <span>\n                <i \n                class=\"pull-right glyphicon\"\n                [ngClass] =\"{\n                    'glyphicon-chevron-up': isClickedUp,\n                    'glyphicon-chevron-down': !isClickedUp\n                }\">\n                </i>\n                </span>\n            <ng-content select=\".panelOneMain\"></ng-content>\n            \n        </div> \n        <div *ngIf=\"isClickedUp\" class=\"panel-body\">\n            <ng-content select=\".panelOneBody\"></ng-content>\n        </div>    \n    \n        <div class=\"panel-heading\" (click)=\"onclickDown()\">\n                <span>\n                <i \n                class=\"pull-right glyphicon\"\n                [ngClass] =\"{\n                    'glyphicon-chevron-up': isClickedDown,\n                    'glyphicon-chevron-down': !isClickedDown\n                }\">\n                </i>\n                </span>\n            <ng-content select=\".panelTwoMain\"></ng-content>\n        </div>  \n        <div *ngIf=\"isClickedDown\" class=\"panel-body\">\n            <ng-content select=\".panelTwoBody\"></ng-content>\n        </div>    \n    </div>\n    ",
                        styles: ["\n        .glyphicon-chevron-up {\n            position: right;\n        }\n        \n        .glyphicon-chevron-down {\n            position: right;\n        }\n        \n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ZippyComponent);
                return ZippyComponent;
            }());
            exports_1("ZippyComponent", ZippyComponent);
        }
    }
});
//# sourceMappingURL=zippy.component.js.map