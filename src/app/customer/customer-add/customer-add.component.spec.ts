import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { CustomerAddComponent } from './customer-add.component';
import { ICustomerState } from '../store/state/customer.state';

describe('CustomerAddComponent', () => {
  let component: CustomerAddComponent;
  let fixture: ComponentFixture<CustomerAddComponent>;

  let store: MockStore;
  const initialState: ICustomerState = {
    customers: [{
        name: 'Victor'
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
});
