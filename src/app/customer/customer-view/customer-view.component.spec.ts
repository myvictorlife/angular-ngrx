import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerViewComponent } from './customer-view.component';
import { ICustomerState } from '../store/state/customer.state';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MemoizedSelector } from '@ngrx/store';
import * as fromStore from '../store';
import { ICustomer } from 'src/app/models/customer';

describe('CustomerViewComponent', () => {
  let component: CustomerViewComponent;
  let fixture: ComponentFixture<CustomerViewComponent>;

  let mockStore: MockStore;
  let mockCustomerSelector: MemoizedSelector<fromStore.CustomerState, ICustomer[]>;

  const initialState: ICustomerState = {
    customers: [{
        name: 'Victor'
    },{
      name: 'Maria'
    }],
    loaded: false,
    loading: false
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerViewComponent ],
      providers: [
        provideMockStore({ initialState }),
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerViewComponent);
    component = fixture.componentInstance;

    mockStore = TestBed.inject(MockStore);
    mockCustomerSelector = mockStore.overrideSelector(
      fromStore.getAllCustomers,
      initialState.customers
    )
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
