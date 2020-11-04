
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import * as customerActions from '../action/customer.actions';
import { Observable, merge, of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { CustomersService } from 'src/app/services/customers.service';
import { ECustomerActions } from '../types/action-types';

@Injectable()
export class CustomersEffects {
    constructor(private actions$: Actions,
        private customerService: CustomersService) {
    }

    @Effect()
    loadCustomer$: Observable<Action> = this.actions$.pipe(
        ofType(ECustomerActions.LOAD_CUSTOMERS),
        tap(() => { console.log('new getCustomers occured in queue') }),
        mergeMap(action => {
            console.log('new getCustomers running');
            return this.customerService.getCustomers()
                .pipe(
                    map(customers => new customerActions.LoadCustomerSuccess(customers)),
                    catchError(error => of(new customerActions.LoadCustomerFail(error)))
                )
        })
    );
}