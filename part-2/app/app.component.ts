import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HomeComponent} from './home.component';
import {NavBarComponent} from './navbar.component';
import {PostsComponent} from './posts.component';
import {UsersComponent} from './users.component';
import {UserFormComponent} from './user-form.component';

@RouteConfig([
  {
    path: '/', name: 'Home', component: HomeComponent, useAsDefault: true
  },
  { path: '/posts', name: 'Posts', component: PostsComponent },
  { path: '/users', name: 'Users', component: UsersComponent },
  { path: '/users/new', name: 'Userform', component: UserFormComponent },
  { path: '/*other', name: 'Other', redirectTo: ['Home'] }
])

@Component({
  selector: 'my-app',
  template: `
  <navbar></navbar>
  <div class="container">
    <router-outlet></router-outlet>
  </div>
  `,
  directives: [
    NavBarComponent,
    ROUTER_DIRECTIVES
  ]
})

export class AppComponent {
}
