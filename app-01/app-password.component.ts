import {Component} from 'angular2/core';
import {PasswordFormComponent} from './password-form.component';


@Component({
  selector: 'my-app',
  template: `
  <password-form>
  </password-form>
  `,
  directives: [PasswordFormComponent]
})

export class AppComponent {

}
