import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/modules/auth/components/login/login.component';
import { SignupComponent } from 'src/app/modules/auth/components/signup/signup.component';

const AUTH_ROUTING_URIS = {
  LOGIN: 'login',
  SIGNUP: 'signup',
  BASE: '',
  DISCARD: '**',
};

const routes: Routes = [
  {
    path: AUTH_ROUTING_URIS.LOGIN,
    component: LoginComponent,
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
