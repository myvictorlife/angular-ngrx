import * as fromCustomer from '../action/customer.actions';
import { ICustomerState, initialCustomerState } from '../state/customer.state';
import { ICustomer } from 'src/app/models/customer';
import { ECustomerActions } from '../types/action-types';

export function reducer(
  state = initialCustomerState,
  action: fromCustomer.CustomerActions
): ICustomerState {
  switch (action.type) {
    case ECustomerActions.LOAD_CUSTOMERS: {
      return {
        ...state,
        loading: true,
      }
    }
    case ECustomerActions.LOAD_CUSTOMERS_SUCCESS: {
      const customers = action.payload;

      return {
        ...state,
        customers: state.customers.concat(customers),
        loading: false,
        loaded: true
      }
    }
    case ECustomerActions.AddCustomer: {
      return {
        ... state,
        customers: [... state.customers, action.payload],
        loading: true
      };
    }
    case ECustomerActions.GetCustomers: {
      return {
        ...state,
        customers: [action.payload]
      }
    }
    default:
      return state;
  }
}

export const getCustomersLoading = (state: ICustomerState) => state.loading;
export const getCustomersLoaded = (state: ICustomerState) => state.loaded; 
export const getCustomers  = (state: ICustomerState) => state.customers; 