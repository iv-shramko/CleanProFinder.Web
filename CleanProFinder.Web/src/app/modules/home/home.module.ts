import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ServiceComponent } from './components/service/service.component';
import { ProviderServicesComponent } from './components/provider-services/provider-services.component';
import { MyRequestsComponent } from './components/my-requests/my-requests.component';
import { PendingOrdersComponent } from './components/pending-orders/pending-orders.component';
import { OrderCardComponent } from './components/order-card/order-card.component';
import { PremisesComponent } from './components/premises/premises.component';
import { PremiseComponent } from './components/premise/premise.component';
import { PremiseEditModalComponent } from './components/premise-edit-modal/premise-edit-modal.component';
import { CoreModule } from 'src/app/modules/core/core.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    ServicesComponent,
    ServiceComponent,
    ProviderServicesComponent,
    MyRequestsComponent,
    PendingOrdersComponent,
    OrderCardComponent,
    PremisesComponent,
    PremiseComponent,
    PremiseEditModalComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule, CoreModule, FormsModule],
})
export class HomeModule {}
