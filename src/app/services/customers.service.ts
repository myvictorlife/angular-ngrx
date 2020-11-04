import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICustomer } from '../models/customer';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<ICustomer[]> {
    return this.http
      .get<ICustomer[]>('https://run.mocky.io/v3/f63481e1-c003-466a-bc35-d64925d074fb')
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

}
