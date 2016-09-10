import {Component} from 'angular2/core';
import {ControlGroup, Control, Validators, FormBuilder} from 'angular2/common';
import {PasswordValidators} from './password.validators';

@Component({
  selector: 'password-form',
  templateUrl: 'app/password-form.template.html'
})

export class PasswordFormComponent {
  form: ControlGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      password: ['', Validators.required, PasswordValidators.passwordCorrect],
      passwordNew: ['',
        Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ])],
      passwordConfirm: ['', Validators.required]
    }, { validator: PasswordFormComponent.passwordMatch })
  }

  static passwordMatch(group: ControlGroup) {
    var pass1 = group.find('passwordNew');
    var pass2 = group.find('passwordConfirm');
    if (pass1.value !== pass2.value) {
      group.find('passwordConfirm').setErrors({
        passwordMatch: true
      });
    }
  }

  checkPassword() {
    // var result = authService.update(this.form.value);
    console.log(this.form.value);
  }
}
