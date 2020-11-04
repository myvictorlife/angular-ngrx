import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICustomer } from 'src/app/models/customer';
import * as fromStore from '../store';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit {

  customers$: Observable<ICustomer[]>;
  constructor(
    private store: Store<fromStore.CustomerState>
  ) {
  }

  ngOnInit(): void {
    this.customers$ = this.store.select<any>(fromStore.getAllCustomers);
    this.store.dispatch(new fromStore.LoadCustomers()); 
  }

}
