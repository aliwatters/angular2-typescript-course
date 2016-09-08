import {Component} from 'angular2/core';
import {TweetComponent} from './tweet.component';
import {SummaryPipe} from './summary.pipe';

@Component({
  selector: 'my-app',
  template: `
  <tweet *ngFor="#tweet of tweets"
    [userId] = "tweet.userId"
    [user] = "tweet.user"
    [title] = "tweet.title"
    [body] = "tweet.body | summary:140"
    [iLike] = "tweet.iLike"
    [count] = "tweet.count"
  >
  `,
  directives: [TweetComponent],
  pipes: [SummaryPipe]
})

export class AppComponent {
  tweets = [
    {
      userId: 1, user: 'FredBlogs', title: 'The Long Road Ahead',
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      iLike: false,
      count: 25
    },
    {
      userId: 2, user: 'JodieFoster', title: 'I made Contact!',
      body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      iLike: false,
      count: 325
    },
    {
      userId: 3, user: 'AnthonyWeiner', title: 'You gotta see this...',
      body: "Oh no not again. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      iLike: false,
      count: 1
    }
  ];
}
