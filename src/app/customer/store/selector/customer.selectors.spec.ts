
import * as customerSelectors from './customer.selectors';
import { ICustomerState, initialCustomerState } from '../state/customer.state';
import { ICustomer } from 'src/app/models/customer';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('Customer Selectors', () => {

    describe('getAllCustomers',() => {
        it('should return customers', () => {
            // expect(customerSelectors.getAllCustomers(initialState)).toEqual(initialState.customers);
        });
    });
});
