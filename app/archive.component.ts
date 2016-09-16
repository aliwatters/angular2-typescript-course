import {Component} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

@Component({
  template: `
        <h1>Archives</h1>
        <h2>Year: {{ year }} Month: {{ month }}
    `,
})
export class ArchiveComponent {
  year: number;
  month: number;

  constructor(private _routeParams: RouteParams) {
    this.year = parseInt(_routeParams.get('year'))
    this.month = parseInt(_routeParams.get('month'))
  }

}
