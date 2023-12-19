import { ServiceProviderProfileComponent } from './components/service-provider-profile/service-provider-profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerProfileComponent } from 'src/app/modules/auth/components/customer-profile/customer-profile.component';
import { LoginComponent } from 'src/app/modules/auth/components/login/login.component';
import { SignupComponent } from 'src/app/modules/auth/components/signup/signup.component';

const AUTH_ROUTING_URIS = {
  LOGIN: 'login',
  SIGNUP: 'signup',
  BASE: '',
  SERVICE_PROVIDER_PROFILE: 'service-provider',
  CUSTOMER_PROFILE: 'customer',
  DISCARD: '**',
};

const routes: Routes = [
  {
    path: AUTH_ROUTING_URIS.LOGIN,
    component: LoginComponent,
  },
  {
    path: AUTH_ROUTING_URIS.CUSTOMER_PROFILE,
    component: CustomerProfileComponent,
  },
  {
    path: AUTH_ROUTING_URIS.SERVICE_PROVIDER_PROFILE,
    component: ServiceProviderProfileComponent,
  },
  {
    path: AUTH_ROUTING_URIS.SIGNUP,
    component: SignupComponent,
  },
  {
    path: AUTH_ROUTING_URIS.DISCARD,
    redirectTo: AUTH_ROUTING_URIS.BASE,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
