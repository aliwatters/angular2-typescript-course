import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MessagesComponent } from './messages.component';
import { MessagesService } from './messages.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    MessagesComponent
  ],
  exports: [
    MessagesComponent
  ],
  providers: [
    MessagesService
  ]
})

export class MessagesModule { }
