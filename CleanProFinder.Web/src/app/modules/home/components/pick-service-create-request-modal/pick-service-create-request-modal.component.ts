import { CleaningService } from 'src/app/modules/core/api/models/cleaing-service.model';
import { Component, OnInit } from '@angular/core';
import { ServiceProviderCreateRequest } from 'src/app/modules/core/api/models/service-provide-request-create.model';

@Component({
  selector: 'app-pick-service-create-request-modal',
  templateUrl: './pick-service-create-request-modal.component.html',
  styleUrls: ['./pick-service-create-request-modal.component.scss'],
})
export class PickServiceCreateRequestModalComponent implements OnInit {
  constructor() {}

  providers: ServiceProviderCreateRequest[] = [];

  ngOnInit(): void {}
}
