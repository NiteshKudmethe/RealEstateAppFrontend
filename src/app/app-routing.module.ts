import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PropertyOwnersComponent } from './property-owners/property-owners.component';
import { PropertiesComponent } from './properties/properties.component';
import { TenantsComponent } from './tenants/tenants.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'property-owners', component: PropertyOwnersComponent },
  { path: 'properties', component: PropertiesComponent },
  { path: 'tenants', component: TenantsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
