import {Component, OnInit} from 'angular2/core';

import {PostService} from './post.service';
import {UserService} from './user.service';

import {PaginationComponent} from './pagination.component';
import {SpinnerComponent} from './spinner.component';

@Component({
  templateUrl: '/app/posts.component.html',
  providers: [PostService, UserService],
  directives: [PaginationComponent, SpinnerComponent],
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
  postsLoading;
  commentsLoading;
  posts;
  pagedPosts;
  users = [];
  currentPost;
  pageSize = 10;

  constructor(
    private _postService: PostService,
    private _userService: UserService
  ) { }

  ngOnInit() {
    this._loadPosts();
    this._loadUsers();
  }

  private _loadPosts(filter?) {
    this.postsLoading = true;
    this.posts = [];
    this.pagedPosts = [];
    this._postService.getPosts(filter)
      .subscribe(res => {
        this.posts = res;
        this.pagedPosts = _.take(this.posts, this.pageSize);
      },
      null,
      () => this.postsLoading = false
      );
  }

  private _loadUsers() {
    this._userService
      .getUsers()
      .subscribe(res => this.users = res);
  }

  reloadPosts(filter) {
    this.currentPost = null;
    this._loadPosts(filter);
  }

  displayPost(post) {
    this.currentPost = post;
    this.commentsLoading = true;
    this._postService
      .getComments(post.id)
      .subscribe(res => this.currentPost.comments = res,
      null,
      () => this.commentsLoading = false
      )
  }

  onPageChanged(page) {
    var startIndex = (page-1) * this.pageSize;
    this.pagedPosts = _.take(_.rest(this.posts, startIndex), this.pageSize);
  }

}
