import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: 'vote',
  template:`
    <div class='vote'>
    <i class='glyphicon glyphicon-menu-up'
    [class.highlighted]='myVote == 1'
    (click)='upVote()'></i>
    <span>{{ voteCount }}</span>
    <i class='glyphicon glyphicon-menu-down'
    [class.highlighted]='myVote == -1'
    (click)='downVote()'></i>
    </div>
  `,
  styles:[`
    .vote { width:1em; text-align: center }
    .highlighted { color: orange }
  `]
})

export class VoteComponent {
  @Input() voteCount = 0;
  @Input() myVote = 0;

  @Output() change = new EventEmitter();

  upVote(){
    if (this.myVote > 0) return;
    this.myVote++;
    this.voteCount++;
    this.change.emit({voteCount:this.voteCount, myVote:this.myVote});
  }

  downVote(){
    if (this.myVote < 0) return;
    this.myVote--;
    this.voteCount--;
    this.change.emit({voteCount:this.voteCount, myVote:this.myVote});
  }

}
