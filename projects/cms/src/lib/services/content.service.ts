import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IPage } from '../page';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

  loadPage(route: string): Observable<IPage> {
    return of(<IPage>{
      title: 'Hello World',
      elements: [
        {
          selector: 'text', data: {
            text: 'ASDF'
          }
        }
      ]
    })
  }
}
