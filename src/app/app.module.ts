import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { CustomerModule } from './customer/customer.module';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './customer/store';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { reducers, CustomSerializer }  from './store/reducers';

import { storeFreeze } from 'ngrx-store-freeze';
export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer,
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    CustomerModule
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomSerializer}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
