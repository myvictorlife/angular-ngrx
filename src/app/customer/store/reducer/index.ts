import * as fromCustomers from '../reducer/customer.reducer';
import { ICustomerState } from '../state/customer.state';
import { ActionReducerMap } from '@ngrx/store';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface CustomerState {
    customers: ICustomerState
}

export const reducers: ActionReducerMap<CustomerState> = {
    customers: fromCustomers.reducer,
}

export const getCustomersState = createFeatureSelector<CustomerState>(
    'store_customers'
);

export const getCustomerState = createSelector(
    getCustomersState, 
    (state: CustomerState) => state.customers
);

export const getAllCustomers = createSelector(
    getCustomerState,
    fromCustomers.getCustomers
);

export const getAllCustomersLoaded = createSelector(
    getCustomerState,
    fromCustomers.getCustomersLoaded
);

export const getAllCustomersLoading = createSelector(
    getCustomerState,
    fromCustomers.getCustomersLoading
);