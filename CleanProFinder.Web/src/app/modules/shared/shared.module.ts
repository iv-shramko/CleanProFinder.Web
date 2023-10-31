import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { UnauthorizedPageComponent } from './components/unauthorized-page/unauthorized-page.component';
import { CardDesignComponent } from './components/card-design/card-design.component';

@NgModule({
  declarations: [
    NotFoundPageComponent,
    UnauthorizedPageComponent,
    CardDesignComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [CardDesignComponent],
})
export class SharedModule { }
