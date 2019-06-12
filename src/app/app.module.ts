import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventAppComponent } from './EventsApp.component';

@NgModule({
  declarations: [
    EventAppComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [EventAppComponent]
})
export class AppModule { }
