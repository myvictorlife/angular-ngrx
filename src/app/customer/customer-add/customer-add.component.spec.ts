import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { CustomerAddComponent } from './customer-add.component';
import { ICustomerState } from '../store/state/customer.state';
import * as fromStore from '../store';
import { ICustomer } from 'src/app/models/customer';
import { ECustomerActions } from '../store/types/action-types';

describe('CustomerAddComponent', () => {
  let component: CustomerAddComponent;
  let fixture: ComponentFixture<CustomerAddComponent>;

  let store: MockStore;
  const initialState: ICustomerState = {
    customers: [{
        name: 'Customer #1'
    }],
    loaded: false,
    loading: false
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerAddComponent ],
      imports: [
      ],
      providers: [
        provideMockStore({ initialState }),
      ]
    })
    .compileComponents();

    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch a AddCustomer action addCustomer', () => {
    spyOn(store, 'dispatch').and.callThrough();
    const customer = new ICustomer();
    customer.name = 'Unit Test';
    component.addCustomer(customer.name);
    
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(new fromStore.AddCustomer(customer));
  });
});
