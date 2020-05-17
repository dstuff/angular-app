import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import * as mockedData from '../../../mocked-data/data.json';
import { DataService } from '../services';
import { IFullData } from '../models';

@Injectable()
export class MockInterceptor implements HttpInterceptor {
  constructor(private dataService: DataService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.method === 'GET') {
      return this.getData();
    } else if (request.method === 'POST') {
      return this.addData();
    } else if (request.method === 'PATCH') {
      return this.updateData(request);
    } else if (request.method === 'DELETE') {
      const { url } = request;
      const eventId = Number(url.split('/')[url.split('/').length - 1]);
      return this.deleteData(eventId);
    }

    return next.handle(request);
  }

  private getData(): Observable<any> {
    return of(new HttpResponse({ status: 200, body: ((mockedData) as any).default }))
      .pipe(
        delay(Math.random() * 3000) // simulate server-side request delay
      );
  }

  private addData(): Observable<any> {
    const updatedData = this.dataService.addItem();

    return of(new HttpResponse({ status: 200, body: ((updatedData) as IFullData[]) }))
      .pipe(delay(Math.random() * 750)); // simulate server-side request delay
  }

  private updateData(request: any): Observable<any> {
    const updatedData = this.dataService.updateItem(request.body);

    return of(new HttpResponse({ status: 200, body: ((updatedData) as IFullData[]) }))
      .pipe(delay(Math.random() * 750)); // simulate server-side request delay
  }

  private deleteData(eventId: number): Observable<any> {
    const updatedData = this.dataService.deleteItem(eventId);

    return of(new HttpResponse({ status: 200, body: ((updatedData) as IFullData[]) }))
      .pipe(delay(Math.random() * 750)); // simulate server-side request delay
  }
}
