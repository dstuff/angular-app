import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map, tap} from 'rxjs/operators';

import { DataService } from './data.service';
import { IFullData } from '../models';


const DATA_URL = 'https://someapiserver.com/json-data';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private dataService: DataService) {}

  get(): Observable<IFullData[]> {
    return this.http.get(DATA_URL)
      .pipe(
        map((response: any) => {
          return response && response.result ? response.result : [];
        }),
        tap((data) => this.dataService.saveData(data))
      );
  }

  post(record: any): Observable<IFullData[]> {
    return this.http.post<any>(DATA_URL, record);
  }

  update(data: any): Observable<IFullData[]> {
    const { eventId = 0 } = data;
    return this.http.patch<any>(`${DATA_URL}/${eventId}`, data);
  }

  delete(eventId: number): Observable<void> {
    return this.http.delete<void>(`${DATA_URL}/${eventId}`);
  }
}
