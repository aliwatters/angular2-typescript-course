import {Component} from 'angular2/core';
import {VoterComponent} from './voter.component';

@Component({
  selector: 'my-app',
  template: `
      <voter
        [voteCount]="vote.voteCount"
        [myVote]="vote.myVote"
        (change)="onVoteChange($event)"
      ></voter>
    `,
  directives: [VoterComponent]
})

export class AppComponent {
  vote = {
    voteCount: 10,
    myVote: 0
  }

  onVoteChange($event) {
    console.log($event);
  }
}
