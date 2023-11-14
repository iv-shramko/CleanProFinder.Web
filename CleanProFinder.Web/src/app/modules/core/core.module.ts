import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CoreRoutingModule } from './core-routing.module';
import { ModalService } from 'src/app/modules/core/services/modal.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, CoreRoutingModule, HttpClientModule],
  providers: [],
})
export class CoreModule {}
