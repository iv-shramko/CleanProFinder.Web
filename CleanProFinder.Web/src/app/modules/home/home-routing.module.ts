import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerGuard } from 'src/app/modules/core/guards/customer.guard';
import { HomeComponent } from 'src/app/modules/home/components/home/home.component';
import { PremisesComponent } from 'src/app/modules/home/components/premises/premises.component';
import { ServicesComponent } from 'src/app/modules/home/components/services/services.component';
import { ServiceProviderGuard } from '../core/guards/service-provider.guard';
import { ProviderServicesComponent } from './components/provider-services/provider-services.component';
import { PendingOrdersComponent } from './components/pending-orders/pending-orders.component';
import { AcceptOrderComponent } from './components/accept-order/accept-order.component';
import { MyRequestsComponent } from './components/my-requests/my-requests.component';

const uri = {
  SERVICES: 'services',
  ORDERS: 'orders',
  PREMISES: 'premises',
  BASE: '',
  PENDING_ORDERS: 'pending-orders',
  ACCEPT_ORDERS: 'accept-order/:orderId',
  PROVIDER_SERVICES: 'my-services',
  MY_REQUESTS: 'my-requests',
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
        path: uri.PENDING_ORDERS,
        component: PendingOrdersComponent,
        canActivate: [ServiceProviderGuard],
      },
      {
        path: uri.PROVIDER_SERVICES,
        component: ProviderServicesComponent,
        canActivate: [ServiceProviderGuard],
      },
      {
        path: uri.ACCEPT_ORDERS,
        component: AcceptOrderComponent,
        canActivate: [ServiceProviderGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
