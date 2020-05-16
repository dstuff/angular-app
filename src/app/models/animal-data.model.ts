import { Type } from './type.enum';
import { IBaseData } from './base-data.model';

export interface ISystemHealth extends IBaseData {
  healthIndex: number;
  endDate: number;
  minValueDateTime: number;
}

export interface IDistress extends IBaseData {
  alertType: Type;
  duration: number;
  originalStartDateTime: number;
  endDateTime: number;
  daysInPregnancy: number;
}
export interface ISystemHeat extends IBaseData {
  heatIndexPeak: string;
}

export interface IChangeGroup extends IBaseData {
  newGroupId: number;
  newGroupName: string;
  currentGroupId: number;
  currentGroupName: string;
}

export interface ICalving extends IBaseData {
  destinationGroup: number;
  destinationGroupName: string;
  calvingEase: any;
  daysInPregnancy: number;
  oldLactationNumber: number;
  newborns: any;
}

export interface IHerdEntry extends IBaseData {
  destinationGroup: number;
  destinationGroupName: string;
  cowEntryStatus: string;
}

export interface IBirth extends IBaseData {
  birthDateCalculated: boolean;
}

export interface IBreeding extends IBaseData {
  sire: any;
  breedingNumber: number;
  isOutOfBreedingWindow: boolean;
  interval: number;
}

export interface IDryOff extends IBaseData {
  destinationGroup: number;
  destinationGroupName: string;
  daysInPregnancy: number;
}


