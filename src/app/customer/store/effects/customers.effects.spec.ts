import { TestBed } from "@angular/core/testing";
import { CustomersService } from 'src/app/services/customers.service';
import { of, Observable } from 'rxjs';
import { CustomersEffects } from './customers.effects';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import * as fromCustomerActions from '../action/customer.actions';
import * as fromStore from '../selector/customer.selectors';

const mockCustomers = [{ name: 'Customer #1' }];

class MockCustomerService {
    getCustomers() {
      return of(mockCustomers);
    }
}

describe('Customers Effects', () => {
    let actions$: Observable<any>;
    let customerEffects: CustomersEffects;
    let customerService: CustomersService;
    let mockStore: MockStore<CustomersEffects>;

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

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                CustomersEffects,
                provideMockActions(() => actions$),
                provideMockStore({ initialState: initialCustomerState}),
                { provide: CustomersService, useClass: MockCustomerService }
            ]
        });

        customerEffects = TestBed.inject(CustomersEffects);
        mockStore = TestBed.inject(MockStore);
        customerService = TestBed.inject(CustomersService);
    });

    it('should call loadCustomer', () => {
        const spy = spyOn(customerService, 'getCustomers').and.callThrough();
        actions$ = of(fromCustomerActions.LoadCustomers);
        customerEffects.loadCustomer$.subscribe((res) => {
            expect(res).toEqual(new fromCustomerActions.LoadCustomerSuccess(mockCustomers));
            expect(spy).toHaveBeenCalledTimes(1);
        })
    });
});