import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/selector';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './store';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

@NgModule({
  declarations: [
    CustomerViewComponent,
    CustomerAddComponent,
    CustomerDetailsComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('store_customers', reducers),
    EffectsModule.forFeature(effects),
  ],
  exports: [
    CustomerViewComponent,
    CustomerAddComponent,
    CustomerDetailsComponent
  ]
})
export class CustomerModule { }
