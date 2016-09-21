import {Component, OnInit} from 'angular2/core';
import {RouterLink} from 'angular2/router';

import {UserService} from './user.service';

@Component({
  templateUrl: 'app/users.component.html',
  providers: [UserService],
  directives: [RouterLink]
})

export class UsersComponent implements OnInit {
  isLoading = true;
  users = {};
  userService;

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService
      .getUsers()
      .subscribe(res => {
        this.users = res
      },
      null,
      () => {
        this.isLoading = false;
      });
  }
}
