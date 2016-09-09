import {Control} from 'angular2/common';

export class UsernameValidators {
  static cannotContainSpace(control: Control) {
    if (control.value.indexOf(' ') !== -1) {
      return {cannotContainSpace: true};
    }
    return null;
  }
}
