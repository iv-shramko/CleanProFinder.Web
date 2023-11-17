import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ServiceComponent } from './components/service/service.component';
import { PremisesComponent } from './components/premises/premises.component';
import { PremiseComponent } from './components/premise/premise.component';
import { PremiseEditModalComponent } from './components/premise-edit-modal/premise-edit-modal.component';
import { CoreModule } from 'src/app/modules/core/core.module';

@NgModule({
  declarations: [
    HomeComponent,
    ServicesComponent,
    ServiceComponent,
    PremisesComponent,
    PremiseComponent,
    PremiseEditModalComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule, CoreModule],
})
export class HomeModule {}
