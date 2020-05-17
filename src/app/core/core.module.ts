import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { MockInterceptor } from './interceptors';
import { MaterialModule } from '../material/material.module';
import { DigitsOnlyDirective } from './directives';

@NgModule({
  declarations: [DigitsOnlyDirective],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MockInterceptor,
      multi: true
    }
  ],
  exports: [MaterialModule, DigitsOnlyDirective]
})
export class CoreModule { }
