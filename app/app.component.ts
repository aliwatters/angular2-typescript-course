import {Component, OnInit} from 'angular2/core';
import {PostService} from './post.service';
import {HTTP_PROVIDERS} from 'angular2/http';


@Component({
  selector: 'my-app',
  template: `
    <i *ngIf="isLoading" class="fa fa-spinner fa-spin fa-3x"></i>
  `,
  providers: [PostService, HTTP_PROVIDERS]
})

export class AppComponent implements OnInit {
  isLoading = true;

  constructor(private _postService: PostService){
    this._postService.createPost({
      userId: 1,
      title:'hello',
      body: 'body'
    });
  }

  ngOnInit() {
    this._postService.getPosts()
      .subscribe(posts => {
        this.isLoading = false;
        console.log(posts)
      })
  }

}
