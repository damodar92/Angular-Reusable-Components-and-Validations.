import {Component} from 'angular2/core'

@Component({
    selector: 'zippy',
    template: `
    <div class="panel panel-default">
        <div class="panel-heading" (click)="onclickUp()">
                <span>
                <i 
                class="pull-right glyphicon"
                [ngClass] ="{
                    'glyphicon-chevron-up': isClickedUp,
                    'glyphicon-chevron-down': !isClickedUp
                }">
                </i>
                </span>
            <ng-content select=".panelOneMain"></ng-content>
            
        </div> 
        <div *ngIf="isClickedUp" class="panel-body">
            <ng-content select=".panelOneBody"></ng-content>
        </div>    
    
        <div class="panel-heading" (click)="onclickDown()">
                <span>
                <i 
                class="pull-right glyphicon"
                [ngClass] ="{
                    'glyphicon-chevron-up': isClickedDown,
                    'glyphicon-chevron-down': !isClickedDown
                }">
                </i>
                </span>
            <ng-content select=".panelTwoMain"></ng-content>
        </div>  
        <div *ngIf="isClickedDown" class="panel-body">
            <ng-content select=".panelTwoBody"></ng-content>
        </div>    
    </div>
    `,
    styles:[`
        .glyphicon-chevron-up {
            position: right;
        }
        
        .glyphicon-chevron-down {
            position: right;
        }
        
    `]

})

export class ZippyComponent{

    isClickedUp: false;
    isClickedDown: false;

    onclickUp(){
        this.isClickedUp =!this.isClickedUp;
    }
    onclickDown(){
        this.isClickedDown =!this.isClickedDown;
    }

    
}