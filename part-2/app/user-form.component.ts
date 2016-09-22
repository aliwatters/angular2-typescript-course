import {Component, OnInit} from 'angular2/core';
import {ControlGroup, FormBuilder, Validators} from 'angular2/common';
import {CanDeactivate, Router, RouteParams} from 'angular2/router';

import {User} from './user.class';

import {BasicValidators} from './basic-validators';
import {UserService} from './user.service';

@Component({
  templateUrl: 'app/user-form.component.html',
  providers: [UserService]
})
export class UserFormComponent implements CanDeactivate, OnInit {
  form: ControlGroup;
  title: string;
  user = new User();

  constructor(
    fb: FormBuilder,
    private _router: Router,
    private _routeParams: RouteParams,
    private _userService: UserService
  ) {
    this.form = fb.group({
      name: ['', Validators.required],
      email: ['', BasicValidators.email],
      phone: [],
      address: fb.group({
        street: [],
        suite: [],
        city: [],
        zipcode: []
      })
    });
  }

  save() {
    console.log('Creating User:', this.form.value);
    this._userService
      .createUser(this.form.value)
      .subscribe(res => {
        // this.form.MarkAsPristine(); // TBA
        this._router.navigate(['Users']);
      });
  }

  routerCanDeactivate(next, previous) {
    if (this.form.dirty) {
      return confirm('You have unsaved changes. Are you sure?');
    }
  }

  ngOnInit() {
    var id = this._routeParams.get('id');
    this.title = id ? 'Edit User' : 'New User';

    if (!id) {
      return;
    }
    // here get user id from service
    this._userService
      .getUser(parseInt(id))
      .subscribe(
      user => this.user = user,
      response => {
        if (response.status == 404) {
          this._router.navigate(['NotFound']);
        }
      }
      );
  }
}
