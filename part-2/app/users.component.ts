import {Component, OnInit} from 'angular2/core';

import {UserService} from './user.service';

@Component({
  templateUrl: 'app/users.component.html',
  providers: [UserService]
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
