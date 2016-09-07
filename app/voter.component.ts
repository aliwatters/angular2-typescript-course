import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: 'voter',
  template:`
    <div class='voter'>
    <i class='glyphicon glyphicon-menu-up vote-button'
    [class.highlighted]='myVote == 1'
    (click)='upVote()'></i>
    <span>{{ voteCount + myVote }}</span>
    <i class='glyphicon glyphicon-menu-down vote-button'
    [class.highlighted]='myVote == -1'
    (click)='downVote()'></i>
    </div>
  `,
  styles:[`
    .voter { width:1em; text-align: center, color: #999; font-size:1.2em; }
    .highlighted { color: orange }
  `]
})

export class VoterComponent {
  @Input() voteCount = 0;
  @Input() myVote = 0;

  @Output() change = new EventEmitter();

  upVote(){
    if (this.myVote > 0) return;
    this.myVote++;
    this.change.emit({voteCount:this.voteCount, myVote:this.myVote});
  }

  downVote(){
    if (this.myVote < 0) return;
    this.myVote--;
    this.change.emit({voteCount:this.voteCount, myVote:this.myVote});
  }

}
