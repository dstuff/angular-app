import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import {ColumnCell, IFullData} from '../core/models';

@Component({
  selector: 'app-normal-input',
  templateUrl: './normal-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NormalInputComponent implements OnInit {
  @Input() row: Partial<IFullData>;
  @Input() column: ColumnCell;
  @Output() save: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  submitChanges() {
    const value = this.form.get('input').value;

    if (value === this.row[this.column.id]) {
      return;
    }

    const data = { [this.column.id]: value };
    this.save.emit(data);
  }

  private initForm() {
    const inputValue = this.row[this.column.id];
    this.form = this.fb.group({
      input: [{ value: inputValue, disabled: !this.column.editable}]
    });
  }
}
