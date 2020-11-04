import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducer';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './store';

@NgModule({
  declarations: [
    CustomerViewComponent,
    CustomerAddComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('store_customers', reducers),
    EffectsModule.forFeature(effects)
  ],
  exports: [
    CustomerViewComponent,
    CustomerAddComponent
  ]
})
export class CustomerModule { }
