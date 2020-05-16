import { Injectable } from '@angular/core';
import maxBy from 'lodash-es/maxBy';

import { StorageService } from './storage.service';
import { IFullData } from '../models';

export interface Ids {
  cowId: number;
  animalId: string;
  eventId: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private key = 'data';

  constructor(private storage: StorageService) {}

  static getRandomNumber(): number {
    return Math.round(Math.random() * 100000);
  }

  saveData(data: IFullData[]) {
    if (!data) {
      return;
    }

    this.storage.setItem(this.key, data);
  }

  addItem(item: any): IFullData[] {
    const storedData = this.storage.getItem(this.key);

    if (!storedData) {
      return;
    }

    const newItem = { ...item, ...this.generateNextIds(storedData) };
    const updatedData = [...storedData, newItem];
    this.storage.setItem(this.key, updatedData);

    return updatedData;
  }

  updateItem(record: any): IFullData[] {
    const storedData = this.storage.getItem(this.key);

    if (!storedData || !record) {
      return;
    }

    const updatedData = storedData.map(i => {
      if (i.eventId === record.eventId) {
        i = record;
      }

      return i;
    });
    this.storage.setItem(this.key, updatedData);

    return updatedData;
  }

  deleteItem(eventId: number): IFullData[] {
    const storedData = this.storage.getItem(this.key);

    if (!storedData) {
      return;
    }

    const updatedData = storedData.filter(i => i.eventId !== eventId);
    this.storage.setItem(this.key, updatedData);

    return updatedData;
  }

  private generateNextIds(data: IFullData[]): Ids {
    return {
      cowId: maxBy(data, 'cowId')?.cowId + 1,
      animalId: `${+maxBy(data, 'animalId')?.animalId + 1}`,
      eventId: this.generateEventId(data)
    };
  }

  private generateEventId(data: IFullData[]): number {
    let idCandidate: number = DataService.getRandomNumber();
    while (data.find(item => item.eventId).eventId === idCandidate) {
      idCandidate = DataService.getRandomNumber();
    }

    return  idCandidate;
  }
}
