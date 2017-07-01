import {Component, Input} from 'angular2/core'
import {LikeComponent} from './like.component'
import {DataService} from './data.service'
@Component({
    selector: 'tweet',
    template: `<div class="media">
  <div class="media-left">
    <a href="#">
      <img class="media-object" src="{{data.imageUrl}}">
    </a>
  </div>
  <div class="media-body">
    <h4 class="media-heading">{{data.author}}<span class="handle">{{ data.handle }}</span></h4>
    {{data.body}}
    <div>
        <like [totalLikes]="data.totalLikes" [iLike]="data.iLike"></like>
    </div>
  </div>
</div>`
,
    styles: [`
        .handle {
            color: #ccc;
        }
        
        .media {
            margin-bottom: 20px;
        }
        
        .media-object {
            border-radius: 10px;
        }
    `],
    providers: [DataService],
    directives: [LikeComponent]
})

export class TweetComponent{

    @Input() data;
    constructor(){
        console.log(this.data);
    }
    
}