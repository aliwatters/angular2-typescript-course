import {Component} from 'angular2/core';
import {SubscriptionFormComponent} from './subscription-form.component';

@Component({
  selector: 'my-app',
  template: `
  <subscription-form>
  </subscription-form>
  `,
  directives: [SubscriptionFormComponent]
})

export class AppComponent {

}
