import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICustomer } from 'src/app/models/customer';
import * as fromCustomer from '../store/action/customer.actions';
import { ECustomerActions } from '../store/types/action-types';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {

  constructor(
    private _store: Store<fromCustomer.CustomerActions>
  ) { }

  addCustomer(customerName: string) {
    const customer = new ICustomer();
    customer.name = customerName;
    this._store.dispatch(new fromCustomer.AddCustomer(customer));
  }

  ngOnInit(): void {
  }

}
