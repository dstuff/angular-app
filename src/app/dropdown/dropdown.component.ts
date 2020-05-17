import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UntilDestroy } from '@ngneat/until-destroy';

import {ColumnCell, IFullData} from '../core/models';

const typesList = [
  'birth',
  'breeding',
  'calving',
  'changeGroup',
  'distress',
  'dryOff',
  'herdEntry',
  'preCalving',
  'systemHealth',
  'systemHeat'
];

// not sure this list contains all available alert types
const alertTypes = [
  'preCalving',
  'moderatePreCalving',
  'distress',
  'postCalving'
];
const booleanOptions = [true, false];

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent implements OnInit {
  @Input() row: Partial<IFullData>;
  @Input() column: ColumnCell;
  @Output() save: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup;
  options: any[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
    this.listenToFormChanges();
  }

  private initForm() {
    switch (this.column.id) {
      case 'type': {
        this.options = typesList;
        break;
      }
      case 'alertType': {
        this.options = alertTypes;
        break;
      }
      case 'deletable':
      case 'birthDateCalculated':
      case 'isOutOfBreedingWindow': {
        this.options = booleanOptions;
        break;
      }
    }

    const value = this.row[this.column.id];
    this.form = this.fb.group({
      value: [value]
    });

    if (!this.column.editable) {
      this.form.disable();
    }
  }

  private listenToFormChanges() {
    this.form.valueChanges.subscribe(val => {
      this.save.emit({ [this.column.id]: val.value });
    });
  }
}
