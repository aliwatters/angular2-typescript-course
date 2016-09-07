import {Component} from 'angular2/core';
import {FavoriteComponent} from './favorite.component';
import {LikeComponent} from './like.component';

@Component({
    selector: 'my-app',
    template: `
                <favorite
                [isFavorite]="post.isFavorite"
                (change)="onFavoriteChange($event)">
                </favorite>

                <like
                [count]="tweet.count"
                [iLike]="tweet.iLike"
                (change)="onLikeChange($event)">
                </like>
              `,
    directives: [FavoriteComponent, LikeComponent]
})

export class AppComponent {
    post = {
        title: "Title",
        isFavorite: true
    }

    tweet = {
      count: 10,
      iLike: false
    }

    onFavoriteChange($event) {
      console.log($event);
    }
}
