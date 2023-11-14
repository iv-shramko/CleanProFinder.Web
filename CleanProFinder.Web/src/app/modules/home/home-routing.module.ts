import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerGuard } from 'src/app/modules/core/guards/customer.guard';
import { HomeComponent } from 'src/app/modules/home/components/home/home.component';
import { PremisesComponent } from 'src/app/modules/home/components/premises/premises.component';
import { ServicesComponent } from 'src/app/modules/home/components/services/services.component';

const uri = {
  SERVICES: 'services',
  ORDERS: 'orders',
  PREMISES: 'premises',
  BASE: '',
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
