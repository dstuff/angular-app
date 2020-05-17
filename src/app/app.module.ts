import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { EventTableComponent } from './event-table/event-table.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { NormalInputComponent } from './normal-input/normal-input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EventTableComponent,
    DropdownComponent,
    NormalInputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
