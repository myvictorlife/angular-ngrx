import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../store';
import { ICustomer } from 'src/app/models/customer';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

  customer$: Observable<ICustomer>;
  constructor(
    private store: Store<fromStore.CustomerState>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.store.pipe
    this.customer$ = this.store.select<any>(fromStore.getSelectedCustomer);
  }

  redirect() {
    this.router.navigate(['']);
  }

}
