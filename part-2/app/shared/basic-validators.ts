import {Control} from 'angular2/common';

export class BasicValidators {
  static email(control: Control) {
    var regEx = /^[a-zA-Z0-9\+\-\.\_]+@[a-zA-Z0-9\-\.]+$/; // keep it simple vs full rfc
    var valid = regEx.test(control.value);
    return valid ? null : { email: true };
  }
}
