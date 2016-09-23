import {Component, OnInit} from 'angular2/core';
import {RouterLink} from 'angular2/router';

import {UserService} from './user.service';

@Component({
  templateUrl: 'app/users/users.component.html',
  providers: [UserService],
  directives: [RouterLink]
})

export class UsersComponent implements OnInit {
  isLoading = true;
  users = [];
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

  deleteUser(user) {
    if (
      confirm("Are you sure - del: " + user.id + "?")) {

      var idx = this.users.indexOf(user);

      // update view here for optomistic
      this.users.splice(idx, 1);

      this._userService
        .deleteUser(user.id)
        .subscribe(res => {
          console.log('Delete confirmed on service');
          // update view here for pesimistic
          // this.users.splice(idx, 1);
        },
        err => {
          alert("Could not delete the user.");
          this.users.splice(idx, 0, user);
        }
      );
    }
  }
}
