import { ICustomer } from "./customer";

describe('Customer', () => {
  it('should create an instance', () => {
    expect(new ICustomer()).toBeTruthy();
  });
});
