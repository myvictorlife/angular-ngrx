import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetailsComponent } from './customer-details.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MemoizedSelector, Store } from '@ngrx/store';
import * as fromStore from '../store';
import { RouterTestingModule } from '@angular/router/testing';

describe('CustomerDetailsComponent', () => {
  let component: CustomerDetailsComponent;
  let fixture: ComponentFixture<CustomerDetailsComponent>;

  let mockStore: MockStore<fromStore.CustomerState>;
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
      declarations: [ CustomerDetailsComponent ],
      imports: [
        RouterTestingModule,
      ],
      providers: [
        provideMockStore({ initialState: initialCustomerState }),
      ]
    })
    .compileComponents();

    mockStore = TestBed.get(Store);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
