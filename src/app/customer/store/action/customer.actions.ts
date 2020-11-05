import { createAction, Action } from '@ngrx/store';
import { ICustomer } from 'src/app/models/customer';
import { ECustomerActions } from '../types/action-types';

export const addCustomer = createAction(
  ECustomerActions.AddCustomer,
  (customer: ICustomer) => ({customer})
);

export class AddCustomer implements Action {
  public readonly type = ECustomerActions.AddCustomer;
  constructor(public payload: ICustomer) {
  }
}

export class LoadCustomers implements Action {
  public readonly type = ECustomerActions.LOAD_CUSTOMERS;
}

export class LoadCustomerSuccess implements Action {
  public readonly type = ECustomerActions.LOAD_CUSTOMERS_SUCCESS;
  constructor(public payload: ICustomer[]) {
  }
}

export class LoadCustomerFail implements Action {
  public readonly type = ECustomerActions.LOAD_CUSTOMERS_FAIL;
  constructor(public payload: any) {
  }
}

// action types
export type CustomerActions = AddCustomer | LoadCustomers | LoadCustomerSuccess | LoadCustomerFail;

