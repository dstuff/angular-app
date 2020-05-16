import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  setItem(key: string, data: any) {
    if (!key) {
      return;
    }

    localStorage.setItem(key, JSON.stringify(data));
  }

  getItem(key: string): any {
    if (!key) {
      return;
    }

    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  clear() {
    localStorage.clear();
  }
}
