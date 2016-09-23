import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable() export class PostService {
  private _url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private _http: Http) {
  }

  getPosts(filter?) {
    var url = this._url;
    if (filter && filter.userId) {
      url += "?userId=" + filter.userId
    }
    return this._http.get(url)
      .map(res => res.json())
  }

  getComments(id: number) {
    return this._http.get(this._url + '/' + id + '/comments')
      .map(res => res.json())
  }

  getPost(id: number) {
    return this._http.get(this.getPostUrl(id))
      .map(res => res.json())
  }

  createPost(post) {
    return this._http.post(this._url, JSON.stringify(post))
      .map(res => res.json)
  }

  deletePost(id: number) {
    return this._http.delete(this.getPostUrl(id))
      .map(res => res.json)
  }

  updatePost(post) {
    return this._http.put(this.getPostUrl(post.id), JSON.stringify(post))
      .map(res => res.json)
  }

  private getPostUrl(id) {
    return this._url + '/' + id;
  }
}
