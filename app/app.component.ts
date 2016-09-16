import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {ArchiveComponent} from './archive.component';
import {HomeComponent} from './home.component';

@RouteConfig([
  {
    path: '/', name: 'Home', component: HomeComponent, useAsDefault: true
  },
  { path: '/archives/:year/:month', name: 'Archive', component: ArchiveComponent },
  { path: '/*other', name: 'Other', redirectTo: ['Home'] }
])

@Component({
  selector: 'my-app',
  template: `
  <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})

export class AppComponent {
  archives = [
    { year: 2016, month: 1 },
    { year: 2016, month: 2 },
    { year: 2016, month: 3 },
    { year: 2016, month: 4 },
  ];
  constructor() {
  }
}
