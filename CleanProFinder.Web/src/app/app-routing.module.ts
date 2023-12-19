import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/modules/auth/auth.guard';
import { LandingPageComponent } from 'src/app/modules/shared/components/landing-page/landing-page.component';

const APP_ROUTING_URIS = {
  AUTH: 'auth',
  BASE: '',
  UNAUTHORIZED: 'unauthorized',
  DISCARD: '**',
};

const routes: Routes = [
  {
    path: APP_ROUTING_URIS.UNAUTHORIZED,
    component: LandingPageComponent,
  },
  {
    path: APP_ROUTING_URIS.AUTH,
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: APP_ROUTING_URIS.BASE,
    loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuard],
  },
  {
    path: APP_ROUTING_URIS.DISCARD,
    redirectTo: APP_ROUTING_URIS.BASE,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
