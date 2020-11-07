import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICustomer } from '../models/customer';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<ICustomer[]> {
    return this.http
      .get<ICustomer[]>(environment.API_URL)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

}
