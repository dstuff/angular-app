import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { ApiService, StorageService } from './services';
import { mapType, Type } from './models';

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  eventList: any[] = [];

  constructor(
    private apiService: ApiService,
    private storage: StorageService
  ) {}

  ngOnInit() {
    const storedData = this.storage.getItem('data');

    if (!!storedData) {
      this.eventList = storedData;
    } else {
      this.loadData();
    }
  }

  addRecord() {
    this.apiService.post({ data: Math.random() })
      .subscribe(data => {
        console.log('add >>> ', data);
      });
  }

  updateRecord() {
    const item = {
      alertType: mapType[Type.changeGroup],
      duration: 1320,
      originalStartDateTime: null,
      endDateTime: 1514730761,
      daysInPregnancy: null,
      type: mapType[Type.changeGroup],
      cowId: 977,
      animalId: '127',
      eventId: 34662,
      deletable: false,
      lactationNumber: 0,
      daysInLactation: 615,
      ageInDays: 615,
      startDateTime: 1514635646,
      reportingDateTime: 1514731323
    };

    this.apiService.update(item)
      .subscribe(data => {
        console.log('update >>> ', data);
      });
  }

  deleteRecord() {
    this.apiService.delete(34700)
      .subscribe(data => {
        console.log('delete >>> ', data);
      });
  }

  private loadData() {
    this.apiService.get()
      .pipe(untilDestroyed(this))
      .subscribe(data => {
        this.eventList = data;
      });
  }
}
