import * as fromCustomer from './customer.actions';

describe('loadCustomers', () => {
  it('should return an action', () => {
    expect(fromCustomer.addCustomer).toBe('[Customer] Load Customers');
  });
});
