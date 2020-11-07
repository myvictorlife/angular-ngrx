import * as fromCustomer from '../action/customer.actions';
import { ICustomerState, initialCustomerState } from '../state/customer.state';
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
      };
    }
    // case ECustomerActions.GET_CUSTOMER_BY_NAME: {
    //   const payload = action.payload;
    //   const customer = state.customers.find(
    //     customer => customer.name === payload.name);
    //   return {
    //     ... state,
    //     customers: [customer],
    //   };
    // }
    default:
      return state;
  }
}

export const getCustomersEntities  = (state: ICustomerState) => state.customers;
export const getCustomersLoading = (state: ICustomerState) => state.loading;
export const getCustomersLoaded = (state: ICustomerState) => state.loaded;