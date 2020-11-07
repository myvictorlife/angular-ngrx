import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CustomersService } from './customers.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { provideMockStore } from '@ngrx/store/testing';
import { initialCustomerState } from '../customer/store/state/customer.state';
describe('CustomersService', () => {
  let service: CustomersService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        provideMockStore({ initialState: initialCustomerState })
      ]
    });
    service = TestBed.inject(CustomersService);

    httpTestingController = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get customers', () => {
    service.getCustomers().subscribe();
    const httpRequest = httpTestingController.expectOne(
      (req) => req.url === environment.API_URL
    );
    expect(httpRequest.request.method).toEqual('GET');
  });
});
