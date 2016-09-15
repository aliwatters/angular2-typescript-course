import {Component, OnInit} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {GitHubService} from './github.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/observable/forkJoin';


@Component({
  selector: 'my-app',
  template: `
    <i *ngIf="isLoading" class="fa fa-spinner fa-spin fa-3x muted"></i>
    <div *ngIf="!isLoading" class="container">
    <div class="col-sm-2">
      <h2>@{{ user.login }}</h2>
      <img class="avatar" src="{{ user.avatar_url }}">
    </div>
    <div class="col-sm-1"></div>
    <div class="col-sm-9">
      <h3>Followers</h3>
      <br class="clearfix">
      <div *ngFor="#follower of followers" class="media pull-left">
        <div class="media-left text-centered"><a href="#">
          <img class="media-object avatar small" src="{{ follower.avatar_url}}">
          {{ follower.login }}
        </a></div>
      </div>
    </div>
  `,
  styles: [`.avatar {
    width:120px;
    height:120px;
    border-radius:100%;
  }
  .avatar.small {
    width:60px;
    height:60px;
  }`],
  providers: [GitHubService, HTTP_PROVIDERS]
})

export class AppComponent implements OnInit {
  isLoading = true;
  user = {};
  followers = [];

  username = 'octocat';

  constructor(private _gitHubService: GitHubService) {
  }

  ngOnInit() {
    this._gitHubService
      .getProfile(this.username)
      .subscribe(res => {
        this.user = res[0];
        this.followers = res[1];
      },
      null,
      () => {
        this.isLoading = false;
      })
  }
}
