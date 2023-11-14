import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ServiceComponent } from './components/service/service.component';

@NgModule({
  declarations: [HomeComponent, ServicesComponent, ServiceComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
