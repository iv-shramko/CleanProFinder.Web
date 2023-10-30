import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { UnauthorizedPageComponent } from './components/unauthorized-page/unauthorized-page.component';


@NgModule({
  declarations: [
    NotFoundPageComponent,
    UnauthorizedPageComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
