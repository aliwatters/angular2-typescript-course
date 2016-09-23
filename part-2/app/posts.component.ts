import {Component, OnInit} from 'angular2/core';
import {RouterLink} from 'angular2/router';

import {PostService} from './post.service';
import {SpinnerComponent} from './spinner.component';

@Component({
  templateUrl: '/app/posts.component.html',
  providers: [PostService],
  directives: [RouterLink, SpinnerComponent],
  styles: [`
        .posts li { cursor: default; }
        .posts li:hover { background: #ecf0f1; }
        .list-group-item.active,
        .list-group-item.active:hover,
        .list-group-item.active:focus {
            background-color: #ecf0f1;
            border-color: #ecf0f1;
            color: #2c3e50;
        }
    `],
})

export class PostsComponent {
  isLoading = true;
  posts = [];
  currentPost;

  constructor(private _postService: PostService) { }

  ngOnInit() {
    this._postService
      .getPosts()
      .subscribe(res => {
        this.posts = res
      },
      null,
      () => {
        this.isLoading = false;
      });

  }

  displayPost(post) {
    this.currentPost = post;
  }
}
