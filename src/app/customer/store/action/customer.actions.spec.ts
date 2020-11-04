import { TestBed } from '@angular/core/testing';
import { ICustomerState } from '../state/customer.state';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('loadCustomers', () => {

  let store: MockStore;
  const initialState: ICustomerState = {
    customers: [{
        name: 'Victor'
    }],
    loaded: false,
    loading: false
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        provideMockStore({ initialState }),
      ]
    });

    store = TestBed.inject(MockStore);
  });

});
