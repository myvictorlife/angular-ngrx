import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CustomerViewComponent } from './customer/customer-view/customer-view.component';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { initialCustomerState } from './customer/store/state/customer.state';

describe('AppComponent', () => {

  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent,
        CustomerViewComponent,
        CustomerAddComponent
      ],
      providers: [
        provideMockStore({ initialState: initialCustomerState }),
      ]
    }).compileComponents();

    store = TestBed.inject(MockStore);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-ngrx'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-ngrx');
  });

});
