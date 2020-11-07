import * as fromReducer from './customer.reducer';
import * as fromActions from '../action';
import { ICustomer } from 'src/app/models/customer';
import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import * as fromStore from '../selector/customer.selectors';
import { initialCustomerState } from '../state/customer.state';
describe('Customer Reducer', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({ initialState: initialCustomerState}),
      ]
    });
  });
  
  it('should return the default state', () => {
    const result = fromReducer.reducer(undefined, { type: null});
    expect(result).toBe(initialCustomerState);
  });

  it('should load customer', () => {
    const action = new fromActions.LoadCustomers();
    const state = fromReducer.reducer(initialCustomerState, action);
    expect(state.loading).toBeTrue();
  });

  it('should load customer with success', () => {
    const payload: ICustomer = {
      name: 'Victor'
    };
    const action = new fromActions.LoadCustomerSuccess([payload]);
    const state = fromReducer.reducer(initialCustomerState, action);
    expect(state.customers.length).toBeGreaterThan(0);
  });

  it('should add customer', () => {
    const payload: ICustomer = {
      name: 'Customer Test #1'
    };
    const action = new fromActions.AddCustomer(payload);
    const state = fromReducer.reducer(initialCustomerState, action);
    
    expect(state.customers.length).toBeGreaterThan(0);
  });
});
