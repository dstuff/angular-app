import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import {
  MatProgressSpinnerModule,
  MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS
} from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  providers: [
    {
      provide: MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS,
      useValue: { diameter: 20, strokeWidth: 3 }
    }
  ],
  declarations: [],
  exports: [
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule { }
