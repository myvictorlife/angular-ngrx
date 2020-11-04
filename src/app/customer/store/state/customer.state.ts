import { ICustomer } from '../../../models/customer';

export interface ICustomerState {
    customers: ICustomer[];
    loaded: boolean,
    loading: boolean
}

export const initialCustomerState: ICustomerState = {
    customers: [{
        name: 'Victor'
    }],
    loaded: false,
    loading: false
}
