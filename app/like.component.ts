import {Component, Input} from 'angular2/core';

@Component({
    selector: 'like',
    template: `
      <i class="glyphicon glyphicon-heart"
        [class.highlighted]="iLike"
        (click)="onClick()"></i>
      <span>{{ count }}</span>
    `,
    styles: [`
      .glyphicon-heart { color: #ccc; cursor: pointer }
      .highlighted { color: deeppink }
    `]
})

export class LikeComponent {
    @Input() iLike = false;
    @Input() count = 0;

    onClick(){
        this.iLike = !this.iLike;
        this.count += this.iLike? 1 : -1;
    }
}
