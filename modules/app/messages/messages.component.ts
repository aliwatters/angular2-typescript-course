import { Component } from '@angular/core';

import { MessagesService } from './messages.service';


@Component({
  selector: 'messages',
  template: `<h1>{{ title }}</h1>
  <input type="text" [(ngModel)]="title" />
    <ul>
      <li *ngFor="let m of messages">{{ m }}</li>
      </ul>
    `
})

export class MessagesComponent {
  messages;
  title="Hello World"
  constructor(service: MessagesService){
    this.messages = service.getMessages();
  }


}
