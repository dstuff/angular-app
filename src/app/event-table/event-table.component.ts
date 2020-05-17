import {Component, OnInit, ViewChild} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { UntilDestroy } from '@ngneat/until-destroy';

import { ApiService, StorageService } from '../core/services';
import { IFullData, InputType } from '../core/models';
import { COLUMN_DEFINITIONS, DISPLAYED_COLUMNS } from '../core/constants';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-event-table',
  templateUrl: './event-table.component.html',
  styleUrls: ['./event-table.component.scss']
})
export class EventTableComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  private eventList$ = new BehaviorSubject<IFullData[]>([]);

  dataSource: MatTableDataSource<IFullData>;
  columnData = COLUMN_DEFINITIONS;
  displayedColumns = DISPLAYED_COLUMNS;
  isLoading: boolean;
  inputType = InputType;

  constructor(
    private apiService: ApiService,
    private storage: StorageService
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.listenToEvents();
    const storedData = this.storage.getItem('data');

    if (!!storedData) {
      this.eventList$.next(storedData);
      this.isLoading = false;
    } else {
      this.loadData();
    }
  }

  addRecord() {
    this.isLoading = true;
    this.apiService.post()
      .subscribe(data => {
        this.updateEventList(data);
      });
  }

  updateRecord(newValue: { [key: string]: string }, row: Partial<IFullData>) {
    const updatedEvent = { ...row, ...newValue };
    this.isLoading = true;
    this.apiService.update(updatedEvent)
      .subscribe(data => {
        this.updateEventList(data);
      });
  }

  deleteRecord(id: number) {
    this.isLoading = true;
    this.apiService.delete(id)
      .subscribe(data => {
        this.updateEventList(data);
      });
  }

  trackEventFn(index, item): number {
    return item.eventId;
  }

  private updateEventList(data: IFullData[]) {
    this.eventList$.next(data);
    this.isLoading = false;
  }

  private listenToEvents() {
    this.eventList$
      .pipe(
        filter((list) => !!list),
        map((list: IFullData[]) => {
          this.dataSource = new MatTableDataSource(list);
          this.dataSource.paginator = this.paginator;
        })
      ).subscribe();
  }

  private loadData() {
    this.apiService.get()
      .subscribe(data => {
        this.eventList$.next(data);
        this.isLoading = false;
      });
  }
}
