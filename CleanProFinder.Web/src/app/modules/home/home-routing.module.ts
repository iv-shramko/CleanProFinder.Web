import { ProviderRequestsComponent } from './components/provider-requests/provider-requests.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerGuard } from 'src/app/modules/core/guards/customer.guard';
import { HomeComponent } from 'src/app/modules/home/components/home/home.component';
import { PremisesComponent } from 'src/app/modules/home/components/premises/premises.component';
import { ServicesComponent } from 'src/app/modules/home/components/services/services.component';
import { ServiceProviderGuard } from '../core/guards/service-provider.guard';
import { ProviderServicesComponent } from './components/provider-services/provider-services.component';
import { MyRequestsComponent } from './components/my-requests/my-requests.component';
import { SavedProvidersComponent } from 'src/app/modules/home/components/saved-providers/saved-providers.component';

const uri = {
  SERVICES: 'services',
  ORDERS: 'orders',
  PREMISES: 'premises',
  BASE: '',
  PROVIDER_SERVICES: 'my-services',
  MY_REQUESTS: 'my-requests',
  ACTIVE_REQUESTS: 'active-requests',
  SAVED_PROVIDERS: 'saved-providers',
};

const routes: Routes = [
  {
    path: uri.BASE,
    component: HomeComponent,
    children: [
      {
        path: uri.SERVICES,
        component: ServicesComponent,
        canActivate: [CustomerGuard],
      },
      {
        path: uri.PREMISES,
        component: PremisesComponent,
        canActivate: [CustomerGuard],
      },
      {
        path: uri.MY_REQUESTS,
        component: MyRequestsComponent,
        canActivate: [CustomerGuard],
      },
      {
        path: uri.PROVIDER_SERVICES,
        component: ProviderServicesComponent,
        canActivate: [ServiceProviderGuard],
      },
      {
        path: uri.ACTIVE_REQUESTS,
        component: ProviderRequestsComponent,
        canActivate: [ServiceProviderGuard],
      },
      {
        path: uri.SAVED_PROVIDERS,
        component: SavedProvidersComponent,
        canActivate: [CustomerGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
