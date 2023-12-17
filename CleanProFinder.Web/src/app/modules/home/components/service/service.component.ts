import { Component, Input, OnInit } from '@angular/core';
import { ServiceProviderFullModel } from 'src/app/modules/core/api/models/service-provide-request-create.model';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnInit {
  constructor() {}

  @Input() service!: ServiceProviderFullModel;
  ngOnInit(): void {}
}
