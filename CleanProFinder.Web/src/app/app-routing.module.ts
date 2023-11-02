import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from 'src/app/modules/shared/components/landing-page/landing-page.component';

const APP_ROUTING_URIS = {
  AUTH: 'auth',
  BASE: '',
  DISCARD: '**',
};

const routes: Routes = [
  {
    path: APP_ROUTING_URIS.BASE,
    component: LandingPageComponent,
  },
  {
    path: APP_ROUTING_URIS.AUTH,
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: APP_ROUTING_URIS.DISCARD,
    redirectTo: APP_ROUTING_URIS.BASE,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
