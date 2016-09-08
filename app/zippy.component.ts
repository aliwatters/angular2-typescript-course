/*
  <zippy title="this is the title">
    Here is the content
  </zippy>
*/

import {Component, Input} from 'angular2/core';

@Component({
  selector: 'zippy',
  template: `
  <div class="panel panel-default">
    <div class="panel-heading zippy-title">{{ title }}
      <i class="glyphicon pull-right"
        (click)='toggle()'
        [ngClass]="{
          'glyphicon-chevron-down': closed,
          'glyphicon-chevron-up': !closed
      }"></i>
    </div>
    <div class='panel-body zippy-content' *ngIf="!closed">
      <ng-content></ng-content>
    </div>
  </div>
  `
})

export class ZippyComponent {
  @Input() title: string;

  closed = true;

  toggle() {
    this.closed = !this.closed;
  }
}
