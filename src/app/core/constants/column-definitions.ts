import { ColumnCell, InputType } from '../models';

export const DISPLAYED_COLUMNS = [
  'eventId', 'animalId', 'cowId', 'type', 'deletable', 'lactationNumber', 'daysInLactation',
  'ageInDays', 'startDateTime', 'reportingDateTime', 'healthIndex', 'endDate', 'minValueDateTime',
  'alertType', 'duration', 'originalStartDateTime', 'endDateTime', 'daysInPregnancy', 'heatIndexPeak',
  'newGroupId', 'newGroupName', 'currentGroupId', 'currentGroupName', 'destinationGroup',
  'destinationGroupName', 'calvingEase', 'oldLactationNumber', 'newborns', 'cowEntryStatus',
  'birthDateCalculated', 'sire', 'breedingNumber', 'isOutOfBreedingWindow', 'interval'
];

export const COLUMN_DEFINITIONS: ColumnCell[] = [
  { id: 'eventId', editable: false, type: InputType.text },
  { id: 'animalId', editable: false, type: InputType.text },
  { id: 'cowId', editable: false, type: InputType.text },
  { id: 'type', editable: true, type: InputType.select },
  { id: 'deletable', editable: true, type: InputType.select },
  { id: 'lactationNumber', editable: true, type: InputType.text, digitsOnly: true },
  { id: 'daysInLactation', editable: true, type: InputType.text, digitsOnly: true },
  { id: 'ageInDays', editable: true, type: InputType.text, digitsOnly: true },
  { id: 'startDateTime', editable: true, type: InputType.text },
  { id: 'reportingDateTime', editable: true, type: InputType.text },
  { id: 'healthIndex', editable: true, type: InputType.text, digitsOnly: true },
  { id: 'endDate', editable: true, type: InputType.text },
  { id: 'minValueDateTime', editable: true, type: InputType.text },
  { id: 'alertType', editable: true, type: InputType.select },
  { id: 'duration', editable: true, type: InputType.text, digitsOnly: true },
  { id: 'originalStartDateTime', editable: true, type: InputType.text },
  { id: 'endDateTime', editable: true, type: InputType.text },
  { id: 'daysInPregnancy', editable: true, type: InputType.text, digitsOnly: true },
  { id: 'heatIndexPeak', editable: true, type: InputType.text, digitsOnly: true },
  { id: 'newGroupId', editable: false, type: InputType.text },
  { id: 'newGroupName', editable: true, type: InputType.text },
  { id: 'currentGroupId', editable: false, type: InputType.text },
  { id: 'currentGroupName', editable: true, type: InputType.text },
  { id: 'destinationGroup', editable: true, type: InputType.text },
  { id: 'destinationGroupName', editable: true, type: InputType.text },
  { id: 'calvingEase', editable: true, type: InputType.text },
  { id: 'oldLactationNumber', editable: true, type: InputType.text, digitsOnly: true },
  { id: 'newborns', editable: true, type: InputType.text },
  { id: 'cowEntryStatus', editable: true, type: InputType.text },
  { id: 'birthDateCalculated', editable: true, type: InputType.select },
  { id: 'sire', editable: true, type: InputType.text },
  { id: 'breedingNumber', editable: true, type: InputType.text, digitsOnly: true },
  { id: 'isOutOfBreedingWindow', editable: true, type: InputType.select },
  { id: 'interval', editable: true, type: InputType.text, digitsOnly: true }
];
