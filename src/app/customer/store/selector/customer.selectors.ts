import * as fromCustomers from '../reducer/customer.reducer';
import { ICustomerState } from '../state/customer.state';
import { ActionReducerMap } from '@ngrx/store';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import * as fromRoot from '../../../store';
import { ICustomer } from 'src/app/models/customer';

export interface CustomerState {
    data: ICustomerState
}

export const reducers: ActionReducerMap<CustomerState> = {
    data: fromCustomers.reducer,
}

export const getCustomersState = createFeatureSelector<CustomerState>(
    'store_customers'
);

export const getCustomerState = createSelector(
    getCustomersState, 
    (state: CustomerState) => state.data
);

export const getAllCustomer = createSelector(
    getCustomersState, 
    (state: CustomerState) => state.data.customers
);

export const selectCustomers = (state: ICustomerState) => state;
export const getSelectedCustomer = createSelector(
    getAllCustomer,
    fromRoot.getRouterState,
    (entities, router): ICustomer => {
        if(entities && router.state.params.customerName) {
            return entities.find(customer => {
                return customer.name === router.state.params.customerName;
            });
        } else {
            return {
                name: `Not found customer with name (${name})`
            };
        }
    }
)

export const getAllCustomers = createSelector(
    getCustomerState,
    fromCustomers.getCustomersEntities
);

export const getAllCustomersLoaded = createSelector(
    getCustomerState,
    fromCustomers.getCustomersLoaded
);

export const getAllCustomersLoading = createSelector(
    getCustomerState,
    fromCustomers.getCustomersLoading
);

export interface StoreRootState {
    router: fromRouter.RouterReducerState<any>;
}
