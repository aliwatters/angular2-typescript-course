import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';
import {Injectable} from 'angular2/core';

@Injectable() export class GitHubService {
  private _url = 'https://api.github.com/users/';

  constructor(private _http: Http) {
  }

  getUser(username) {
    return this._http.get(this._url + username)
      .map(res => res.json())
  }

  getFollowers(username) {
    return this._http.get(this._url + username + '/followers')
      .map(res => res.json())
  }

  getProfile(username) {
    return Observable.forkJoin(
      this.getUser(username),
      this.getFollowers(username)
    );
  }
}
