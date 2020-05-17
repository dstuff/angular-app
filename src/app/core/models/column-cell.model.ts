import { InputType } from './input-type.enum';

export interface ColumnCell {
  id: string;
  editable: boolean;
  type: InputType;
  digitsOnly?: boolean;
}
