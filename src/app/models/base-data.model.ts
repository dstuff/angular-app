import { Type } from './type.enum';

export interface IBaseData {
  type: Type;
  cowId: number;
  animalId: string;
  eventId: number;
  deletable: boolean;
  lactationNumber: number;
  daysInLactation: number;
  ageInDays: number;
  startDateTime: number;
  reportingDateTime: number;
}

export interface IFullData {
  healthIndex?: number;
  endDate?: number;
  minValueDateTime?: number;
  alertType?: Type;
  duration?: number;
  originalStartDateTime?: number;
  endDateTime?: number;
  daysInPregnancy?: number;
  heatIndexPeak?: string;
  newGroupId?: number;
  newGroupName?: string;
  currentGroupId?: number;
  currentGroupName?: string;
  destinationGroup?: number;
  destinationGroupName?: string;
  calvingEase?: any;
  oldLactationNumber?: number;
  newborns?: any;
  cowEntryStatus?: string;
  birthDateCalculated?: boolean;
  sire?: any;
  breedingNumber?: number;
  isOutOfBreedingWindow?: boolean;
  interval?: number;
  type: Type;
  cowId: number;
  animalId: string;
  eventId: number;
  deletable: boolean;
  lactationNumber: number;
  daysInLactation: number;
  ageInDays: number;
  startDateTime: number;
  reportingDateTime: number;
}
