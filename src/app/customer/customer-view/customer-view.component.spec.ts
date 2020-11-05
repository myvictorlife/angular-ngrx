import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerViewComponent } from './customer-view.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MemoizedSelector, Store } from '@ngrx/store';
import * as fromStore from '../store';
import { ICustomer } from 'src/app/models/customer';

describe('CustomerViewComponent', () => {
  let component: CustomerViewComponent;
  let fixture: ComponentFixture<CustomerViewComponent>;

  let mockStore: MockStore<fromStore.CustomerState>;
  let mockCustomerSelector: MemoizedSelector<fromStore.CustomerState, ICustomer[]>;

  const initialCustomerState = {
    data: {
      customers: [{
        name: 'Victor'
      },{
        name: 'Maria'
      }],
      loaded: false,
      loading: false
    }
  } as fromStore.CustomerState;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerViewComponent ],
      providers: [
        provideMockStore({ initialState: initialCustomerState }),
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerViewComponent);
    component = fixture.componentInstance;

    mockStore = TestBed.get(Store);
    mockCustomerSelector = mockStore.overrideSelector(
      fromStore.getAllCustomers,
      initialCustomerState.data.customers
    )
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a list of customer after the data is loaded.', () => {
    mockStore.dispatch(new fromStore.LoadCustomers());

    component.customers$.subscribe( data => {
      expect(data.length).toBe(2);
    });
  });

  it('should dispatch a LoadCustomers action OnInit', () => {
    spyOn(mockStore, 'dispatch').and.callThrough();
    component.ngOnInit();
    expect(mockStore.dispatch).toHaveBeenCalledTimes(1);
    expect(mockStore.dispatch).toHaveBeenCalledWith(new fromStore.LoadCustomers());
  });
  

  // MockStore SetState is not working.
  // it('should display any customer after the data is loaded.', () => {
  //   const customerState = {
  //     data: {
  //       customers: [],
  //       loaded: false,
  //       loading: false
  //     }
  //   } as fromStore.CustomerState;
  //   mockStore.setState(customerState);
    
  //   component.customers$.subscribe( data => {
  //     expect(data.length).toBe(0);
  //   });
  // });

});
