import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MessagesModule }  from './messages/messages.module';

import { AppComponent }  from './app.component';

// everything below is available app wide.
@NgModule({
  imports: [
    BrowserModule,
    MessagesModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
