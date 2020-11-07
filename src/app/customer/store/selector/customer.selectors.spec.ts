
import * as fromActions from '../action';
import { initialCustomerState } from '../state/customer.state';
import { ICustomer } from 'src/app/models/customer';
import { ECustomerActions } from '../types/action-types';
import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

describe('Customer Selectors', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                provideMockStore({ initialState: initialCustomerState})
            ]
        });
    });

    describe('getSelectedCustomer',() => {
        it('should return customer select by name', () => {
            const payload = {
                name: 'Victor'
            } as ICustomer;
            const action = new fromActions.GetCustomerByName(payload);
            expect({ ...action }).toEqual({
                type: ECustomerActions.GET_CUSTOMER_BY_NAME,
                payload
            });
        });
    });
});
