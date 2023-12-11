import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ServiceComponent } from './components/service/service.component';
import { ProviderServicesComponent } from './components/provider-services/provider-services.component';
import { MyRequestsComponent } from './components/my-requests/my-requests.component';
import { PremisesComponent } from './components/premises/premises.component';
import { PremiseComponent } from './components/premise/premise.component';
import { PremiseEditModalComponent } from './components/premise-edit-modal/premise-edit-modal.component';
import { CoreModule } from 'src/app/modules/core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RequestModalComponent } from './components/request-modal/request-modal.component';
import { PickServiceCreateRequestModalComponent } from './components/pick-service-create-request-modal/pick-service-create-request-modal.component';
import { ProviderRequestCreateComponent } from './components/provider-request-create/provider-request-create.component';

@NgModule({
  declarations: [
    HomeComponent,
    ServicesComponent,
    ServiceComponent,
    ProviderServicesComponent,
    MyRequestsComponent,
    PremisesComponent,
    PremiseComponent,
    PremiseEditModalComponent,
    RequestModalComponent,
    PickServiceCreateRequestModalComponent,
    ProviderRequestCreateComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class HomeModule {}
