import {Component} from 'angular2/core';
import {VoteComponent} from './vote.component';

@Component({
    selector: 'my-app',
    template: `
      <vote
        [voteCount]="vote.voteCount"
        [myVote]="vote.myVote"
        (change)="onVoteChange($event)"
      ></vote>
    `,
    directives: [VoteComponent]
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
