import {Component, Input} from 'angular2/core';
import {LikeComponent} from './like.component'

@Component({
  selector: 'tweet',
  templateUrl: 'app/tweet.template.html',
  styles: [`
    .tweet {border:1px solid #ddd; margin:5px; padding: 5px}
    .photo {margin:10px; width:120px; height:120px; }
  `],
  directives: [LikeComponent]
})

export class TweetComponent {
  @Input() userId;
  @Input() user;
  @Input() title;
  @Input() body;
  @Input() iLike;
  @Input() count;
}
