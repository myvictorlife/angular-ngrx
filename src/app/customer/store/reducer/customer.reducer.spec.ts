import { reducer } from './customer.reducer';
import { initialCustomerState } from '../state/customer.state';
describe('Customer Reducer', () => {
  it('should return the previous state', () => {
    const action = {} as any;
    const result = reducer(initialCustomerState, action);
    expect(result).toBe(initialCustomerState);
  });
});
