import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICustomer } from 'src/app/models/customer';
import * as fromStore from '../store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit {

  customers$ = this.store.select<any>(fromStore.getAllCustomers);
  // totalOfCustomers$ = this.store.pipe(select(fromStore.getTotalOfCustomers));
  // loading$ = this.store.pipe(select(fromStore.getLoading));
  // text$ = combineLatest(this.loading$, this.totalOfCustomers).pipe(
  //   map(([loading, totalOfCustomers]) => {
  //     if(loading) {
  //       return 'Loading...';
  //     } else {
  //       return `Total of Customers:  ${totalOfCustomers}`; 
  //     }
  //   })
  // )

  constructor(
    private store: Store<fromStore.CustomerState>,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(new fromStore.LoadCustomers());
  }

  redirectToCustomerDetails(customer: ICustomer) {
    this.router.navigate(['Victor']);
  }

}
