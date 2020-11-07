import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerDetailsComponent } from './customer/customer-details/customer-details.component';

const routes: Routes = [
  {
    path: 'customers',
    loadChildren: () => 
      import('./customer/customer.module').then((m) => m.CustomerModule),
  },
  { path: '', pathMatch: 'full', component: DashboardComponent },
  { path: ':customerName', pathMatch: 'full', component: CustomerDetailsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
