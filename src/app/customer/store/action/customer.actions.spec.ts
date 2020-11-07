
import {
  AddCustomer,
  LoadCustomers,
  LoadCustomerSuccess,
  LoadCustomerFail
} from './customer.actions';
import { ECustomerActions } from '../types/action-types';
import { ICustomer } from 'src/app/models/customer';
import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
describe('AddCustomer', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({ initialState: [] })
      ]
    });
  });

  it('should create an action', () => {
    const customer : ICustomer = {
      name: 'Customer #1'
    };
    const action = new AddCustomer(customer);
    expect({ ...action }).toEqual({
      type: ECustomerActions.AddCustomer,
      payload: customer
    });
  });
});

describe('loadCustomers', () => {
  it('should create an action', () => {
    const action = new LoadCustomers();
    expect({ ...action }).toEqual({ type: ECustomerActions.LOAD_CUSTOMERS });
  });
});

describe('LoadCustomerSuccess', () => {
  it('should create an action', () => {
    const payload: ICustomer[] = [
      {
        name: 'Customer #1',
      },
      {
        name: 'Customer #2',
      },
    ];
    const action = new LoadCustomerSuccess(payload);
    expect({ ...action }).toEqual({
      type: ECustomerActions.LOAD_CUSTOMERS_SUCCESS,
      payload
    });
  });
});


describe('LoadCustomerFail', () => {
  it('should create an action', () => {
    const payload: ICustomer[] = [
      {
        name: 'Customer #1',
      }
    ];
    const action = new LoadCustomerFail(payload);
    expect({ ...action }).toEqual({
      type: ECustomerActions.LOAD_CUSTOMERS_FAIL,
      payload
    });
  });
});
