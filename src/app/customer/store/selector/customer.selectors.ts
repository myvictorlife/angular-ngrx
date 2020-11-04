import { createSelector } from '@ngrx/store';
import { ICustomerState } from '../state/customer.state';

const selectCustomers = (state: ICustomerState) => state;

export const selectCustomerList = createSelector(
    selectCustomers,
    (state: ICustomerState) => state.customers
);