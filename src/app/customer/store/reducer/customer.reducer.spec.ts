import * as fromReducer from './customer.reducer';
import * as fromActions from '../action';
import { initialCustomerState } from '../state/customer.state';
import { ICustomer } from 'src/app/models/customer';
describe('Customer Reducer', () => {

  afterEach(() => {
    initialCustomerState.customers = [];
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
    expect(state.customers).toEqual([payload]);
  });

  it('should add customer', () => {
    const payload: ICustomer = {
      name: 'Customer Test #1'
    };
    const action = new fromActions.AddCustomer(payload);
    const state = fromReducer.reducer(initialCustomerState, action);
    
    expect(state.customers.length).toEqual(1);
  });
});
