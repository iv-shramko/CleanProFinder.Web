import { Component, Input, OnInit } from '@angular/core';
import { CleaningService } from 'src/app/modules/core/api/models/cleaing-service.model';
import { ServiceProviderCreateRequest } from 'src/app/modules/core/api/models/service-provide-request-create.model';

@Component({
  selector: 'app-provider-request-create',
  templateUrl: './provider-request-create.component.html',
  styleUrls: ['./provider-request-create.component.scss'],
})
export class ProviderRequestCreateComponent implements OnInit {
  ngOnInit(): void {}
  @Input() request!: ServiceProviderCreateRequest;

  hovered: string = '';

  showPrice(id: string): void {
    this.hovered = id;
  }
}
