import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { EventTableComponent } from './event-table/event-table.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    EventTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
