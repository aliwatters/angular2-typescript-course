import {Control, ControlGroup} from 'angular2/common';

export class PasswordValidators {
  static passwordCorrect(control: Control) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value !== 'password') resolve({ passwordCorrect: true })
        else resolve(null)
      }, 1000);
    })
  }
}
